import { useUnit } from 'effector-react';
import Background from '../components/Background';
import Header from '../components/Header';
import TodoList from '../components/TodoList';
import * as S from './styles'
import { changeThemeModeEv } from '../utils/store/theme';


const Home = () => {
  const onChangeTheme = useUnit(changeThemeModeEv)

  return (
    <S.Wrapper>
      <Background />
        <S.ContentWrapper>
            <Header onChangeThemeMode={onChangeTheme}/>
            <TodoList />
        </S.ContentWrapper>
    </S.Wrapper>
  );
};

export default Home;