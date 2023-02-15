import React from 'react'
import DesktopIcon from '../../components/DesktopIcon/DesktopIcon';
import computer from "../../img/Wordpad.png"
import folder from "../../img/Folder.png"
import figma from "../../img/Figma.png"
import bin from "../../img/Bin.png"
import network from "../../img/Network.png"
import styled from 'styled-components';

const DesktopCont = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    position:absolute;
`
export default function IconArea() {
    return (
        <DesktopCont>
            <DesktopIcon src={computer} txt="노트패드"/>
            <DesktopIcon src={folder} txt="내 폴더"/>
            <DesktopIcon src={figma} txt="Figma"/>
            <DesktopIcon src={bin} txt="휴지통"/>
            <DesktopIcon src={network} txt="네트워크"/>
        </DesktopCont>
    )
}
