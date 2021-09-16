import React, { ReactElement } from 'react';
import styled from 'styled-components';
import TodoListPage from './pages/TodoListPage';

interface Props {}

function App({}: Props): ReactElement {
  return (
    <StyledApp>
      <TodoListPage />
    </StyledApp>
  );
}

export default App;

const StyledApp = styled.div`
  width: 100%;
  height: 100%;
  padding: 3rem;
  background-color: ${({ theme }) => theme.color.background};
`;
