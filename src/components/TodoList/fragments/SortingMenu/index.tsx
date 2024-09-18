import { useState } from "react";
import { TodoItemList } from "../../../../types";
import * as S from './styles'

interface SortingMenuProps {
    filteredItems: TodoItemList,
    onAllFiltered: () => void,
    onActiveFiltered: () => void,
    onCompletedFiltered: () => void,
    clearCompletedEv: () => void,
    activeItemsLength: number,
}

const SortingMenu = ({
    filteredItems,
    onAllFiltered,
    onActiveFiltered,
    onCompletedFiltered,
    clearCompletedEv,
    activeItemsLength
}: SortingMenuProps) => {
    const [activeFilter, setActiveFilter] = 
        useState<'all' | 'active' | 'completed'>('all');

    

  return (
    <S.SortingMenuWrapper>
        <S.SortingMenuCounter>
            {activeItemsLength} items left
        </S.SortingMenuCounter>

        <S.SortingMenuTabs>
            <S.Tab active={activeFilter === 'all'}
                    onClick={() => setActiveFilter('all')}>
                    All
            </S.Tab>
            <S.Tab active={activeFilter === 'active'}
                    onClick={() => setActiveFilter('active')}>
                    Active
            </S.Tab>
            <S.Tab active={activeFilter === 'completed'}
                    onClick={() => setActiveFilter('completed')}>
                    Completed
            </S.Tab>
        </S.SortingMenuTabs>

        <S.SortingMenuClearButton>
            <S.Tab onClick={clearCompletedEv}>Clear Completed</S.Tab>
        </S.SortingMenuClearButton>
    </S.SortingMenuWrapper>
  );
};

export default SortingMenu;