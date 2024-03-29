import styled from "styled-components";


const FormCont = styled.form`
    background-color: var(--color-gray);
    box-shadow: inset -2px -2px 0px #262626, inset 2px 2px 0px #F0F0F0, inset -4px -4px 0px #7E7E7E, inset 4px 4px 0px #B1B1B1;
`
const FormTit = styled.legend`
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
const FormContent = styled.div`
    padding: 40px;
    width: inherit;
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

const InpLabel = styled.label`
    font-size: 1.1em;
    display: block;
    margin-bottom: 8px;
    & + input{
        margin-bottom: 20px;
    }
`
const Inp = styled.input`
    display: block;
    font-size: 1.1em;
    width: 100%;
    margin: 0 auto;
    color: #777;
    border: none;
    padding: 8px 0px 8px 8px;
    box-shadow: inset 2px 2px 0px #262626, inset -2px -2px 0px #F0F0F0, inset 4px 4px 0px #7E7E7E;
    box-sizing: border-box;
    /* margin-bottom: 20px; */
`
const TxtArea = styled.textarea`
    display: block;
    font-size: 1.1em;
    width: 100%;
    height: 10em;
    margin: 0 auto;
    color: #777;
    border: none;
    padding: 8px 0px 8px 8px;
    box-shadow: inset 2px 2px 0px #262626, inset -2px -2px 0px #F0F0F0, inset 4px 4px 0px #7E7E7E;
    box-sizing: border-box;
`
const SubmitBtn = styled.button`
    padding: 10px 16px;
    display: block;
    margin: 0 auto;
    margin-top: 30px;
    font-size: 1em;
    background: var(--color-gray);
    box-shadow: inset -2px -2px 0px #262626, inset 2px 2px 0px #F0F0F0, inset -4px -4px 0px #7E7E7E;
    &:active {
        outline: 2px solid #000000;
    }
`

export {
    FormCont,
    FormTit,
    FormContent,
    CloseBtn,
    InpLabel,
    Inp,
    TxtArea,
    SubmitBtn
}