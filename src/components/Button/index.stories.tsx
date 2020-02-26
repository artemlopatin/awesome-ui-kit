import React from 'react';
import {Button} from './';
import {ButtonSize} from './types';
import {storiesOf} from '@storybook/react';

storiesOf('Button', module)
    .add('size', () => (
        <>
            <Button
                size={ButtonSize.S}
            >
                Start
            </Button>
            <Button
                size={ButtonSize.M}
            >
                Start
            </Button>
            <Button
                size={ButtonSize.L}
            >
                Start
            </Button>
        </>
    ))
    .add('L', () => <Button
        size={ButtonSize.L}
    />);
