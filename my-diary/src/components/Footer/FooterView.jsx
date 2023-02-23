import React from 'react'
import { useDispatch } from 'react-redux';
import Clock from "react-live-clock";
import Modal from '../Modal/Modal';
import shutdown from "../../img/ShutDown.png"
import info from "../../img/Info.png"
import diary from "../../img/Wordpad.png"
import * as S from "./footer.style";

export default function FooterView({
    menuRef, 
    formStatus,
    exitStatus,
    infoStatus,
    user,
    isInfoModalOpen,
    setIsInfoMoalOpen,
    isCloseModalOpen,
    SetIsCloseModalOpen,
    handleMenu,
    handlelink
}) {
    const dispatch = useDispatch();

    return (
        <>
        <S.FooterCont>
            <S.MenuBtn onClick={handleMenu}/>
            <S.TabOl>
                {formStatus && user ? 
                <li>일기 쓰기</li>
                : <></>}
                {infoStatus && user ?
                <li>정보</li>
                : <></>}
                {/* {(diaryCount !== 0) ? 
                <li>일기 목록
                    <span>{diaryCount}</span>
                </li>
                :<></>
                } */}
                {exitStatus && user ?
                <li>비밀일기 닫기</li>
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
                        if (!formStatus) {
                            dispatch({type: "toggleForm"})
                        }
                }}>
                    <img src={diary} alt="" width="32px"/>
                    <u>일</u>기 쓰기
                </li>
                <li onClick={() => {
                    if (!infoStatus) {dispatch({type: "toggleInfo"})}
                    setIsInfoMoalOpen(true);
                }}>
                    <img src={info} alt="" width="32px"/>
                    <u>정</u>보
                </li>
                <li onClick={() => {
                    dispatch({type: "toggleExit"});
                    SetIsCloseModalOpen(true);
                }}>
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
        open={isInfoModalOpen}
            onClose={() => {
                setIsInfoMoalOpen(false);
                dispatch({type: "toggleInfo"});
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
        <Modal
            open={isCloseModalOpen}
            onClose={() => {
                SetIsCloseModalOpen(false);
                dispatch({type: "toggleExit"});
            }}
            tit="Processing..."
            msg="다 기다려도 안꺼집니다 ..."
            btn1="취소"
        >
            <S.StatusBar>
                <ol>
                    <li>1</li>
                    <li>1</li>
                    <li>1</li>
                    <li>1</li>
                    <li>1</li>
                    <li>1</li>
                    <li>1</li>
                    <li>1</li>
                    <li>1</li>
                    <li>1</li>
                    <li>1</li>
                    <li>1</li>
                    <li>1</li>
                </ol>
            </S.StatusBar>
        </Modal>
        </>
    )
}