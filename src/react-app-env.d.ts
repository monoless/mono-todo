/// <reference types="react-scripts" />

type TodoType = {
    id: string,
    text: string,
    done: boolean
};

type TodoState = TodoType[];

type ActionType = {
    type: 'CREATE' | 'TOGGLE' | 'REMOVE',
    id?: string,
    text?: string
};