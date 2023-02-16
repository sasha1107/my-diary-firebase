import React from 'react'
import * as S from "./footer.style";
import Clock from "react-live-clock";
import { useRef, useContext } from 'react';
import FormContext from '../context/FormContext';
import shutdown from "../img/ShutDown.png"
import info from "../img/Info.png"
import diary from "../img/Wordpad.png"
import { useAuthContext } from '../hooks/useAuthContext';


export default function Footer() {
    const menuRef = useRef(null);
    const { status, toggleStatus } = useContext(FormContext);
    const { isAuthReady, user } = useAuthContext();
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
            <S.TabOl>
                {status !== "none"  && user ? 
                <li>일기 쓰기</li>
                : <></>}
                {/* <li>일기</li> */}
            </S.TabOl>
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
                    onClick={() => 
                    {
                        if (status === "none") toggleStatus()
                }}>
                    <img src={diary} alt="" width="32px"/>
                    <u>일</u>기 쓰기
                </li>
                <li>
                    <img src={info} alt="" width="32px"/>
                    <u>정</u>보
                </li>
                <li>
                    <img src={shutdown} alt="" width="32px"/>
                    <u>비</u>밀일기 닫기
                </li>
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
