import React from 'react';
import styled from 'styled-components';
import {Props} from './types';

const StyledDiv = styled.div`
    width: 100%;
    height: 20px;
`;

export const Picker: React.FC<Props> = ({children, onClick, onMouseMove}) => {
    return (
        <StyledDiv
            onClick={onClick}
            onMouseMove={onMouseMove}
        >
            {children}
        </StyledDiv>
    );
};
