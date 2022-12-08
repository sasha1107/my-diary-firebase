import { useEffect, useState } from 'react'
import { useFirestore } from '../../hooks/useFirestore';

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

    return (
        <>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>일기 쓰기</legend>

                    <label htmlFor="tit">일기 제목 :</label>
                    <input id="tit" type="text" required value={title} onChange={handleData} />

                    <label htmlFor="txt">일기 내용 : </label>
                    <textarea id="txt" required value={text} onChange={handleData}></textarea>

                    <button>저장하기</button>
                </fieldset>
            </form>
        </>
    )
}