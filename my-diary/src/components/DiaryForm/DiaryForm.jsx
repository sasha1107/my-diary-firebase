import { useEffect, useState } from 'react'
import { useFirestore } from '../../hooks/useFirestore';
import DiaryFormView from './DiaryFormView';

export default function DiaryForm({ uid }) {
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const { addDocument, response } = useFirestore('myDiary');

    const handleData = (event) => {
        if (event.target.id === 'tit') {
            setTitle(event.target.value);
        } else if (event.target.id === 'txt') {
            setText(event.target.value);
        }
    }

    const handleSubmit = (event) => {
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