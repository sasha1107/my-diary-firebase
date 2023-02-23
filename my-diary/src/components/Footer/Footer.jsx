import React from 'react'
import { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { useAuthContext } from '../../hooks/useAuthContext';
import FooterView from './FooterView';

export default function Footer() {
    const menuRef = useRef(null);

    // 일기 쓰기 탭 디스플레이 상태
    const formStatus = useSelector(state => state.form);

    // 정보 탭 디스플레이 상태
    const infoStatus = useSelector(state => state.info);

    // exit 탭 디스플레이 상태
    const exitStatus = useSelector(state => state.exit)

    const { user } = useAuthContext();

    // '정보' 모달 디스플레이 상태
    const [isInfoModalOpen, setIsInfoMoalOpen] = useState(false);

    // '비밀일기 닫기' 모달 디스플레이 상태
    const [isCloseModalOpen, SetIsCloseModalOpen] = useState(false);

    // 시작 표시줄 디스플레이 여부 변경 함수
    const handleMenu = (e) => {
        if (!menuRef.current.style.display){
            menuRef.current.style.display = "flex";
        } 
        else if (menuRef.current.style.display === "flex"){
            menuRef.current.style.display = "none";
        }
        else if (menuRef.current.style.display === "none") {
            menuRef.current.style.display = "flex";
        }
    }

    const handlelink = () => {
        const link = "https://www.github.com/sasha1107/my-diary-firebase";
        window.open(link, '_blank');
    } 

    const props = {
        menuRef, 
        formStatus,
        exitStatus,
        infoStatus,
        user,
        isInfoModalOpen,
        setIsInfoMoalOpen,
        isCloseModalOpen,
        SetIsCloseModalOpen,
        handleMenu,
        handlelink
    }

    return (
        <FooterView {...props}/>
    )
}
