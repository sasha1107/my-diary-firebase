import React from 'react'
import * as S from "./footer.style";
import Clock from "react-live-clock";
import { useRef, useContext, useState } from 'react';
import FormContext from '../context/FormContext';
import InfoContext from '../context/InfoContext';
import shutdown from "../img/ShutDown.png"
import info from "../img/Info.png"
import diary from "../img/Wordpad.png"
import { useAuthContext } from '../hooks/useAuthContext';
import Modal from './Modal/Modal';

export default function Footer() {
    const menuRef = useRef(null);

    // 일기 쓰기 탭 디스플레이 상태
    const { status, toggleStatus } = useContext(FormContext);

    // 정보 탭 디스플레이 상태
    const { infoStatus, toggleInfoStatus } = useContext(InfoContext);

    const { isAuthReady, user } = useAuthContext();
    const [isOpen, setIsOpen] = useState(false);
    

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
        <>
        <S.FooterCont>
            <S.MenuBtn onClick={handleMenu}/>
            <S.TabOl>
                {status !== "none"  && user ? 
                <li>일기 쓰기</li>
                : <></>}
                {infoStatus !== "none" && user ?
                <li>정보</li>
                : <></>}
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
                <li onClick={() => {
                    if (infoStatus === "none") {toggleInfoStatus()}
                    setIsOpen(true);
                }}>
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
        <Modal
        open={isOpen}
            onClose={() => {
                setIsOpen(false);
                toggleInfoStatus();
            }}
            tit="정보"
            msg="리액트와 파이어베이스로 구현한 웹 다이어리 서비스"
            btn1="닫기"
        >
        {/* Modal Childrend으로 전달 */}
        <S.InfoTable>
            <thead>
                <tr>
                    <th colSpan="2">
                    프론트엔드
                    </th>
                    <th>서버, 배포</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <img src="https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1579667701/noticon/basd2y5bygpkqjiixuqy.png" alt="React" height="50" />
                        <br/>
                        React
                    </td>
                    <td>
                        <img src="https://profilinator.rishav.dev/skills-assets/styled-components.png" alt="Styled Components" height="50" />
                        <br/>
                        styled-components
                    </td>
                    <td>
                        <img src="https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1566913958/noticon/uoqjdixts4lwsgtsa1pd.png" alt="Firebase" height="50" />
                        <br/>
                        Firebase
                    </td>
                </tr>
            </tbody>
        </S.InfoTable>
        </Modal>
        </>
    )
}
