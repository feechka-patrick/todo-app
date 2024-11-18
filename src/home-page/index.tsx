import { useUnit } from 'effector-react';
import Background from '../components/Background';
import Header from '../components/Header';
import TodoList from '../components/TodoList';
import { changeThemeModeEv } from '../model';
import * as S from './styles'


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