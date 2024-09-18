import { useUnit } from 'effector-react';
import Background from '../components/Background';
import Header from '../components/Header';
import TodoList from '../components/TodoList';
import { $todoList, changeThemeModeEv, todoListApi } from '../model';
import * as S from './styles'


const Home = () => {
  const [ items, onChangeTheme ] = useUnit([$todoList, changeThemeModeEv])
  const api = useUnit(todoListApi)

  return (
    <S.Wrapper>
      <Background />
        <S.ContentWrapper>
            <Header onChangeThemeMode={onChangeTheme}/>
            <TodoList items={items} {...api}/>
        </S.ContentWrapper>
    </S.Wrapper>
  );
};

export default Home;