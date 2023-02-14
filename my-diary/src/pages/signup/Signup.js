import { useEffect, useState } from 'react'
import { useSignup } from '../../hooks/useSignup'
import styles from './Signup.module.css'

export default function Signup() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [errMsg, setErrMsg] = useState(null);
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
      setErrMsg("* 이미 가입된 이메일입니다. 다른 이메일 주소를 사용해주세요");
    }
  }, [error])

  return (
    <form className={styles.signup_form} onSubmit={handleSubmit}>
      <fieldset>
        <legend>Signup</legend>
        <label htmlFor='myEmail'>Email</label>

        <input type="email" id="myEmail" required value={email} onChange={handleData}/>
        <p>{errMsg}</p>
        <label htmlFor='myPassWord'>Password</label>
        <input type="password" id="myPassWord" required value={password} onChange={handleData}/>

        <label htmlFor='myNickname'>Nickname</label>
        <input type="text" id="myNickname" required value={displayName} onChange={handleData}/>

        <button className={styles.btn}>Signup</button>
      </fieldset>
      
    </form>

  )
}
