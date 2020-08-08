import React, { ChangeEvent, FormEvent, useState } from 'react';
import styled, { css } from 'styled-components';
import { MdAdd } from 'react-icons/md';
import { useTodoDispatch } from './../Provider';

interface OpenProps {
	open: boolean,
}

const CircleButton = styled.div<OpenProps>`
    background: #38d9a9;
    
    &:hover {
        background: #68e6be;
    }

    &:active {
        background: #28c997;
    }

    z-index: 5;
    cursor: pointer;

    width: 80px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 50%);

    font-size: 60px;
    color: white;
    border-radius: 40px;

    border: none;
    outline: none;

    transition: 0.125s all ease-in;

    ${props => props.open && css`
        background: #ff6b6b;

        &:hover {
            background: #ff8787;
        }

        &:active {
            background: #fa5252;
        }

        transform: translate(-50%, 50%) rotate(45deg);
    `}
`;

const InsertFormPositioner = styled.div`
    width: 100%;
    bottom: 0;
    left: 0;
    position: absolute
`;

const InsertForm = styled.form`
    background: #f8f9fa;
    padding: 32px;
    padding-bottom: 72px;
    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
    border-top: 1px solid #e9ecef;
`;

const Input = styled.input`
    padding: 12px;
    border-radius: 4px;
    border: 1px solid #dee2e6;
    width: 100%;
    outline: none;
    font-size: 18px;
    box-sizing: border-box;
`;

export default (): JSX.Element => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState('');

    const dispatch = useTodoDispatch();

    const onToggle = () => setOpen(!open);
    const onChange = (e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value);
    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch({  type: 'CREATE', text: value });
        setValue('');
        setOpen(false);
    }

    return (
        <>
            {open && (
                <InsertFormPositioner>
                    <InsertForm onSubmit={onSubmit}>
                        <Input
                            placeholder='Todo'
                            autoFocus
                            onChange={onChange}
                            value={value}
                        />
                    </InsertForm>
                </InsertFormPositioner>
            )}
            <CircleButton onClick={onToggle} open={open}>
                <MdAdd />
            </CircleButton>
        </>
    );
};