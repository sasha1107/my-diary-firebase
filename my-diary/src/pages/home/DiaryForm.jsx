import { useEffect, useState, useContext } from 'react'
import { useFirestore } from '../../hooks/useFirestore';
import FormContext from '../../context/FormContext';
import * as S from "./diaryForm.style";
import DragCont from '../../components/DragCont';

export default function DiaryForm({ uid }) {

    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const { addDocument, response } = useFirestore('myDiary');
    const { status, toggleStatus } = useContext(FormContext);

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
        <DragCont>
            <S.FormCont onSubmit={handleSubmit}>
                <fieldset>
                    <S.FormTit>
                        일기 쓰기
                        <S.CloseBtn
                        onClick={() => toggleStatus()}
                        >x</S.CloseBtn>
                    </S.FormTit>
                    <S.FormContent>
                    <S.InpLabel htmlFor="tit">일기 제목 :</S.InpLabel>
                    <S.Inp id="tit" type="text" required value={title} onChange={handleData} />

                    <S.InpLabel htmlFor="txt">일기 내용 : </S.InpLabel>
                    <S.TxtArea id="txt" required value={text} onChange={handleData}></S.TxtArea>

                    <S.SubmitBtn><u>저</u>장하기</S.SubmitBtn>
                    </S.FormContent>
                </fieldset>
            </S.FormCont>
        </DragCont>
    )
}