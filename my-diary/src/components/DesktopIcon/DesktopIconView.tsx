import React from 'react'
import DragCont from '../DragContainer/DragCont'
import * as S from "./desktopIcon.style"
import { PropsType } from './DesktopIcon'

    export default function DesktopIconView({ func, src, txt, handleDbClick } : PropsType) {
    return (
        <DragCont>
            {/* 실행할 함수 func까지 전달 받았다면 실행할 부분 */}
            {func ? 
                <S.Container onClick={(e) => handleDbClick(func, e)}>
                <S.Icon src={src} alt=''/>
                <S.IconTxt>{txt}</S.IconTxt>
                </S.Container>
            : 
            // 실행할 함수 func 전달 X 시 실행할 부분
            <S.Container>
                <S.Icon src={src} alt=''/>
                <S.IconTxt>{txt}</S.IconTxt>
            </S.Container>
            }
        </DragCont>
    )
}
