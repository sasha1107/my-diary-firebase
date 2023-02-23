import React from 'react'
import { useDispatch } from 'react-redux';
import DragCont from '../DragContainer/DragCont';
import * as S from "./diaryForm.style";

export default function DiaryFormView({
    title,
    text,
    handleData,
    handleSubmit,
}) {
    const dispatch = useDispatch();

    return (
        <DragCont>
            <S.FormCont onSubmit={handleSubmit}>
                <fieldset>
                    <S.FormTit>
                        일기 쓰기
                        <S.CloseBtn
                        onClick={() => {
                            dispatch({type: "toggleForm"})
                        }}
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
