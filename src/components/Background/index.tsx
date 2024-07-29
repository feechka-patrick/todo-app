import { useTheme } from 'styled-components';
import { images } from '../../assets/images';
import * as S from './style'


const Background = () => {
  const theme = useTheme();

  return <S.ImageBackground src={images[theme.background_image]}/>;
};

export default Background;