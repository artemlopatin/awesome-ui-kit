import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
    padding: 20px;
    border: #222222 1px solid;
    border-radius: 8px;
`;

export const Panel: React.FC = ({children}) => {
    return (
        <StyledDiv>
            {children}
        </StyledDiv>
    );
};
