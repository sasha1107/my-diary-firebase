import { useState } from "react";
import { appAuth } from "../firebase/config";
import { useAuthContext } from "./useAuthContext";
import { signOut } from "firebase/auth";


export const useLogout = () => {
    // 에러 정보를 저장합니다.
    const [error, setError] = useState(null);
    // 서버와의 통신 상태를 저장합니다.
    const [isPending, setIsPending] = useState(false);
    const { dispatch } = useAuthContext();

    const logout = () => {
        setError(null);
        setIsPending(true);

        signOut(appAuth).then(() => {
            // 로그아웃 성공
            dispatch({ type: 'logout' });
            setError(null);
            setIsPending(false);
        }).catch((error) => {
            // 로그아웃 실패
            setError(error.message);
            setIsPending(false);
        });
    }
    return { error, isPending, logout }
}