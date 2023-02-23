import React from 'react'
import Modal from "../Modal/Modal";
import icon from '../../img/MyComputer.png'
import *  as S from "./nav.style.js"

export default function NavView({
        logout,
        user,
        msg,
        isOpen,
        setIsOpen
    }) {
    return (
        <>
        <S.NavCont>
            <S.LogoCont>
                <S.ComputerIcon src={icon} alt='컴퓨터 이미지'/>
                <S.LogoTxt>
                    두근두근 비밀일기
                </S.LogoTxt>
            </S.LogoCont>
            <S.OptUl>
                {!user &&
                <> 
                <li>
                    <S.LoginSignupLink to='/login'>LOGIN</S.LoginSignupLink>
                </li>
                <li>
                    <S.LoginSignupLink to='/signup'>SIGNUP</S.LoginSignupLink>
                </li>
                </>}
                {user &&
                <li>
                    <S.WelcomeMsg>{msg}<strong> {user.displayName}</strong>님
                    </S.WelcomeMsg>
                    <S.LogoutBtn type="button" onClick={() => setIsOpen(true)}>
                        LOGOUT
                    </S.LogoutBtn>
                </li>}
            </S.OptUl>
        </S.NavCont>
        <Modal
            open={isOpen}
            onClose={() => setIsOpen(false)}
            onFunc={() => {
                logout()
                setIsOpen(false)
            }}
            tit="로그아웃"
            msg="로그아웃하시겠습니까?"
            btn1="취소"
            btn2="로그아웃"
        />
        </>
    )
}
