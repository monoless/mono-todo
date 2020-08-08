import React from 'react';
import styled from 'styled-components';

const TodoTemplateBlock = styled.div`
    width: 512px;
    height: 768px;
    position: relative;
    background: white;
    border-radius: 6px;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.04);
    margin: 96px auto 32px;
    display: flex;
    flex-direction: column;
`;
 
export default ({ children }: { children: JSX.Element | JSX.Element[] }): JSX.Element => <TodoTemplateBlock>{children}</TodoTemplateBlock>;