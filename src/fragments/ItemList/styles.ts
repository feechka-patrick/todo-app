import { styled } from "styled-components";


export const Wrapper = styled.div<{height?: string}>(({theme, height}) =>`
        height: ${height? height: '60px'};
        width: 100%;
        border-radius: 4px;
        background-color: ${theme.colors.background_secondary};
        
        display: flex;
        padding: 8px 16px;
        gap: 16px;
        box-shadow: ${theme.box_shadow};
        align-items: center;
    `
)