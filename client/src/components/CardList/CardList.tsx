import React, { ReactElement } from 'react';
import * as S from './style';
import { useRecoilValue } from 'recoil';

import { todoListState, TodoType } from '@store/todo/todo';
import Card from './Card/Card';

interface Props {}

//TODO: 리팩토링 때 컴포넌트 분리하기
export default function CardList({}: Props): ReactElement {
  const todoListData = useRecoilValue(todoListState);

  const makeTodoCard = (todoData: TodoType) => <Card key={todoData.id} {...{ todoData }} />;

  const isPending = (todo: TodoType) => !todo.proceedTime;
  const isProceeding = (todo: TodoType) => todo.proceedTime?.start && !todo.proceedTime.end;
  const isDone = (todo: TodoType) => todo.proceedTime?.start && todo.proceedTime.end;

  const pendingTodoList = todoListData.filter(isPending).map(makeTodoCard);
  const proceedingTodoList = todoListData.filter(isProceeding).map(makeTodoCard);
  const doneTodoList = todoListData.filter(isDone).map(makeTodoCard);

  return (
    <S.CardListContainer>
      <S.CardList>
        <div className='card-list-title'>해야할 일</div>
        <div className='cardList'>{pendingTodoList}</div>
      </S.CardList>
      <S.CardList>
        <div className='card-list-title'>하고 있는 일</div>
        <div className='cardList'>{proceedingTodoList}</div>
      </S.CardList>
      <S.CardList>
        <div className='card-list-title'>완료한 일</div>
        <div className='cardList'>{doneTodoList}</div>
      </S.CardList>
    </S.CardListContainer>
  );
}
