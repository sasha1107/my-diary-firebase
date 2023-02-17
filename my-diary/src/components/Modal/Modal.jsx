import React from 'react'
import * as S from "./modal.style"
import ReactDOM from "react-dom";

export default function Modal({ open, onClose, onFunc, tit, msg, btn1, btn2 }) {
    if (!open) return null;

    return ReactDOM.createPortal(
        <>
            <S.Overlay/>
            <S.ModalCont>
                <div className="title">
                    {tit}
                    <button onClick={onClose}>x</button>
                </div>
                <div className="body">
                    <p>{msg}</p>
                    <div className="buttons">
                        <button onClick={onClose}>{btn1}</button>
                        <button onClick={onFunc}>{btn2}</button>
                    </div>
                </div>
            </S.ModalCont>
        </>,
        document.getElementById("modal")
    )
}
