import styles from "./Nav.module.css"
import { Link } from "react-router-dom"
import { useLogout } from "../hooks/useLogout"
import { useAuthContext } from "../hooks/useAuthContext";
import icon from '../img/MyComputer.png'

export default function Nav() {
    const { logout } = useLogout();
    const { user } = useAuthContext();
    return (
        <nav className={styles.nav}>
            <div className={styles.logo}>
                <img src={icon} className={styles.icon} alt='컴퓨터 이미지'/>
            <h1 className={styles.tit}>두근두근 비밀일기</h1>

            </div>
            <ul className={styles.list_nav}>
                {!user &&
                <> 
                <li>
                    <Link to='/login'>Login</Link>
                </li>
                <li>
                    <Link to='/signup'>Signup</Link>
                </li>
                </>}
                {user &&
                <li>
                    <strong>환영합니다! {user.displayName}님</strong>
                    <button type="button" onClick={logout}>LOGOUT</button>
                </li>}

                
            </ul>
        </nav>
    )
}
