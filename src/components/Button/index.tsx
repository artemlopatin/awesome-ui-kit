import React from 'react';
import {Props} from './types';
import cn from 'classnames';
import './index.css';
import {StyledButton} from './styled';

export const Button: React.FC<Props> = ({children, size}) => {
    return (
        <StyledButton
            className={cn(
                `button_size_${size}`
            )}
        >
            {children}
        </StyledButton>
    );
};
