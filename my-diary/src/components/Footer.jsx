import React from 'react'
import * as S from "./footer.style";
import Clock from "react-live-clock";
import { useRef } from 'react';

export default function Footer() {
    const menuRef = useRef(null);

    const handleMenu = (e) => {
        console.log(menuRef.current.style);
        if (!menuRef.current.style.display | menuRef.current.style.display === "flex"){
            menuRef.current.style.display = "none";
        }
        else {
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
            >
                <li><u>일</u>기 쓰기</li>
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
