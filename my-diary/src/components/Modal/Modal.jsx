import React from 'react'
import * as S from "./modal.style"
import ReactDOM from "react-dom";

export default function Modal({ open, onClose, onFunc, tit, msg, btn1, btn2, children }) {
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
                                {btn1}
                            </div>    
                        </S.Btn1>
                        { btn2 ? 
                            <S.Btn2 onClick={onFunc}>
                                <div>
                                    {btn2}
                                </div>
                            </S.Btn2>
                        : <></>}
                    </S.BtnCont>
                </S.ModalBody>
            </S.ModalCont>
        </>,
        document.getElementById("modal")
    )
}
