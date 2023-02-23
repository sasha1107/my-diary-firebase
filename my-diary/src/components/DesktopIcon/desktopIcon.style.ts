import styled from "styled-components";

const Container = styled.div`
    width: 72px;
    height: 72px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;
    z-index: -1;
    &:active {
        background-color: var(--color-primary);
        span {

            color: white;
        }
    }
` 
const Icon = styled.img`
    width: 48px;
    height: 48px;
    /* 이미지 커서로 드래그 안되게 */
    -webkit-user-drag: none;
`
const IconTxt = styled.span`
    color: #3e3e3e;
    font-size: 0.8em;
    /* 텍스트 커서로 선택 안되게 */
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
`
export {
    Container,
    Icon,
    IconTxt
}