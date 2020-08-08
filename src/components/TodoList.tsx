import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';
import { useTodoState } from './../Provider';

const TodoListBlock = styled.div`
    flex: 1;
    padding: 28px 32px 48px;
    overflow-y: auto;
`;

export default (): JSX.Element => {
    const todos = useTodoState();

    return (
        <TodoListBlock>
            {todos.map(todo => (
              <TodoItem 
                key={todo.id}
                id={todo.id}
                text={todo.text}
                done={todo.done}
              /> 
            ))}
        </TodoListBlock>
    );
};