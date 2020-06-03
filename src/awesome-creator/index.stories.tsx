import React from 'react';
import {storiesOf} from '@storybook/react';
import {CosmosTheme} from '../themes/cosmos';
import {Button} from '../components/Button';
import {ButtonSize} from '../components/Button/types';
import {Panel} from '../components/Panel';

storiesOf('Awesome Creator', module)
    .add('wizard', () => (
        <CosmosTheme>
            <Panel>
                <Button
                    size={ButtonSize.M}
                >
                    OK
                </Button>
                <Button
                    size={ButtonSize.M}
                >
                    Cancel
                </Button>
            </Panel>
        </CosmosTheme>
    ))
;
