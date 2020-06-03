import React from 'react';
import {storiesOf} from '@storybook/react';
import {CosmosTheme} from '../themes/cosmos';
import {Button} from '../components/button';
import {ButtonSize} from '../components/button/types';
import {Panel} from '../components/panel';

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
