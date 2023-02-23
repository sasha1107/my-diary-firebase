import React from 'react'
import * as S from "./modal.style"
import ReactDOM from "react-dom";

interface ModalProps {
    open: boolean;
    onClose: () => void;
    onFunc?: () => void;
    tit: string;
    msg: string;
    btn1: string;
    btn2?: string;
    children?: React.ReactChild;

}
export default function Modal({ open, onClose, onFunc, tit, msg, btn1, btn2, children } : ModalProps) {
    if (!open) return null;

    return ReactDOM.createPortal(
        <>
            <S.Overlay/>
            <S.ModalCont>
                <S.ModalHeader>
                    {tit}
                    <S.CloseBtn onClick={onClose}>x</S.CloseBtn>
                </S.ModalHeader>
                <S.ModalBody>
                    <p>{msg}</p>
                    {children}
                    <S.BtnCont className="buttons">
                        <S.Btn1 onClick={onClose}>
                            <div>
                                <u>{btn1.split('').splice(0,1)}</u>
                                {btn1.split('').splice(1,)}
                            </div>    
                        </S.Btn1>
                        { btn2 ? 
                            <S.Btn2 onClick={onFunc}>
                                <div>
                                <u>{btn2.split('').splice(0,1)}</u>
                                {btn2.split('').splice(1,)}
                                </div>
                            </S.Btn2>
                        : <></>}
                    </S.BtnCont>
                </S.ModalBody>
            </S.ModalCont>
        </>,
        document.getElementById("modal") as HTMLElement
    )
}
