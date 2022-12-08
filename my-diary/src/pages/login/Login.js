import { useState } from 'react'
import { useLogin } from '../../hooks/useLogin';
import styles from './Login.module.css'

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
        <form className={styles.login_form} onSubmit={handleSubmit}>
            <fieldset>
                <legend>Login</legend>

                <label htmlFor="myEmail"><i class="fa-solid fa-envelope"></i> Email</label>
                <input type="email" id='myEmail' required value={email} onChange={handleData} />

                <label htmlFor="myPassWord"><i class="fa-solid fa-lock"></i>Password</label>
                <input type="password" id='myPassWord' required value={password} onChange={handleData} />

                {!isPending && <button type='submit' className={styles.btn}>Login</button>}
                {isPending && <strong>로그인 중입니다. . .</strong>}
                {error && <strong>error</strong>}
                {/* <button type='submit' className={styles.btn}>로그인</button> */}
            </fieldset>
        </form>
    )
}