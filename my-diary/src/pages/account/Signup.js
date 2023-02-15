import { useEffect, useRef, useState } from 'react'
import { useSignup } from '../../hooks/useSignup'
import * as S from "./shared.style";
import DragCont from '../../components/DragCont';

export default function Signup() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [emailErrMsg, setEmailErrMsg] = useState(null);
  const [pwErrMsg, setPwErrMsg] = useState(null);
  const emailRef = useRef(null);
  const pwRef = useRef(null);
  const {error, isPending, signup} = useSignup();

  const handleData = (e) => {
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
  const handleSubmit = (e) => {
    e.preventDefault(); // 새로고침 막기
    // console.log(email, password,displayName);
    signup(email, password,displayName)
  }
  
  useEffect(() => {
    if (error === "Firebase: Error (auth/email-already-in-use)."){
      setEmailErrMsg("* 이미 가입된 이메일입니다. 다른 이메일 주소를 사용해주세요");
      setPwErrMsg(null);

      // 이메일 인풋창으로 다시 커서 포커스
      emailRef.current.focus();
    }
    else if (error === "Firebase: Password should be at least 6 characters (auth/weak-password)."){
      setPwErrMsg("* 비밀번호는 6자 이상 입력해주세요.");
      setEmailErrMsg(null);

      // 패스워드 인풋창으로 다시 커서 포커스
      pwRef.current.focus();
    }
  }, [error])

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

        <S.SubmitBtn>SIGNUP</S.SubmitBtn>
        </S.FormContent>
      </fieldset>
    </S.Form>
    </DragCont>

  )
}
