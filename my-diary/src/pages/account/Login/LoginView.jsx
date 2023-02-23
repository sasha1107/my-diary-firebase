import React from 'react'
import DragCont from '../../../components/DragContainer/DragCont';
import * as S from "../shared.style";

export default function LoginView({
    isPending,
    email,
    password,
    emailErrMsg,
    pwErrMsg,
    emailRef,
    pwRef,
    handleData,
    handleSubmit
}) {
    return (
        <DragCont>
            <S.Form onSubmit={handleSubmit}>
                <fieldset>
                    <S.FormTit>Login</S.FormTit>
                    <S.FormContent>
                        <S.InpLabel htmlFor="myEmail">Email :</S.InpLabel>
                        <S.Inp
                            type="email"
                            id='myEmail'
                            required
                            value={email}
                            ref={emailRef}
                            onChange={handleData}
                        />
                        {!isPending && <S.ErrMsg>{emailErrMsg}</S.ErrMsg>}
                        <S.InpLabel htmlFor="myPassWord">Password :</S.InpLabel>
                        <S.Inp
                            type="password"
                            id='myPassWord'
                            required
                            value={password}
                            ref={pwRef}
                            onChange={handleData}
                        />
                        {!isPending && <S.ErrMsg>{pwErrMsg}</S.ErrMsg>}
                        {!isPending && <S.SubmitBtn type='submit'>LOGIN</S.SubmitBtn>}
                        {isPending && <S.ErrMsg className='alert'>로그인 중입니다. . .</S.ErrMsg>}
                    </S.FormContent>
                </fieldset>
            </S.Form>
        </DragCont>
    )
}
