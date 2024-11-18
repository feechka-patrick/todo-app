import { FC } from "react";
import TodoItem from "./fragments/TodoItem";
import * as S from "./styles"
import ItemList from "../../fragments/ItemList";
import SortingMenu from "./fragments/SortingMenu";
import { useUnit } from "effector-react";
import { $activeFilterMode, $filteredTodoList, $todoList, setActiveFilterModeEv, todoListApi } from '../../model';


const TodoList: FC = () => {

  const [ items, filteredItems, filterMode, setActiveFilterMode ] = 
      useUnit([$todoList, $filteredTodoList, $activeFilterMode, 
        setActiveFilterModeEv])

  const {deleteItemEv, createItemEv, changedStatusEv, clearCompletedEv} 
      = useUnit(todoListApi)

  const activeItemsLength = items.reduce(
  (len, item) => item.status === 'active' ? len += 1: len, 0)
  

  return (
    <S.Wrapper>
      <TodoItem editable onCreate={createItemEv}/>
          <S.TodoItemsWrapper>
              { filteredItems.length > 0 ?
                    filteredItems.map(item => <TodoItem 
                        value={item.value}
                        checked={item.status === 'completed'}
                        onChangedStatus ={() => changedStatusEv(item.id)}
                        onDelete={() => deleteItemEv(item.id)}
                    />)
                  :
                  <S.MessageWrapper>
                    Create a mew task or completed
                  </S.MessageWrapper>
              }

        </S.TodoItemsWrapper>
        
        <ItemList height="50px">
          <SortingMenu 
              setActiveFilterModeEv = {setActiveFilterMode}
              filterMode = {filterMode}
              clearCompletedEv={clearCompletedEv}
              activeItemsLength={activeItemsLength}          
          />
        </ItemList>
        
    </S.Wrapper>
  );
};

export default TodoList;