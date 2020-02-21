import React from 'react'
import {ButtonSize, Props} from './types';
import styled from 'styled-components';

const getHeight = (size: ButtonSize) => {
    switch (size) {
        case 's':
            return '20px';
        case 'l':
            return '40px';
        default:
            return '30px';
    }
};

const StyledButton = styled.button<{ height: string }>`
    height: ${(height) => height};
`;

export const Button: React.FC<Props> = (
    {
        size
    }
) => {
    return (
        <StyledButton
            height={getHeight(size)}
        >
            123
        </StyledButton>
    );
};