import { FC, useCallback, useMemo, useState } from 'react';
import * as S from './styles'
import Icon from '../../../../assets/icons';
import { useHover } from '@uidotdev/usehooks';
import ItemList from '../../../../fragments/ItemList';

interface TodoItemProps {
    editable?: boolean;
    value?: string;
    checked?: boolean;
    onChangedStatus? : () => void;
    onDelete?: () => void;
    onCreate?: (value: string) => void;
}

const TodoItem : FC<TodoItemProps> = ({
  editable = false,
  checked = false,
  onChangedStatus,
  onDelete,
  onCreate,
  value,
}) => {
  const [ref, hovering] = useHover();
  const [editValue, setEditValue] = useState('');

  const checkedValue = useMemo(() => 
      editable? false : checked, [checked, editable]
  )

  const onCreateHandler = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter' && editValue !== '') {
        onCreate?.(editValue); setEditValue('')
    }
   }, [editValue, onCreate])

  return (
    <ItemList ref={ref} >
      <S.CheckboxWrapper onClick={onChangedStatus}>
          <S.Checkbox type='checkbox' 
                checked={checkedValue} />
          <S.CheckboxCustom />
      </S.CheckboxWrapper>
        {
          editable ? 
          <S.InputField
              placeholder='Create a new todo...'
              value={editValue}
              onChange={e => setEditValue(e.target.value)}
              onKeyDown={onCreateHandler}
          />
          :
          <S.InputField
            value={value}
            readOnly
            checked={checkedValue}
            onClick={onChangedStatus} />
        }
          

      {
        !editable && hovering && (
            <Icon src="cross" onClick={onDelete}/>
        )
      }
    
      
    </ItemList>
  );
};

export default TodoItem;