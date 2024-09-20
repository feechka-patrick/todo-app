import { useUnit } from 'effector-react';
import Background from '../components/Background';
import Header from '../components/Header';
import TodoList from '../components/TodoList';
import { $activeFilterMode, $filteredTodoList, $todoList, changeThemeModeEv, setActiveFilterModeEv, todoListApi } from '../model';
import * as S from './styles'


const Home = () => {
  const [ items, onChangeTheme, filteredItems, filterMode, setActiveFilterMode ] = 
      useUnit([$todoList, changeThemeModeEv, 
            $filteredTodoList, $activeFilterMode, 
            setActiveFilterModeEv])

  const api = useUnit(todoListApi)

  const activeItemsLength = items.reduce(
    (len, item) => item.status === 'active' ? len += 1: len, 0)


  return (
    <S.Wrapper>
      <Background />
        <S.ContentWrapper>
            <Header onChangeThemeMode={onChangeTheme}/>
            <TodoList 
                filteredItems={filteredItems} filterMode={filterMode}  
                setActiveFilterModeEv={setActiveFilterMode} activeItemsLength={activeItemsLength}
                {...api}/>
        </S.ContentWrapper>
    </S.Wrapper>
  );
};

export default Home;