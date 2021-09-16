import React, { ReactElement } from 'react';
import styled from 'styled-components';

import TodoList from '@components/TodoList/TodoList';

interface Props {}

export default function TodoListPage({}: Props): ReactElement {
  return (
    <StyledTodoListPage>
      <div className='todo-page-title'>TODO LIST</div>
      <TodoList />
    </StyledTodoListPage>
  );
}

const StyledTodoListPage = styled.div`
  .todo-page-title {
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 2rem;
  }
`;
