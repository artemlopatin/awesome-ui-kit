import React from 'react';
import {Props} from './types';
import cn from 'classnames';

export const Button: React.FC<Props> = (
    {
        size
    }
) => {
    return (
        <button
            className={cn(`button_size_${size}`)}
        >
            Button
        </button>
    );
};
