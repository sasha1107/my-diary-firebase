import React from 'react'
import { useSelector,  } from 'react-redux';
import IconAreaView from './IconAreaView';
import binAudio from "../../../assets/audio/Windows_XP_Recycle.wav"

export default function IconArea() {
    const handleUrl = (URL) => {
        window.open(URL, '_blank');
    }
    
    // 일기 쓰기 탭 디스플레이 상태
    const formStatus = useSelector(state => state.form);

    const audio = new Audio(binAudio);

    const props = {
        handleUrl,
        formStatus,
        audio
    }

    return (
        <IconAreaView {...props}/>
    )
}
