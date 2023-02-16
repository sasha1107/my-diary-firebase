import React from 'react'
import DesktopIcon from '../../components/DesktopIcon/DesktopIcon';
import computer from "../../img/Wordpad.png"
import folder from "../../img/Folder.png"
import bin from "../../img/Bin.png"
import network from "../../img/Network.png"
import internet from "../../img/Internet.png"
import styled from 'styled-components';
import FormContext from '../../context/FormContext';
import { useContext } from 'react';
import binAudio from "../../assets/audio/Windows_XP_Recycle.wav"

const DesktopCont = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    position:absolute;
`
export default function IconArea() {
    const { status, toggleStatus } = useContext(FormContext);

    const handleUrl = (URL) => {
        window.open(URL, '_blank');
    }
    const audio = new Audio(binAudio);
    return (
        <DesktopCont>
            <DesktopIcon
                src={computer}
                txt="일기쓰기"
                func={() => 
                    { if(status  === "none") toggleStatus()}}
            />
            <DesktopIcon src={folder} txt="소스코드" func={() => {
                handleUrl("https://github.com/sasha1107/my-diary-firebase")
            }}/>
            <DesktopIcon src={internet} txt="블로그" func={() => {
                handleUrl("https://velog.io/@sasha1107")
            }}/>
            <DesktopIcon src={network} txt="네트워크"/>
            <DesktopIcon src={bin} txt="휴지통" func={() => audio.play()}/>
        </DesktopCont>
    )
}
