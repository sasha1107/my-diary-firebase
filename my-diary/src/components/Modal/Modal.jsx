import React from 'react'
import * as S from "./modal.style"
import ReactDOM from "react-dom";

export default function Modal({ open, children, onClose }) {
    if (!open) return null;

    return ReactDOM.createPortal(
        <>
            <S.Overlay/>
            <S.ModalCont>
                {children}
                <button onClick={onClose}>Close Modal</button>
            </S.ModalCont>
        </>,
        document.getElementById("modal")
    )
}
