import React from 'react';
import {storiesOf} from '@storybook/react';
import {CosmosTheme} from '../themes/cosmos';
import {Button, Panel, Touchpad, Wrapper} from '../components';
import {ButtonSize} from '../components/button/types';
import {StyledButtonsWrapper} from './styled';

storiesOf('Awesome Creator', module)
    .add('wizard', () => (
        <CosmosTheme>
            <Touchpad
                onMouseMove={console.log}
                onClick={console.log}
            >
                123
            </Touchpad>
            <Panel>
                <StyledButtonsWrapper>
                    <Wrapper
                        margin='0 20px;'
                    >
                        <Button
                            size={ButtonSize.M}
                        >
                            OK
                        </Button>
                    </Wrapper>
                    <Button
                        size={ButtonSize.M}
                    >
                        Cancel
                    </Button>
                </StyledButtonsWrapper>
            </Panel>
        </CosmosTheme>
    ))
;
