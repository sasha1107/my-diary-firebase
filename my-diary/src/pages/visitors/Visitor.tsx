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
