import { styled } from "styled-components";
import { icons } from "../../assets/icons";


export const Wrapper = styled.div(({theme}) =>`
        height: 60px;
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

export const InputField = styled.input(({checked, theme}) =>`
    display: flex;
    background-color: inherit;
    outline: none;
    border: none;
    width: 100%;
    cursor: pointer;
    font-size: medium;
    color: ${checked ? theme.colors.light_grayish_blue : 'inherit'};
    
    text-decoration: ${checked ? 'line-through' : 'none'};
    user-select: none;
    
`)

export const CheckboxWrapper = styled.div`
    cursor: pointer;
    display: flex;
`;

export const Checkbox = styled.input`
    display: none;
    box-sizing: border-box;

    &:checked ~ div {
        background-image: url(${icons.check}),  ${({theme}) => theme.colors.background_check};
        background-repeat: no-repeat;
        background-position: 50%;
        border: none;
        /* border-image: ${({theme}) => theme.colors.background_check}; */
    }
`

export const CheckboxCustom = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 1px solid ${props => props.theme.colors.light_grayish_blue};
    
`

