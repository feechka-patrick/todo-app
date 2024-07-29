import { Icons } from "../assets/icons";
import { Images } from "../assets/images";


export interface ITheme {
    background_image: Images,
    theme_icon: Icons,
    colors: {
        background_primary: string,
        background_secondary: string,
        primary: string,
        primary_hover: string,
        
        light_grayish_blue: string,
        grayish_blue: string,
        dark_grayish_blue: string,

        bright_blue: string,
        background_check: string,

        text_primary: string
      },
    box_shadow: string,
}