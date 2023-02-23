import styled, { keyframes } from "styled-components";
import startIcon from "../../img/Off/On=Off.png";
import startHoverIcon from "../../img/Off/On=On.png";
import GitHubIcon from "../../img/github.png";

const FooterCont = styled.footer`
    width: 100vw;
    background-color: var(--color-gray);
    position: fixed;
    bottom: 0;
    display: flex;
    gap: 20px;
    align-items: center;
    padding: 8px;
`
const MenuBtn = styled.button`
    width: 80px;
    height: 34px;
    background-image: url(${startIcon});
    background-size: contain;
    background-repeat: no-repeat;
    &:hover {
        background-image: url(${startHoverIcon});
    }
`
const TabOl = styled.ol`
    display: flex;
    gap: 8px;
    li {
        padding: 9px 18px;
        width: 160px;
        background: var(--color-gray);
        box-shadow: inset -2px -2px 0px #262626, inset 2px 2px 0px #F0F0F0, inset -4px -4px 0px #7E7E7E, inset 4px 4px 0px #B1B1B1;
        &:hover {
            background: #E3E3E3;
            box-shadow: inset 2px 2px 0px #262626, inset -2px -2px 0px #F0F0F0, inset 4px 4px 0px #7E7E7E, inset -4px -4px 0px #B1B1B1;
        }
    }
`

const MenuList = styled.ol`
    position: fixed;
    bottom: 50px;
    left: 0;
    background-color: var(--color-gray);
    padding: 4px;
    display: none;
    flex-direction: column;
    li {
        padding: 12px 120px 12px 16px;
        display: flex;
        /* justify-content: center; */
        align-items: center;
        &:hover{
            background-color: var(--color-primary);
            color: white;
            cursor: pointer;
        }
    }
`
const ClockCont = styled.article`
    display: block;
    position: absolute;
    right: 2%;
    display: flex;
    align-items: center;
    gap: 8px;
    box-shadow: inset -2px -2px 0px #F0F0F0, inset 2px 2px 0px #7E7E7E;
    padding: 4px 12px;
`

const GitHubBtn = styled.button`
    width: 24px;
    height: 24px;
    background-image: url(${GitHubIcon});
    background-size: contain;
    background-repeat: no-repeat;
`
const InfoTable = styled.table`
    text-align: center;
    thead {

    }
    tbody {

    }
    th, td {
        border: 1px dashed black;
        border-collapse: collapse;
        padding: 8px 16px;
    }
    img {
        margin-bottom: 4px;
    }
`
const StatusAni = keyframes`
    to {
        background-color: var(--color-primary);
        color: var(--color-primary);
    }
`

const StatusBar = styled.div`
    width: 200px;
    height: 20px;
    box-shadow: inset -2px -2px 0px #F0F0F0, inset 2px 2px 0px #7E7E7E;
    padding: 4px;
    ol {
        width: 100%;
        display: flex;
        height: 100%;
        gap: 2px;
        align-items: stretch;
        li {
            padding: 4px;
            color: var(--color-gray);
            background-color: none;
            animation: ${StatusAni} forwards;
            &:nth-child(1){ animation-delay: 1s; }
            &:nth-child(2){ animation-delay: 2s; }
            &:nth-child(3){ animation-delay: 3s; }
            &:nth-child(4){ animation-delay: 4s; }
            &:nth-child(5){ animation-delay: 5s; }
            &:nth-child(6){ animation-delay: 6s; }
            &:nth-child(7){ animation-delay: 7s; }
            &:nth-child(8){ animation-delay: 8s; }
            &:nth-child(9){ animation-delay: 9s; }
            &:nth-child(10){ animation-delay: 10s; }
            &:nth-child(11){ animation-delay: 11s; }
            &:nth-child(12){ animation-delay: 12s; }
            &:nth-child(13){ animation-delay: 13s; }
        }
    }
`


export {
    FooterCont,
    MenuBtn,
    TabOl,
    MenuList,
    ClockCont,
    GitHubBtn,
    InfoTable,
    StatusBar
}