import React from 'react'
import DragCont from '../DragCont'
import * as S from "./desktopIcon.style"

export default function DesktopIcon(props) {
    return (
        <DragCont>
            <S.Container>
                <S.Icon src={props.src} alt=''/>
                <S.IconTxt>{props.txt}</S.IconTxt>
            </S.Container>
        </DragCont>
    )
}
