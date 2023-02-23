import { useEffect, useState, useRef } from 'react'
import { useLogin } from '../../../hooks/useLogin';
import LoginView from './LoginView';

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

    const props = {
        isPending,
        email,
        password,
        emailErrMsg,
        pwErrMsg,
        emailRef,
        pwRef,
        handleData,
        handleSubmit
    }

    return (
        <LoginView {...props}/>
    )
}