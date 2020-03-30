import React from 'react';
import {Props} from './types';
import cn from 'classnames';
import './index.css';

export const Button: React.FC<Props> = (
    {
        children,
        size
    }
) => {
    return (
        <button
            className={cn(
                'button',
                'button_type_default',
                `button_size_${size}`
            )}
        >
            {children}
        </button>
    );
};
