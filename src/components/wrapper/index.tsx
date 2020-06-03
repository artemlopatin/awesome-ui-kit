import React from 'react';
import styled from 'styled-components';
import {Props} from './types';

const StyledDiv = styled.div<Props>`
    display: inline-block;
    margin: ${p => p.margin};
    padding: ${p => p.padding};
`;

export const Wrapper: React.FC<Props> = (props) => {
    const {children} = props;
    return (
        <StyledDiv
            {...props}
        >
            {children}
        </StyledDiv>
    );
};
