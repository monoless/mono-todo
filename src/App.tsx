import React from 'react';
import Provider from './Provider';
import GlobalStyle from './GlobalStyle';
import { TodoCreate, TodoHead, TodoList, TodoTemplate } from './components';

export default (): JSX.Element => {
  return (
    <Provider>
      <GlobalStyle />
      <TodoTemplate>
        <TodoHead />
        <TodoList />
        <TodoCreate />
      </TodoTemplate>
    </Provider>
  );
};
