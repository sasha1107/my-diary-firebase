import React, { useEffect, useState } from 'react'
import { ref, push, onValue } from "firebase/database";
import { database } from '../../firebase/firebaseConfig';
import * as S from "./visitor.style"

interface GuestbookEntry {
    nickname: string;
    message: string;
    timestamp: number;
}


export default function Visitor() {
    const [nickname, setNickname] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const [guestbookEntries, setGuestbookEntries] = useState<GuestbookEntry[]>([]);

    useEffect(() => {
        const guestbookRef = ref(database, 'guestbookEntries');

        onValue(guestbookRef, (snapshot) => {
            const entries: GuestbookEntry[] = [];
            
            snapshot.forEach((childSnapshot) => {
                const entry: GuestbookEntry = {
                    nickname: childSnapshot.child('nickname').val(),
                    message: childSnapshot.child('message').val(),
                    timestamp: childSnapshot.child('timestamp').val(),
                };
                entries.push(entry);
            });
            setGuestbookEntries(entries);
        });

        return () => {
            // Firebase Realtime Database의 감시를 중단
        };
    }, []);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const newEntry: GuestbookEntry = {
            nickname,
            message,
            timestamp: Date.now()
        };

        // firebase realtime database에 저장
        console.log(newEntry)
        push(ref(database, 'guestbookEntries'), newEntry);

        // form 초기화
        setNickname("")
        setMessage("")
    }

    return (
        <S.VisitorCont>
            <S.VisitorTit>
                방명록
                <S.CloseBtn>x</S.CloseBtn>
            </S.VisitorTit>
            <S.VisitorBody>
            <S.GuestbookEntries>
            {guestbookEntries.map((entry) => (
                <S.MsgItem key={entry.timestamp}>
                    <div>
                        <S.Nickname>{entry.nickname}</S.Nickname>
                        <S.Message>{entry.message}</S.Message>
                    </div>
                    <S.TimeStamp>
                        {new Date(entry.timestamp).toLocaleString()}
                    </S.TimeStamp>
                </S.MsgItem>
            ))}
            </S.GuestbookEntries>
            <S.GuestBookForm onSubmit={handleSubmit}>
                <div>
                    <div>
                        <label htmlFor="name">닉네임:</label>
                        <input
                        type="text"
                        name="name"
                        value={nickname}
                        onChange={(e) => setNickname(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="message">내용:</label>
                        <textarea
                        name="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        />
                    </div>
                </div>
                <S.SubmitBtn type="submit">Submit</S.SubmitBtn>
            </S.GuestBookForm>
            </S.VisitorBody>
        </S.VisitorCont>
    );
}
