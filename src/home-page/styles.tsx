import styled from "styled-components";


export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
`

export const ContentWrapper = styled.div`
    width: 500px;
    display: flex;
    flex-direction: column;
    align-self: center;
    @media (max-width: 600px) {
        width: 80%
    }

    position: absolute;
    top: 15%;
`