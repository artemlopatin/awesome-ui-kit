import React from 'react';
import styled from 'styled-components';
import {CssVar} from '../constants';

const StyledTheme = styled.div`
    ${CssVar.color.base}: white;
    ${CssVar.color.main}: #00ccff;
    ${CssVar.backgroundColor.main}: #000066;
`;

export const CosmosTheme: React.FC = ({children}) => {
    return (
        <StyledTheme>
            {children}
        </StyledTheme>
    );
};
