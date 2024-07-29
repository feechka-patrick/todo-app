import {createGlobalStyle, ThemeProvider} from "styled-components"
import { $themeMode } from "../model"
import { useUnit } from "effector-react"
import { PropsWithChildren } from "react"
import { ITheme } from "./types"

export const theme = {
    box_shadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.3)',
}

export const darkTheme: ITheme = {
    background_image: 'background_dark',
    theme_icon: 'moon',
    colors: {
      background_primary: 'hsl(235, 21%, 11%)',
      background_secondary: 'hsl(235, 24%, 19%)',
      primary: 'hsl(234, 39%, 85%)',
      primary_hover: 'hsl(236, 33%, 92%)',
      
      light_grayish_blue: 'hsl(234, 11%, 52%)',
      grayish_blue: 'hsl(233, 14%, 35%)',
      dark_grayish_blue: 'hsl(237, 14%, 26%)',

      bright_blue: 'hsl(220, 98%, 61%)',
      background_check: 'linear-gradient(90deg, rgba(87,221,255,1) 35%, rgba(192,88,243,1) 100%)',

      text_primary: '#fff',
    },
    ...theme
  }


export const lightTheme : ITheme = {
    background_image: 'background_light',
    theme_icon: 'sun',
    colors: {
      background_primary: '#fff',
      background_secondary: '#fff',
      primary: 'hsl(0, 0%, 98%)',
      primary_hover: 'hsl(236, 33%, 92%)',

      light_grayish_blue: 'hsl(233, 11%, 84%)',
      grayish_blue: 'hsl(236, 9%, 61%)',
      dark_grayish_blue: 'hsl(235, 19%, 35%)',

      bright_blue: 'hsl(220, 98%, 61%)',
      background_check: 'linear-gradient(90deg, rgba(87,221,255,1) 35%, rgba(192,88,243,1) 100%)',

      text_primary: '#000',
    },
    ...theme
}

export const GlobalStyles = createGlobalStyle`
   body {
      margin: 0;
      height: 100%;
      background-color: ${props => props.theme.colors.background_primary};
    }
    div#root {
      height: inherit;
      display: flex;
      flex-direction: column;
    }
    * {
      box-sizing: border-box;
      font-family: "Josefin Sans", sans-serif;
      font-optical-sizing: auto;
      font-weight: 400;
      font-style: normal;
      color: ${({theme}) => theme.colors.text_primary}
    }
`

export const Theme = ({children} : PropsWithChildren) => {
    const [theme] = useUnit([$themeMode])

    return <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
                {children}
          </ThemeProvider>
}