
import background_dark from './bg-desktop-dark.jpg'
import background_light from './bg-desktop-light.jpg'
import background_dark_mobile from './bg-mobile-dark.jpg'
import background_light_mobile from './bg-mobile-light.jpg'

export const images = {
    background_dark: background_dark,
    background_light: background_light,
    background_dark_mobile: background_dark_mobile,
    background_light_mobile: background_light_mobile,
}

export type Images = keyof typeof images;
