import React, { useEffect, useState } from 'react'
import { ref, push, onValue } from "firebase/database";
import { database } from '../../firebase/firebaseConfig';
import VisitorView from './VisitorView';

interface GuestbookEntry {
    nickname: string;
    message: string;
    timestamp: number;
}
export interface PropsType {
    guestbookEntries: GuestbookEntry[];
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    nickname: string;
    setNickname: React.Dispatch<React.SetStateAction<string>>;
    message: string;
    setMessage: React.Dispatch<React.SetStateAction<string>>;
}

export default function Visitor() {
    const [nickname, setNickname] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const [guestbookEntries, setGuestbookEntries] = useState<GuestbookEntry[]>([]);

    useEffect(() => {
        // ref 함수를 사용하여 guestbook 데이터베이스 참조를 생성
        const guestbookRef = ref(database, 'guestbookEntries');

        // onValue 함수를 사용하여 guestbookRef의 값을 실시간으로 감시
        onValue(guestbookRef, (snapshot) => {
            const entries: GuestbookEntry[] = [];
            
            snapshot.forEach((childSnapshot) => {
                // snapshot에서 가져온 데이터를 GuestbookEntry 타입으로 변환한 후, guestbookEntries 상태를 업데이트
                const entry: GuestbookEntry = {
                    nickname: childSnapshot.child('nickname').val(),
                    message: childSnapshot.child('message').val(),
                    timestamp: childSnapshot.child('timestamp').val(),
                };
                
                // push() 메서드를 사용하여 데이터를 저장하면 Firebase Realtime Database에서 자동으로 유니크한 ID를 생성하고 해당 ID에 데이터를 저장
                entries.push(entry);
            });
            setGuestbookEntries(entries);
        });

        return () => {
            // Firebase Realtime Database의 감시를 중단(clean-up)
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
        push(ref(database, 'guestbookEntries'), newEntry);

        // form 초기화
        setNickname("")
        setMessage("")
    }

    const props = {
        guestbookEntries,
        handleSubmit,
        nickname,
        setNickname,
        message,
        setMessage
    }

    return (
        <VisitorView {...props}/>
    );
}
