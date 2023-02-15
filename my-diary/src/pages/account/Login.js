import { useEffect, useState, useRef } from 'react'
import { useLogin } from '../../hooks/useLogin';
import * as S from "./shared.style";

export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { error, isPending, login } = useLogin();
    const [emailErrMsg, setEmailErrMsg] = useState(null);
    const [pwErrMsg, setPwErrMsg] = useState(null);
    const emailRef = useRef(null);
    const pwRef = useRef(null);

    const handleData = (event) => {
        // console.log(event.target.type);
        if (event.target.type === 'email') {
            setEmail(event.target.value);
        } else if (event.target.type === 'password') {
            setPassword(event.target.value);
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();// 새로고침 막기
        // console.log(email, password);
        login(email, password);
    }

    useEffect(() => {
        if (error === "Firebase: Error (auth/user-not-found)."){
            setEmailErrMsg("* 사용자 정보를 찾을 수 없습니다.");
            setPwErrMsg(null);

            // 이메일 인풋창으로 다시 커서 포커스
            emailRef.current.focus();
        }
        else if (error === "Firebase: Error (auth/wrong-password)."){
            setPwErrMsg("* 비밀번호가 일치하지 않습니다.");
            setEmailErrMsg(null);

            // 패스워드 인풋창으로 다시 커서 포커스
            pwRef.current.focus();
        }
    }, [error])

    return (
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
                    {/* {error && <strong>error</strong>} */}
                    {/* <button type='submit' className={styles.btn}>로그인</button> */}
                </S.FormContent>
            </fieldset>
        </S.Form>
    )
}