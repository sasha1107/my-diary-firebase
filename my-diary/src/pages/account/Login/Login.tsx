import React from 'react';
import { useEffect, useState, useRef } from 'react'
import { useLogin } from '../../../hooks/useLogin';
import LoginView from './LoginView';

export interface PropsType {
    isPending: boolean;
    email: string;
    password: string;
    emailErrMsg: string | null;
    pwErrMsg: string | null;
    emailRef: React.RefObject<HTMLInputElement>;
    pwRef: React.RefObject<HTMLInputElement>;
    handleData: (event: React.ChangeEvent<HTMLInputElement>) => void
    handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void
}

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { error, isPending, login } = useLogin();
    const [emailErrMsg, setEmailErrMsg] = useState<string | null>(null);
    const [pwErrMsg, setPwErrMsg] = useState<string | null>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const pwRef = useRef<HTMLInputElement>(null);

    const handleData = (event: React.ChangeEvent<HTMLInputElement>) => {
        // console.log(event.target.type);
        if (event.target.type === 'email') {
            setEmail(event.target.value);
        } else if (event.target.type === 'password') {
            setPassword(event.target.value);
        }
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();// 새로고침 막기
        login(email, password);
    }

    useEffect(() => {
        if (error === "Firebase: Error (auth/user-not-found)."){
            setEmailErrMsg("* 사용자 정보를 찾을 수 없습니다.");
            setPwErrMsg(null);

            // 이메일 인풋창으로 다시 커서 포커스
            emailRef.current?.focus();
        }
        else if (error === "Firebase: Error (auth/wrong-password)."){
            setPwErrMsg("* 비밀번호가 일치하지 않습니다.");
            setEmailErrMsg(null);

            // 패스워드 인풋창으로 다시 커서 포커스
            pwRef.current?.focus();
        }
    }, [error])

    const props: PropsType = {
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