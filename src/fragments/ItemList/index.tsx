import { forwardRef, PropsWithChildren } from 'react';
import * as S from './styles'


const ItemList = forwardRef<HTMLDivElement, PropsWithChildren<{
  height?: string
}>>(({children, height}, ref) => {
  return (
    <S.Wrapper ref={ref} height={height}>
        {children}
    </S.Wrapper>
  );
})

export default ItemList;