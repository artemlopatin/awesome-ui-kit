import React from 'react';
import {Props} from './types';
import {StyledButton} from './styled';

export const Button: React.FC<Props> = ({children, size}) => {
    return (
        <StyledButton
            size={size}
        >
            {children}
        </StyledButton>
    );
};
