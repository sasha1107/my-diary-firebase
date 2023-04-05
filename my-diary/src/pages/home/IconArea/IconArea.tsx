import React from 'react'
import { useSelector } from 'react-redux';
import IconAreaView from './IconAreaView';
import binAudio from "../../../assets/audio/Windows_XP_Recycle.wav"
import { StateType } from '../../../types/state.type';

export interface PropsType {
    handleUrl: (URL: string) => void;
    formStatus: boolean;
    calcStatus: boolean;
    visitorStatus: boolean;
    audio: HTMLAudioElement;
}

export default function IconArea() {
    const handleUrl = (URL: string)=> {
        window.open(URL, '_blank');
    }
    
    // 일기 쓰기 탭 디스플레이 상태
    const formStatus = useSelector((state: StateType) => state.form);

    // 계산기 탭 디스플레이 상태 
    const calcStatus = useSelector((state: StateType) => state.calc);
    
    // 방명록 탭 디스플레이 상태
    const visitorStatus = useSelector((state: StateType) => state.visitor);

    const audio = new Audio(binAudio);

    const props: PropsType = {
        handleUrl,
        formStatus,
        calcStatus,
        visitorStatus,
        audio
    }

    return (
        <IconAreaView {...props}/>
    )
}
