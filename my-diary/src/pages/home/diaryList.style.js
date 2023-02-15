import styled from "styled-components";

const DiaryLi = styled.li`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-sizing: border-box;
    background: var(--color-gray);
    box-shadow: inset -2px -2px 0px #262626, inset 2px 2px 0px #F0F0F0, inset -4px -4px 0px #7E7E7E;

    & + li {
        margin: 30px 0;
    }
`
const LiHeader = styled.div`
    background-color: var(--color-primary);
    position: relative;
    border-top: 2px solid #f0f0f0;
    border-left: 2px solid #F0F0F0;
    border-right: 2px solid gray;
    padding: 6px;
`

const DiaryTit = styled.strong`
    font-size: 1.2em;
    color: #fff;
    display: block;
    width: 100%;
    text-align: center;
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
`

const LiContent = styled.div`
    padding: 20px 40px 40px 40px;
    display: flex;
    flex-direction: column;
    gap: 4px;
` 

const TimeStamp = styled.time`
    color: #3e3e3e;
    display: block;
    text-align: right;
`
const DiaryTxt = styled.p`

`

export {
    DiaryLi,
    LiHeader,
    DiaryTit,
    CloseBtn,
    LiContent,
    TimeStamp,
    DiaryTxt
}