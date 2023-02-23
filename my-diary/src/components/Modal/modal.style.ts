import styled from "styled-components";

const ModalCont = styled.article`
    background-color: var(--color-gray);
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    /* padding: 40px; */
    z-index: 1000;
    display: flex;
    flex-direction: column;
    box-shadow: inset -2px -2px 0px #262626, inset 2px 2px 0px #F0F0F0, inset -4px -4px 0px #7E7E7E;
`
const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, .2);
    z-index: 1000;
`
const ModalHeader = styled.div`
    background-color: var(--color-primary);
    color: white;
    font-size: 1.2em;
    padding: 6px;
    width: 100%;
    box-sizing: border-box;
    text-align: center;
    position: relative;
    border-top: 2px solid #f0f0f0;
    border-left: 2px solid #F0F0F0;
    border-right: 2px solid gray;
`
const CloseBtn = styled.button`
    width: 32px;
    height: 100%;
    background: var(--color-gray);
    position: absolute;
    top: 0;
    right: 0;
    box-shadow: inset -2px -2px 0px #262626, inset 2px 2px 0px #F0F0F0, inset -4px -4px 0px #7E7E7E;
    font-size: 20px;
    &:active {
        background: #E3E3E3;
        box-shadow: inset 2px 2px 0px #262626, inset -2px -2px 0px #F0F0F0, inset 4px 4px 0px #7E7E7E, inset -4px -4px 0px #B1B1B1;
    }
`

const ModalBody = styled.div`
    padding: 40px 80px 30px;
    display: flex;
    flex-direction: column;
    gap: 30px;
    justify-content: center;
    align-items: center;
`
const BtnCont = styled.div`
    display: flex;
    gap: 10px;
` 
const Btn1 = styled.button`
    box-shadow: inset -2px -2px 0px #262626, inset 2px 2px 0px #F0F0F0, inset -4px -4px 0px #7E7E7E;
    width: 100px;
    height: 36px;
    &:hover{
        div {
            padding: 2px 0px;
            border: 1px dashed #000000;
        }
    }
    &:active {
        background: #E3E3E3;
        box-shadow: inset 2px 2px 0px #262626, inset -2px -2px 0px #F0F0F0, inset 4px 4px 0px #7E7E7E, inset -4px -4px 0px #B1B1B1;
    }
`

const Btn2 = styled.button`
    box-shadow: inset -2px -2px 0px #262626, inset 2px 2px 0px #F0F0F0, inset -4px -4px 0px #7E7E7E;
    border: 2px solid #000000;
    box-sizing: border-box;
    width: 100px;
    height: 36px;
    &:hover{
        div {
            padding: 2px 0px;
            border: 1px dashed #000000;
        }
    }
    &:active {
        background: #E3E3E3;
        box-shadow: inset 2px 2px 0px #262626, inset -2px -2px 0px #F0F0F0, inset 4px 4px 0px #7E7E7E, inset -4px -4px 0px #B1B1B1;
    }
`

export {
    ModalCont, 
    Overlay,
    ModalHeader,
    CloseBtn,
    ModalBody,
    BtnCont,
    Btn1,
    Btn2,
}