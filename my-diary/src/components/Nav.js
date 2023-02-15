import { useLogout } from "../hooks/useLogout"
import { useAuthContext } from "../hooks/useAuthContext";
import icon from '../img/MyComputer.png'
import *  as S from "./nav.style.js"
export default function Nav() {
    const { logout } = useLogout();
    const { user } = useAuthContext();
    return (
        <S.NavCont>
            <S.LogoCont>
                <S.ComputerIcon src={icon} alt='컴퓨터 이미지'/>
                <S.LogoTxt>
                    두근두근 비밀일기
                </S.LogoTxt>
            </S.LogoCont>
            <S.OptUl>
                {!user &&
                <> 
                <li>
                    <S.LoginSignupLink to='/login'>LOGIN</S.LoginSignupLink>
                </li>
                <li>
                    <S.LoginSignupLink to='/signup'>SIGNUP</S.LoginSignupLink>
                </li>
                </>}
                {user &&
                <li>
                    <S.WelcomeMsg>환영합니다! <strong>{user.displayName}</strong>님
                    </S.WelcomeMsg>
                    <S.LogoutBtn type="button" onClick={logout}>
                        LOGOUT
                    </S.LogoutBtn>
                </li>}
            </S.OptUl>
        </S.NavCont>
    )
}
