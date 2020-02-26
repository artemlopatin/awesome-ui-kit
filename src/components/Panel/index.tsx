import React from 'react';
import cn from 'classnames';
import './index.css';

export const Panel: React.FC = (
    {
        children
    }
) => {
    return (
        <div
            className={cn('panel')}
        >
            {children}
        </div>
    );
};
