import React from 'react'
import DragCont from '../DragContainer/DragCont'
import * as S from "./desktopIcon.style"

export default function DesktopIcon(props) {
    const handleDbClick = (func, e) => {
        // console.log(e.detail);
        if (e.detail === 2) func();
    }; 

    return (
        <DragCont >
            {props.func ? 
                <S.Container onClick={(e) => handleDbClick(props.func, e)}>
                <S.Icon src={props.src} alt=''/>
                <S.IconTxt>{props.txt}</S.IconTxt>
                </S.Container>
            : 
            <S.Container>
                <S.Icon src={props.src} alt=''/>
                <S.IconTxt>{props.txt}</S.IconTxt>
            </S.Container>
            }
        </DragCont>
    )
}
