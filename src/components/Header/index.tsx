import { FC } from "react";
import * as S from './styles';
import Icon from "../../assets/icons";
import { useTheme } from "styled-components";

interface HeaderProps { 
    onChangeThemeMode: () => void,
}

const Header: FC<HeaderProps> = ({onChangeThemeMode}) => {
 const theme = useTheme();

  return (
   <S.HeaderWrapper>
    <S.TextWrapper>TODO</S.TextWrapper>
    <Icon src={theme.theme_icon} onClick={onChangeThemeMode}/>
   </S.HeaderWrapper>
  );
};

export default Header;