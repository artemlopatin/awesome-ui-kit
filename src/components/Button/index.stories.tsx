import React from 'react';
import {Button} from './';
import {ButtonSize} from './types';
import {storiesOf} from '@storybook/react';

// eslint-disable-next-line no-undef
storiesOf('Button', module)
    .add('S', () => <Button
        size={ButtonSize.S}
    />)
    .add('L', () => <Button
        size={ButtonSize.L}
    />);
