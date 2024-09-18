import { styled } from "styled-components"


export const SortingMenuWrapper = styled.div(({theme}) =>`
    width: 100%;
    display: flex;
    justify-content: space-between;
    font-size: small;
    font-weight: 300;

    color: ${theme.colors.text_primary};
`)

export const SortingMenuCounter = styled.div`
    display: flex;
    font-weight: inherit;
    color: inherit;
    
`

export const SortingMenuTabs = styled.div`
    display: flex;
    gap: 14px;
    font-weight: inherit;
    color: inherit;

    
`
export const Tab = styled.button<{active?: boolean}>(({active, theme}) => `
    font-size: 100%;
    border: 0;
    background: none;
    font-weight: inherit;
    color: ${active ? theme.colors.bright_blue: 'inherit'};
    cursor: pointer;


    &:hover{
        font-weight: 400;
    }
`)

export const SortingMenuClearButton = styled.button`
    display: flex;
    font-weight: inherit;
    cursor: pointer;
    color: inherit;
    
    font-size: 100%;
    border: 0;
    padding: 0;
    background: none;
`