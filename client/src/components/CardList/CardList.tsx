import React, { ReactElement, useState } from 'react';
import * as S from './style';

import PlusIcon from '@assets/plusIcon.svg';

import { TodoType } from '@store/todo/todo';
import Card from './Card/Card';
import TodoForm from '@components/TodoForm/TodoForm';

interface Props {
  title: string;
  todoListData: TodoType[];
}

export default function CardList({ title, todoListData }: Props): ReactElement {
  const [isOpenAddForm, setIsOpenAddForm] = useState(false);
  const cardList = todoListData.map((todoData) => <Card key={todoData.id} {...{ todoData }} />);

  const openAddForm = () => setIsOpenAddForm(true);
  const closeAddForm = () => setIsOpenAddForm(false);
  const toggleAddForm = () => setIsOpenAddForm((isOpen) => !isOpen);

  return (
    <S.CardList>
      <div className='card-list-header'>
        <div className='header-title'>{title}</div>
        <PlusIcon className='plus-btn' onClick={toggleAddForm} />
      </div>
      {isOpenAddForm && <TodoForm closeAddForm={closeAddForm} />}
      <div className='cardList'>{cardList}</div>
    </S.CardList>
  );
}
