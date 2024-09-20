
import { FilterMode, TodoItemList } from "../../../../types";
import * as S from './styles'

interface SortingMenuProps {
    setActiveFilterModeEv: (filterMode: FilterMode) => void,
    filterMode: FilterMode,
    clearCompletedEv: () => void,
    activeItemsLength: number
}

const SortingMenu = ({
    filterMode,
    setActiveFilterModeEv,
    clearCompletedEv,
    activeItemsLength
}: SortingMenuProps) => {


  return (
    <S.SortingMenuWrapper>
        <S.SortingMenuCounter>
            {activeItemsLength} items left
        </S.SortingMenuCounter>

        <S.SortingMenuTabs>
            <S.Tab active={filterMode === 'all'}
                    onClick={() => setActiveFilterModeEv('all')}>
                    All
            </S.Tab>
            <S.Tab active={filterMode === 'active'}
                    onClick={() => setActiveFilterModeEv('active')}>
                    Active
            </S.Tab>
            <S.Tab active={filterMode === 'completed'}
                    onClick={() => setActiveFilterModeEv('completed')}>
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