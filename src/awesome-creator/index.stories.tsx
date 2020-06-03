import React from 'react';
import {storiesOf} from '@storybook/react';
import {CosmosTheme} from '../themes/cosmos';
import {Button, Panel, Wrapper} from '../components';
import {ButtonSize} from '../components/button/types';
import {StyledButtonsWrapper} from './styled';

storiesOf('Awesome Creator', module)
    .add('wizard', () => (
        <CosmosTheme>
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
