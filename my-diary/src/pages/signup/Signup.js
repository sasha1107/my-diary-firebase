import { useEffect, useRef, useState } from 'react'
import { useSignup } from '../../hooks/useSignup'
import styles from './Signup.module.css'

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

      // 이메일 인풋창으로 다시 커서 포커스
      pwRef.current.focus();
    }
  }, [error])

  return (
    <form className={styles.signup_form} onSubmit={handleSubmit}>
      <fieldset>
        <legend>Signup</legend>
        <label htmlFor='myEmail'>Email</label>

        <input type="email" id="myEmail" required value={email} ref={emailRef} onChange={handleData}/>
        <p>{emailErrMsg}</p>
        <label htmlFor='myPassWord'>Password</label>
        <input type="password" id="myPassWord" required value={password} ref={pwRef} onChange={handleData}/>
        <p>{pwErrMsg}</p>
        <label htmlFor='myNickname'>Nickname</label>
        <input type="text" id="myNickname" required value={displayName} onChange={handleData}/>

        <button className={styles.btn}>Signup</button>
      </fieldset>
      
    </form>

  )
}
