import * as React from 'react';
import {Button} from './';
import {ButtonSize} from './types';
import {storiesOf} from '@storybook/react';

export default {title: 'Button'};

export const button = () => (
    <Button
        size={ButtonSize.S}
    />
);

storiesOf('Button', module)
    .add('S', () => <Button
        size={ButtonSize.S}
    />)
    .add('L', () => <Button
        size={ButtonSize.L}
    />);
