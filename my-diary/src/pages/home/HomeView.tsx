import React from 'react';
import IconArea from './IconArea/IconArea';
import DiaryForm from '../../components/DiaryForm/DiaryForm';
import DiaryList from '../../components/DiaryList/DiaryList';
import { PropsType } from './Home';
import Calculator from '../../components/Calculator/Calculator';
import Visitor from '../visitors/Visitor';
import Minesweeper from '../../components/Minesweeper/Minesweeper';
import * as S from "./home.style";

export default function HomeView({
    formStatus,
    calcStatus,
    visitorStatus,
    gameStatus,
    userUid,
    documents,
    error,
}: PropsType) {
    return (
        <S.Wrapper>
            <IconArea />
            <S.Container>
                <aside>
                    {formStatus ? <DiaryForm uid={userUid} /> : <></>}
                </aside>
                {calcStatus && <Calculator />}
                {visitorStatus && <Visitor />}
                {gameStatus && <Minesweeper />}
                <S.DiaryList>
                    {error && <strong>{error}</strong>}
                    {documents && <DiaryList diaries={documents} />}
                </S.DiaryList>
            </S.Container>
        </S.Wrapper>
    );
}
