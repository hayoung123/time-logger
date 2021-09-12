import CardList from '@components/CardList/CardList';
import React, { ReactElement } from 'react';
import styled from 'styled-components';

interface Props {}

export default function TodoListPage({}: Props): ReactElement {
  return (
    <StyledTodoListPage>
      <CardList />
    </StyledTodoListPage>
  );
}

const StyledTodoListPage = styled.div``;
