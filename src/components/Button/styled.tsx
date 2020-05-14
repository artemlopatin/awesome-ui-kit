import styled from 'styled-components';
import {CssVar} from '../../themes/constants';

export const StyledButton = styled.button`
    box-sizing: border-box;
    border: 2px solid;
    background: var(${CssVar.backgroundColor.main});
    cursor: pointer;
    outline: none;
    transition: all .4s ease;

    color: var(${CssVar.color.main});
    border-color: #0099ff;

    :hover {
        color: #99ffff;
        border-color: #00ffff;
    }
`;
