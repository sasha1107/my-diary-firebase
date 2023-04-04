import styled from "styled-components";

const CalcCont = styled.div`
    background-color: var(--color-gray);
    box-shadow: inset -2px -2px 0px #262626, inset 2px 2px 0px #F0F0F0, inset -4px -4px 0px #7E7E7E, inset 4px 4px 0px #B1B1B1;
`
const CalcTit = styled.div`
    font-size: 1.2em;
    background-color: var(--color-primary);
    color: white;
    display: block;
    width: 100%;
    border-top: 2px solid #f0f0f0;
    border-left: 2px solid #F0F0F0;
    border-right: 2px solid gray;
    box-sizing: border-box;
    padding: 6px;
    text-align: center;
    position: relative;
    cursor: default;
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

const CalcBody = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 40px;
`
const Output = styled.div`
    box-sizing: border-box;
    width: 100%;
    padding: 8px;
    background-color: #fff;
    box-shadow: inset 2px 2px 0px #262626, inset -2px -2px 0px #F0F0F0, inset 4px 4px 0px #7E7E7E;
    font-size: 1.1em;
    display: flex;
    justify-content: space-between;
`
const PrevOperand = styled.span`
    color: gray;
`
const CurrOperand = styled.span`
`

const ButtonCont = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 10px;
`
const Button = styled.button`
    background: var(--color-gray);
    box-shadow: inset -2px -2px 0px #262626, inset 2px 2px 0px #F0F0F0, inset -4px -4px 0px #7E7E7E;
    padding: 8px 16px;
    font-size: 1.1em;
    &.num {
        color: #001CF5;
    }
    &.operator {
        color: #EB3323;
    }
    &.ac {
        color: #9C2054;
    }
    &.span-two {
        grid-column: span 2;
    }
    &:hover {
        background: #E3E3E3;
    }
    &:active {
        background: #E3E3E3;
        box-shadow: inset 2px 2px 0px #262626, inset -2px -2px 0px #F0F0F0, inset 4px 4px 0px #7E7E7E, inset -4px -4px 0px #B1B1B1;
    }
`

export {
    CalcCont,
    CalcTit,
    CloseBtn,
    CalcBody,
    Output,
    PrevOperand,
    CurrOperand,
    ButtonCont,
    Button
}