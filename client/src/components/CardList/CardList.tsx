import React, { ReactElement } from 'react';
import * as S from './style';

import { TodoType } from '@store/todo/todo';
import Card from './Card/Card';

interface Props {
  title: string;
  todoListData: TodoType[];
}

export default function CardList({ title, todoListData }: Props): ReactElement {
  const cardList = todoListData.map((todoData) => <Card key={todoData.id} {...{ todoData }} />);
  return (
    <S.CardList>
      <div className='card-list-title'>{title}</div>
      <div className='cardList'>{cardList}</div>
    </S.CardList>
  );
}
