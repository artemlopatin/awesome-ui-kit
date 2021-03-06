import React from 'react';
import {Button} from './';
import {ButtonSize} from './types';
import {storiesOf} from '@storybook/react';
import {CosmosTheme} from '../../themes/cosmos';

storiesOf('Button', module)
    .add('size', () => (
        <CosmosTheme>
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
        </CosmosTheme>
    ))
    .add('L', () => (
        <CosmosTheme>
            <Button
                size={ButtonSize.L}
            >
                Button
            </Button>
        </CosmosTheme>
    ));
