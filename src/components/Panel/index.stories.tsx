import React from 'react';
import {Panel} from './';
import {storiesOf} from '@storybook/react';

storiesOf('Panel', module)
    .add('default', () => (
        <Panel>
            Some text
        </Panel>
    ));
