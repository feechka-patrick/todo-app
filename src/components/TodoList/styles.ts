import { styled } from "styled-components";


export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 32px;
    padding-bottom: 16px;
`
export const TodoItemsWrapper = styled.div`
    width: 100%;
    max-height: calc(100vh - 300px);
    overflow-y: auto;
    border-radius: 4px; 
    box-shadow: ${({theme}) => theme.box_shadow};

    >div {
        border-bottom: 1px solid ${({theme}) => theme.colors.light_grayish_blue};
        border-radius: 0;
        box-shadow: none;
    };

    >:first-child {
        border-top-right-radius: 4px;
        border-top-left-radius: 4px;
    };

    >:last-child {
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;
        border: none;
    }

`

export const MessageWrapper = styled.div`
    padding: 20px;
    display: flex;
    justify-self: center;
    align-self: center;
    color: aqua;
`