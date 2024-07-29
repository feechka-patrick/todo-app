import { FC } from "react";
import { TodoItemList } from "../../types";
import TodoItem from "../TodoItem";
import * as S from "./styles"

interface TodoListProps {
  items: TodoItemList,
  deleteItemEv: (id: string) => void,
  createItemEv: (value: string) => void,
  changedStatusEv: (id: string) => void,
}

const TodoList: FC<TodoListProps> = ({
  items,
  deleteItemEv,
  createItemEv,
  changedStatusEv,
}) => {
  return (
    <S.Wrapper>
      <TodoItem editable onCreate={createItemEv}/>
      <S.TodoItemWrapper>
          {
            items.map(item => <TodoItem 
                value={item.value}
                checked={item.status === 'done'}
                onChangedStatus ={() => changedStatusEv(item.id)}
                onDelete={() => deleteItemEv(item.id)}
            />)
          }
      </S.TodoItemWrapper>
        
    </S.Wrapper>
  );
};

export default TodoList;