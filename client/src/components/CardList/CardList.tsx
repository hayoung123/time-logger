import React, { ReactElement } from 'react';
import * as S from './style';

import PlusIcon from '@assets/plusIcon.svg';

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
      <div className='card-list-header'>
        <div className='header-title'>{title}</div>
        <PlusIcon className='plus-btn' />
      </div>
      <div className='cardList'>{cardList}</div>
    </S.CardList>
  );
}
