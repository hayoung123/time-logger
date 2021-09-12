import React, { ReactElement } from 'react';
import TodoListPage from './pages/TodoListPage';

interface Props {}

function App({}: Props): ReactElement {
  return (
    <>
      <h1>hello</h1>
      <TodoListPage />
    </>
  );
}

export default App;
