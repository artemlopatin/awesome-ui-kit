import styled from 'styled-components';
import {CssVar} from '../../themes/constants';
import {ButtonSize, Props} from './types';

const getHeight = (size: ButtonSize) => {
    switch (size) {
        case ButtonSize.S:
            return '20px';
        case ButtonSize.M:
            return '30px';
        case ButtonSize.L:
            return '40px';
    }
};

const getBorderRadius = (size: ButtonSize) => {
    switch (size) {
        case ButtonSize.S:
            return '4px';
        case ButtonSize.M:
            return '6px';
        case ButtonSize.L:
            return '8px';
    }
};

const getFontSize = (size: ButtonSize) => {
    switch (size) {
        case ButtonSize.S:
            return `var(${CssVar.fontSize.s});`;
        case ButtonSize.M:
            return `var(${CssVar.fontSize.m});`;
        case ButtonSize.L:
            return `var(${CssVar.fontSize.l});`;
    }
};

export const StyledButton = styled.button<Props>`
    box-sizing: border-box;
    border: 2px solid;
    background: var(${CssVar.backgroundColor.main});
    cursor: pointer;
    outline: none;
    transition: all .4s ease;
    
    padding: 0 20px;

    color: var(${CssVar.color.main});
    border-color: #0099ff;
    
    height: ${p => getHeight(p.size)};
    border-radius:${p => getBorderRadius(p.size)};
    
    font-size: ${p => getFontSize(p.size)};

    :hover {
        color: #99ffff;
        border-color: #00ffff;
    }
`;
