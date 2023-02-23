import React from 'react';
import { useEffect, useRef, useState } from 'react'
import { useSignup } from '../../../hooks/useSignup'
import SignupView from './SignupView';

export interface PropsType {
  email: string;
  password: string;
  displayName: string;
  emailErrMsg: string | null;
  pwErrMsg: string | null;
  emailRef: React.RefObject<HTMLInputElement>;
  pwRef: React.RefObject<HTMLInputElement>;
  handleData : (event: React.ChangeEvent<HTMLInputElement>) => void
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void
  isPending: boolean;
}

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [emailErrMsg, setEmailErrMsg] = useState<string | null>(null);
  const [pwErrMsg, setPwErrMsg] = useState<string | null>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const pwRef = useRef<HTMLInputElement>(null);
  const {error, isPending, signup} = useSignup();

  const handleData = (e: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(e.target.type);
    if (e.target.type === 'email'){
      setEmail(e.target.value)
    }
    else if (e.target.type === 'password'){
      setPassword(e.target.value)
    }
    else if (e.target.type === 'text'){
      setDisplayName(e.target.value)
    }
  }
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // 새로고침 막기
    signup(email, password,displayName)
  }
  
  useEffect(() => {
    if (error === "Firebase: Error (auth/email-already-in-use)."){
      setEmailErrMsg("* 이미 가입된 이메일입니다. 다른 이메일 주소를 사용해주세요");
      setPwErrMsg(null);

      // 이메일 인풋창으로 다시 커서 포커스
      emailRef.current?.focus();
    }
    else if (error === "Firebase: Password should be at least 6 characters (auth/weak-password)."){
      setPwErrMsg("* 비밀번호는 6자 이상 입력해주세요.");
      setEmailErrMsg(null);

      // 패스워드 인풋창으로 다시 커서 포커스
      pwRef.current?.focus();
    }
  }, [error])

  const props: PropsType = {
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
  }

  return (
    <SignupView {...props}/>
  )
}
