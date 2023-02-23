import React from 'react';
import { useEffect, useState } from 'react'
import { useFirestore } from '../../hooks/useFirestore';
import DiaryFormView from './DiaryFormView';

export interface PropsType {
    title: string;
    text: string;
    handleData: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
    handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void
}

export default function DiaryForm({ uid } : { uid: string }) {
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const { addDocument, response } = useFirestore('myDiary');

    const handleData = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        if (event.target.id === 'tit') {
            setTitle(event.target.value);
        } else if (event.target.id === 'txt') {
            setText(event.target.value);
        }
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(title, text);
        addDocument({
            uid, title, text, 
        });
    }

    useEffect(() => {
        if (response.success){
            console.log(response)
            setText('');
            setTitle('')
        }
    }, [response.success])

    const props = {
        title,
        text,
        handleData,
        handleSubmit,
    }

    return (
        <DiaryFormView {...props}/>
    )
}