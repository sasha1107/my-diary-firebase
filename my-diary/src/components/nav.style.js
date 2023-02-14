import styled from "styled-components"
import { Link } from "react-router-dom";

const NavCont = styled.nav`
    background-color: var(--color-primary);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 30px;
`;

const LogoCont = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
`;

const ComputerIcon = styled.img`
    width: 48px;
`
const LogoTxt = styled.h1`
    font-size: 30px;
    color: white;
    margin-top: 0.3em;
`

const OptUl = styled.ul`
    display: flex;
    justify-content: right;
    align-items: center;
    gap: 16px;

    & li {
        color: white;
        display: flex;
        gap: 16px;
        align-items: center;
        justify-content: center;
    }
`
const LoginSignupLink = styled(Link)`
    padding: 10px 16px;
    background: var(--color-gray);
    box-shadow: inset -2px -2px 0px #262626, inset 2px 2px 0px #F0F0F0, inset -4px -4px 0px #7E7E7E;
    color: black;

    &:active {
        box-shadow: inset 2px 2px 0px #262626, inset -2px -2px 0px #F0F0F0, inset -4px -4px 0px #7E7E7E;
        outline: 2px solid black;
    }
`
const WelcomeMsg = styled.span`
    color: white;
    margin-top: 0.2em;
    font-size: 1.2em;
    strong {
        color: #03ff00;
    }
`
const LogoutBtn = styled.button`
    padding: 8px 16px;
    background: var(--color-gray);
    box-shadow: inset -2px -2px 0px #262626, inset 2px 2px 0px #F0F0F0, inset -4px -4px 0px #7E7E7E;

    &:active {
        box-shadow: inset 2px 2px 0px #262626, inset -2px -2px 0px #F0F0F0, inset -4px -4px 0px #7E7E7E;
        outline: 2px solid black;
    }
`

export { 
    NavCont,
    LogoCont,
    ComputerIcon,
    LogoTxt,
    OptUl,
    LoginSignupLink,
    WelcomeMsg,
    LogoutBtn
}