
import { styled } from 'styled-components'
import background_dark from './bg-desktop-dark.jpg'
import background_light from './bg-desktop-light.jpg'
import background_dark_mobile from './bg-mobile-dark.jpg'
import background_light_mobile from './bg-mobile-light.jpg'
import notfound_cat from './notfound-cat.png'
import { ImgHTMLAttributes, FC } from 'react'

export const images = {
    background_dark: background_dark,
    background_light: background_light,
    background_dark_mobile: background_dark_mobile,
    background_light_mobile: background_light_mobile,
    notfound_cat: notfound_cat,
}

export type Images = keyof typeof images;


interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: Images
}


const Image: FC<ImageProps> = ({src, ...props}) => {
  return (
    <img src={images[src]} alt={src} {...props}/>
  );
};

export default Image;