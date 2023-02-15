import { useState } from 'react'
import { useLogin } from '../../hooks/useLogin';
import * as S from "./shared.style";

export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { error, isPending, login } = useLogin();

    const handleData = (event) => {
        console.log(event.target.type);
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

    return (
        <S.Form onSubmit={handleSubmit}>
            <fieldset>
                <S.FormTit>Login</S.FormTit>
                <S.FormContent>
                    <S.InpLabel htmlFor="myEmail"> Email</S.InpLabel>
                    <S.Inp type="email" id='myEmail' required value={email} onChange={handleData} />

                    <S.InpLabel htmlFor="myPassWord">Password</S.InpLabel>
                    <S.Inp type="password" id='myPassWord' required value={password} onChange={handleData} />

                    {!isPending && <S.SubmitBtn type='submit'>LOGIN</S.SubmitBtn>}
                    {isPending && <S.ErrMsg className='alert'>로그인 중입니다. . .</S.ErrMsg>}
                    {error && <strong>error</strong>}
                    {/* <button type='submit' className={styles.btn}>로그인</button> */}
                </S.FormContent>
            </fieldset>
        </S.Form>
    )
}