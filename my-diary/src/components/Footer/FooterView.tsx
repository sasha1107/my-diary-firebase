import React from 'react';
import { useDispatch } from 'react-redux';
import Clock from 'react-live-clock';
import Modal from '../Modal/Modal';
import shutdown from 'assets/img/ShutDown.png';
import info from 'assets/img/Info.png';
import diary from 'assets/img/Wordpad.png';
import calculator from 'assets/img/Calculator.png';
import printer from 'assets/img/Printer.png';
import minesweeper from 'assets/img/Minesweeper.png';

import * as S from './footer.style';
import { PropsType } from './Footer';

export default function FooterView({
    menuRef,
    formStatus,
    exitStatus,
    infoStatus,
    calcStatus,
    visitorStatus,
    gameStatus,
    user,
    isInfoModalOpen,
    setIsInfoMoalOpen,
    isCloseModalOpen,
    SetIsCloseModalOpen,
    handleMenu,
    handlelink,
}: PropsType) {
    const dispatch = useDispatch();

    return (
        <>
            <S.FooterCont>
                <S.MenuBtn onClick={handleMenu} />
                <S.TabOl>
                    {formStatus && user ? <li>일기 쓰기</li> : <></>}
                    {infoStatus && user ? <li>정보</li> : <></>}
                    {/* {(diaryCount !== 0) ? 
                <li>일기 목록
                    <span>{diaryCount}</span>
                </li>
                :<></>
                } */}
                    {exitStatus && user ? <li>비밀일기 닫기</li> : <></>}
                    {calcStatus && user ? <li>계산기</li> : <></>}
                    {visitorStatus && user ? <li>방명록</li> : <></>}
                    {gameStatus && user ? <li>지뢰찾기</li> : <></>}
                </S.TabOl>
                <S.MenuList
                    ref={menuRef}
                    onMouseLeave={(e) => {
                        const target = e.target as HTMLElement;
                        if (target.tagName === 'LI' && target.parentElement) {
                            target.parentElement.style.display = 'none';
                        } else if (target.tagName === 'OL') {
                            target.style.display = 'none';
                        }
                    }}
                >
                    <li
                        onClick={() => {
                            if (!formStatus) {
                                dispatch({ type: 'toggleForm' });
                            }
                        }}
                    >
                        <img src={diary} alt='' width='32px' />
                        <u>일</u>기 쓰기
                    </li>
                    <li
                        onClick={() => {
                            if (!calcStatus) {
                                dispatch({ type: 'toggleCalc' });
                            }
                        }}
                    >
                        <img src={calculator} alt='' width='32px' />
                        <u>계</u>산기
                    </li>
                    <li
                        onClick={() => {
                            if (!visitorStatus) {
                                dispatch({ type: 'toggleVisitor' });
                            }
                        }}
                    >
                        <img src={printer} alt='' width='32px' />
                        <u>방</u>명록
                    </li>
                    <li
                        onClick={() => {
                            if (!gameStatus) {
                                dispatch({ type: 'toggleGame' });
                            }
                        }}
                    >
                        <img src={minesweeper} alt='' width='32px' />
                        <u>지</u>뢰찾기
                    </li>
                    <li
                        onClick={() => {
                            if (!infoStatus) {
                                dispatch({ type: 'toggleInfo' });
                            }
                            setIsInfoMoalOpen(true);
                        }}
                    >
                        <img src={info} alt='' width='32px' />
                        <u>정</u>보
                    </li>
                    <li
                        onClick={() => {
                            dispatch({ type: 'toggleExit' });
                            SetIsCloseModalOpen(true);
                        }}
                    >
                        <img src={shutdown} alt='' width='32px' />
                        <u>비</u>밀일기 닫기
                    </li>
                </S.MenuList>
                <S.ClockCont>
                    <S.GitHubBtn onClick={handlelink} />
                    <Clock format={'h:mm A'} ticking={true} />
                </S.ClockCont>
            </S.FooterCont>
            <Modal
                open={isInfoModalOpen}
                onClose={() => {
                    setIsInfoMoalOpen(false);
                    dispatch({ type: 'toggleInfo' });
                }}
                tit='정보'
                msg='리액트와 파이어베이스로 구현한 웹 다이어리 서비스'
                btn1='닫기'
            >
                {/* Modal Childrend으로 전달 */}
                <S.InfoTable>
                    <thead>
                        <tr>
                            <th colSpan={2}>프론트엔드</th>
                            <th>서버, 배포</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <img
                                    src='https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1579667701/noticon/basd2y5bygpkqjiixuqy.png'
                                    alt='React'
                                    height='50'
                                />
                                <br />
                                React
                            </td>
                            <td>
                                <img
                                    src='https://profilinator.rishav.dev/skills-assets/styled-components.png'
                                    alt='Styled Components'
                                    height='50'
                                />
                                <br />
                                styled-components
                            </td>
                            <td>
                                <img
                                    src='https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1566913958/noticon/uoqjdixts4lwsgtsa1pd.png'
                                    alt='Firebase'
                                    height='50'
                                />
                                <br />
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
                    dispatch({ type: 'toggleExit' });
                }}
                tit='Processing...'
                msg='다 기다려도 안꺼집니다 ...'
                btn1='취소'
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
    );
}
