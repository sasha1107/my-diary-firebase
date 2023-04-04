import React from 'react'
import { useDispatch } from 'react-redux';
import DesktopIcon from '../../../components/DesktopIcon/DesktopIcon';
import bin from "../../../img/Bin.png"
import folder from "../../../img/Folder.png"
import network from "../../../img/Network.png"
import computer from "../../../img/Wordpad.png"
import internet from "../../../img/Internet.png"
import calculator from "../../../img/Calculator.png"
import * as S from "./iconArea.style"
import { PropsType } from './IconArea';

export default function IconAreaView({
    handleUrl,
    formStatus,
    calcStatus,
    audio
} : PropsType) {
    const dispatch = useDispatch();

    return (
        <S.DesktopCont>
            <DesktopIcon
                src={computer}
                txt="일기쓰기"
                func={() => 
                    { if(!formStatus) dispatch({type: "toggleForm"})}}
            />
            <DesktopIcon
                src={calculator}
                txt="계산기"
                func={() => 
                    { if(!calcStatus) dispatch({type: "toggleCalc"})}}
            />
            <DesktopIcon src={folder} txt="소스코드" func={() => {
                handleUrl("https://github.com/sasha1107/my-diary-firebase")
            }}/>
            <DesktopIcon src={internet} txt="블로그" func={() => {
                handleUrl("https://velog.io/@sasha1107")
            }}/>
            <DesktopIcon src={network} txt="네트워크" func={() => {
                handleUrl("https://www.linkedin.com/in/%EC%88%98%ED%98%84-%EC%A0%95-749242266")
            }}/>
            <DesktopIcon src={bin} txt="휴지통" func={() => audio.play()}/>
        </S.DesktopCont>
    )
}
