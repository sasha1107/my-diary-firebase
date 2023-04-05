import styled from "styled-components";

const VisitorCont = styled.div`
    background-color: var(--color-gray);
    box-shadow: inset -2px -2px 0px #262626, inset 2px 2px 0px #F0F0F0, inset -4px -4px 0px #7E7E7E, inset 4px 4px 0px #B1B1B1;
    box-sizing: border-box;
`

const VisitorTit = styled.div`
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
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
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
const VisitorBody = styled.div`
    padding: 40px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    box-sizing: border-box;
`

const GuestbookEntries = styled.div`
    height: 30vh;
    overflow-y: scroll;
    box-shadow: inset 2px 2px 0px #262626, inset -2px -2px 0px #F0F0F0, inset 4px 4px 0px #7E7E7E, inset -4px -4px 0px #B1B1B1;
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    box-sizing: border-box;
`
const MsgItem = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    /* border: 1px solid black; */
    padding: 10px;
    background: #E3E3E3;
    box-shadow: inset 1px 1px 0px #262626, inset -1px -1px 0px #F0F0F0, inset 2px 2px 0px #7E7E7E, inset -2px -2px 0px #B1B1B1;
    &:hover {
            background: #E3E3E3;
            
    }
    >div {
        display: flex;
        flex-direction: column;
        gap: 4px;
    }
`
const Nickname = styled.span`
    font-size: 0.8rem;
    color: #3e3e3e;
`
const Message = styled.span`
    font-size: 1.1rem;
`
const TimeStamp = styled.div`
    font-size: 0.7rem;
    color: #3e3e3e;
`
const GuestBookForm = styled.form`
    box-sizing: border-box;
    width: 100%;
    display: grid;
    grid-template-columns: 5fr 1fr;
    gap: 0.4rem;
    > div {
        display: flex;
        flex-direction: column;
        gap: .5rem;
        >div {
            display: grid;
            grid-template-columns: 1fr 3fr;
            align-items: center;
        }
    }
    label {
        font-size: 0.9rem;
    }
    input, textarea {
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        box-shadow: inset 1px 1px 0px #262626, inset -1px -1px 0px #F0F0F0, inset 2px 2px 0px #7E7E7E;
    }
    input {
        height: 24px;
    }
    textarea {
        height: 50px;
    }
`
const SubmitBtn = styled.button`
    height: 100%;
    padding: 10px 16px;
    display: block;
    margin: 0 auto;
    font-size: 1em;
    background: var(--color-gray);
    box-shadow: inset -2px -2px 0px #262626, inset 2px 2px 0px #F0F0F0, inset -4px -4px 0px #7E7E7E;
    &:active {
        outline: 2px solid #000000;
    }
`

export {
    VisitorCont,
    VisitorTit,
    CloseBtn,
    VisitorBody,
    GuestbookEntries,
    MsgItem,
    Nickname,
    Message,
    TimeStamp,
    GuestBookForm,
    SubmitBtn
}