import React from 'react'
import DragCont from '../../../components/DragContainer/DragCont';
import * as S from "../shared.style";
import { PropsType } from './Signup';

export default function SignupView({
    email,
    password,
    displayName,
    emailErrMsg,
    pwErrMsg,
    emailRef,
    pwRef,
    handleData,
    handleSubmit,
    isPending
}: PropsType) {
    return (
        <DragCont>
            <S.Form onSubmit={handleSubmit}>
            <fieldset>
                <S.FormTit>Signup</S.FormTit>
                <S.FormContent>
                <S.InpLabel htmlFor='myEmail'>Email :</S.InpLabel>
                <S.Inp type="email" id="myEmail" required value={email} ref={emailRef} onChange={handleData}/>
                <S.ErrMsg>{emailErrMsg}</S.ErrMsg>

                <S.InpLabel htmlFor='myPassWord'>Password :</S.InpLabel>
                <S.Inp type="password" id="myPassWord" required value={password} ref={pwRef} onChange={handleData}/>
                <S.ErrMsg>{pwErrMsg}</S.ErrMsg>

                <S.InpLabel htmlFor='myNickname'>Nickname :</S.InpLabel>
                <S.Inp type="text" id="myNickname" required value={displayName} onChange={handleData}/>
                {isPending && <S.ErrMsg>회원가입 중입니다. . .</S.ErrMsg>}
                <S.SubmitBtn>SIGNUP</S.SubmitBtn>
                </S.FormContent>
            </fieldset>
            </S.Form>
        </DragCont>
    )
}
