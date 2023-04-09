import styled from "styled-components";

const Wrapper = styled.div`
    margin-bottom: 50px;
`
const Container = styled.main`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    padding: 30px 30px 30px 120px;
`

const DiaryList = styled.ul`
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 5px;    
`
export { Wrapper, Container, DiaryList }