import React from 'react'
import * as S from "./footer.style";
import Clock from "react-live-clock";
import { useRef, useContext } from 'react';
import FormContext from '../context/FormContext';

export default function Footer() {
    const menuRef = useRef(null);
    const { status, toggleStatus } = useContext(FormContext);

    const handleMenu = (e) => {
        // console.log(menuRef.current.style);
        if (!menuRef.current.style.display){
            menuRef.current.style.display = "flex";
        } 
        else if (menuRef.current.style.display === "flex"){
            menuRef.current.style.display = "none";
        }
        else if (menuRef.current.style.display === "none") {
            menuRef.current.style.display = "flex";
        }
    }
    const handlelink = () => {
        const link = "https://www.github.com/sasha1107/my-diary-firebase";
        window.open(link, '_blank');
} 

    return (
        <S.FooterCont>
            <S.MenuBtn onClick={handleMenu}/>
            <S.MenuList
                ref={menuRef}
                onMouseLeave={(e)=> {
                    if (e.target.tagName === "LI"){
                        e.target.parentElement.style.display = "none"; 
                    }
                    else if (e.target.tagName === "OL"){
                        e.target.style.display = "none"; 
                    }
                }}
            >
                <li
                onClick={() => toggleStatus()}
                ><u>일</u>기 쓰기</li>
                <li><u>정</u>보</li>
            </S.MenuList>
            <S.ClockCont>
                <S.GitHubBtn onClick={handlelink}/>
                <Clock
                    format={'h:mm A'}
                    ticking={true}
                />
            </S.ClockCont>
        </S.FooterCont>
    )
}
