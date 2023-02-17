import styled from "styled-components";

const ModalCont = styled.article`
    background-color: red;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 40px;
    z-index: 1000;
    display: flex;
    flex-direction: column;
`
const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, .7);
    z-index: 1000;
` 
export {
    ModalCont, 
    Overlay
}