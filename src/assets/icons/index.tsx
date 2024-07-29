
import { FC, ImgHTMLAttributes } from 'react'
import check from './icon-check.svg'
import cross from './icon-cross.svg'
import moon from './icon-moon.svg'
import sun from './icon-sun.svg'
import styled from 'styled-components'


export const icons = {
    check: check,
    cross: cross,
    moon: moon,
    sun: sun,
}

const Image = styled.img`
  
  
    &:hover {
        cursor: pointer;
    } 
  `

export type Icons = keyof typeof icons;

interface IconProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: Icons
}

const Icon: FC<IconProps> = ({src, ...props}) => {
  return (
    <Image src={icons[src]} {...props}/>
  );
};

export default Icon;