import React, { createContext, useContext, useReducer, Dispatch } from 'react';
import uuid from 'uuid-random';
import useLocalStorage from './useLocalStorage';

type TodoDispatch = Dispatch<ActionType>;

const [todo, setTodo] = useLocalStorage('todo', []);

const snapshot = (state: TodoState): TodoState => {
    setTodo(state);
    return state;
}

const todoReducer = (state: TodoState, action: ActionType): TodoState => {
    if (action.type === 'CREATE' && action.text) {
        const id = uuid();
        const { text } = action;
        const done = false;

        return snapshot(state.concat({ id, text, done }));
    } else if (action.type === 'TOGGLE' && action.id) {
        return snapshot(state.map(todo => todo.id === action.id ? { ...todo, done: !todo.done } : todo));
    } else if (action.type === 'REMOVE' && action.id) {
        return snapshot(state.filter(todo => todo.id !== action.id));
    }

    throw new Error(`undefined action type: ${action.type}`);
}

const TodoStateContext = createContext<TodoState | undefined>(undefined);

const TodoDispatchContext = createContext<TodoDispatch | undefined>(undefined);

export const useTodoState = () => {
    const context = useContext(TodoStateContext);
    if (!context) {
        throw new Error('cannot found TodoStateContext');
    }

    return context;
}

export const useTodoDispatch = () => {
    const context = useContext(TodoDispatchContext);
    if (!context) {
        throw new Error('cannot found TodoDispatchContext');
    }

    return context;
}

export default ({ children }: { children: JSX.Element | JSX.Element[] }): JSX.Element => {
    const [state, dispatch] = useReducer(todoReducer, todo);

    return (
        <TodoStateContext.Provider value={state}>
            <TodoDispatchContext.Provider value={dispatch}>
                {children}
            </TodoDispatchContext.Provider>
        </TodoStateContext.Provider>
    );
}