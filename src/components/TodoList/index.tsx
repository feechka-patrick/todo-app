import { FC } from "react";
import { FilterMode, TodoItemList } from "../../types";
import TodoItem from "./fragments/TodoItem";
import * as S from "./styles"
import ItemList from "../../fragments/ItemList";
import SortingMenu from "./fragments/SortingMenu";
import Image from "./../../assets/images"

interface TodoListProps {
  filteredItems: TodoItemList,
  deleteItemEv: (id: string) => void,
  createItemEv: (value: string) => void,
  changedStatusEv: (id: string) => void,
  clearCompletedEv: () => void,
  setActiveFilterModeEv: (filterMode: FilterMode) => void,
  filterMode: FilterMode,
  activeItemsLength: number,
}

const TodoList: FC<TodoListProps> = ({
  filteredItems,
  deleteItemEv,
  createItemEv,
  changedStatusEv,
  clearCompletedEv,
  setActiveFilterModeEv,
  filterMode,
  activeItemsLength
}) => {
  

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
              setActiveFilterModeEv = {setActiveFilterModeEv}
              filterMode = {filterMode}
              clearCompletedEv={clearCompletedEv}
              activeItemsLength={activeItemsLength}          
          />
        </ItemList>
        
    </S.Wrapper>
  );
};

export default TodoList;