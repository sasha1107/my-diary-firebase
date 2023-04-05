import styled from 'styled-components';

const Cont = styled.div`
    background-color: var(--color-gray);
    box-shadow: inset -2px -2px 0px #262626, inset 2px 2px 0px #f0f0f0,
        inset -4px -4px 0px #7e7e7e, inset 4px 4px 0px #b1b1b1;
`;

const Tit = styled.div`
    font-size: 1.2em;
    background-color: var(--color-primary);
    color: white;
    display: block;
    width: 100%;
    border-top: 2px solid #f0f0f0;
    border-left: 2px solid #f0f0f0;
    border-right: 2px solid gray;
    box-sizing: border-box;
    padding: 6px;
    text-align: center;
    position: relative;
    cursor: default;
`;
const Body = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 40px;
`;
const Header = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Board = styled.div`
    width: 270px;
    height: 270px;
    display: grid;
    margin: 0 auto;
    grid-template-columns: repeat(9, 1fr);
    grid-template-rows: repeat(9, 1fr);
    box-sixing: border-box;
`;

const CellCont = styled.div`
    align-items: center;
    display: flex;
    font-weight: bold;
    height: 100%;
    justify-content: center;
    width: 100%;
    background-color: #c3c3c3;
    box-sixing: border-box;
    /* border: 1px solid black; */
    box-shadow: inset -2px -2px 0px #262626, inset 2px 2px 0px #f0f0f0,
        inset -4px -4px 0px #7e7e7e;
    &.visible {
        border: 1px dashed #000000;
        box-shadow: none;
    }
    &.red {
        background: #eb3323;
    }
    &.value-1 {
        color: blue;
    }
    &.value-2 {
        color: green;
    }
    &.value-3 {
        color: red;
    }
    &.value-4 {
        color: purple;
    }
    &.value-5 {
        color: maroon;
    }
    &.value-6 {
        color: turquoise;
    }
    &.value-7 {
        color: black;
    }
    &.value-8 {
        color: gray;
    }
`;

const NumDisplay = styled.div`
    width: 80px;
    height: 40px;
    color: #eb3323;
    background: black;
    text-align: center;
    font-size: 30px;
`;
const CloseBtn = styled.button`
    width: 32px;
    height: 100%;
    background: var(--color-gray);
    position: absolute;
    top: 0;
    right: 0;
    box-shadow: inset -2px -2px 0px #262626, inset 2px 2px 0px #f0f0f0,
        inset -4px -4px 0px #7e7e7e;
    font-size: 20px;
    &:active {
        background: #e3e3e3;
        box-shadow: inset 2px 2px 0px #262626, inset -2px -2px 0px #f0f0f0,
            inset 4px 4px 0px #7e7e7e, inset -4px -4px 0px #b1b1b1;
    }
`;
export { Cont, Header, Board, CellCont, NumDisplay, Tit, Body, CloseBtn };
