import React, { ReactElement } from 'react';
import * as S from './style';

import { useRecoilValue } from 'recoil';

import { todoListState, TodoType } from '@store/todo/todo';
import CardList from '@components/CardList/CardList';

interface Props {}

export default function TodoList({}: Props): ReactElement {
  const todoListData = useRecoilValue(todoListState);

  const isPending = (todo: TodoType) => !todo.proceedTime;
  const isProceeding = (todo: TodoType) => todo.proceedTime?.start && !todo.proceedTime.end;
  const isDone = (todo: TodoType) => todo.proceedTime?.start && todo.proceedTime.end;

  const pendingTodoList = todoListData.filter(isPending);
  const proceedingTodoList = todoListData.filter(isProceeding);
  const doneTodoList = todoListData.filter(isDone);

  return (
    <S.TodoList>
      <CardList title='해야할 일' todoListData={pendingTodoList} />
      <CardList title='하고 있는 일' todoListData={proceedingTodoList} />
      <CardList title='완료한 일' todoListData={doneTodoList} />
    </S.TodoList>
  );
}
