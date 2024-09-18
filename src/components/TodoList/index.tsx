import { FC, useCallback, useState } from "react";
import { TodoItemList } from "../../types";
import TodoItem from "./fragments/TodoItem";
import * as S from "./styles"
import ItemList from "../../fragments/ItemList";
import SortingMenu from "./fragments/SortingMenu";

interface TodoListProps {
  items: TodoItemList,
  deleteItemEv: (id: string) => void,
  createItemEv: (value: string) => void,
  changedStatusEv: (id: string) => void,
  clearCompletedEv: () => void
}

const TodoList: FC<TodoListProps> = ({
  items,
  deleteItemEv,
  createItemEv,
  changedStatusEv,
  clearCompletedEv
}) => {
  const [filteredItems, setFilteredItems] = useState(items);

  const onAllFiltered = () => setFilteredItems(items)
  const onActiveFiltered =() => setFilteredItems(items.filter(
    item => item.status === 'active'
  ))
  const onCompletedFiltered =() => setFilteredItems(items.filter(
    item => item.status === 'done'
  ))

  const activeItemsLength = items.reduce(
    (len, item) => item.status === 'active' ? len += 1: len, 0)

  return (
    <S.Wrapper>
      <TodoItem editable onCreate={createItemEv}/>
          <S.TodoItemsWrapper>
          {
            items.map(item => <TodoItem 
                value={item.value}
                checked={item.status === 'done'}
                onChangedStatus ={() => changedStatusEv(item.id)}
                onDelete={() => deleteItemEv(item.id)}
            />)
          }


        </S.TodoItemsWrapper>
        
        <ItemList height="50px">
          <SortingMenu 
              filteredItems={filteredItems}
              onAllFiltered={onAllFiltered}
              onActiveFiltered={onActiveFiltered}
              onCompletedFiltered={onCompletedFiltered}
              clearCompletedEv={clearCompletedEv}
              activeItemsLength={activeItemsLength}          
          />
        </ItemList>
        
    </S.Wrapper>
  );
};

export default TodoList;