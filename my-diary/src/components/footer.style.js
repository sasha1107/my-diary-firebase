import styled from "styled-components";
import startIcon from "../img/Off/On=Off.png";
import startHoverIcon from "../img/Off/On=On.png";
import GitHubIcon from "../img/github.png";

const FooterCont = styled.footer`
    width: 100vw;
    background-color: var(--color-gray);
    position: fixed;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px;
`
const MenuBtn = styled.button`
    width: 80px;
    height: 35px;
    background-image: url(${startIcon});
    background-size: contain;
    background-repeat: no-repeat;
    &:hover {
        background-image: url(${startHoverIcon});
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
        padding: 16px 120px 16px 16px;
        &:hover{
            background-color: var(--color-primary);
            color: white;
            cursor: pointer;
        }
    }
`
const ClockCont = styled.article`
    display: block;
    margin-right: 20px;
    display: flex;
    align-items: center;
    gap: 8px;
`

const GitHubBtn = styled.button`
    width: 24px;
    height: 24px;
    background-image: url(${GitHubIcon});
    background-size: contain;
    background-repeat: no-repeat;
` 
export {
    FooterCont,
    MenuBtn,
    MenuList,
    ClockCont,
    GitHubBtn
}