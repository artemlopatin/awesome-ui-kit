import React, {useState, useEffect, useRef} from 'react';
import styled from 'styled-components';
import {Props} from './types';

const StyledDiv = styled.div`
    box-sizing: border-box;
    width: 300px;
    height: 20px;
    cursor: default;
    background: red;
`;


export const Touchpad: React.FC<Props> = (props) => {
    const ref = useRef(null);


    const [width, setWidth] = useState(0)
    const [height, setHeight] = useState(0)

    useEffect(() => {
        setWidth(ref.current?.offsetWidth);
        setHeight(ref.current?.offsetHeight);
    }, [ref, setWidth, setHeight]);


    const onMouseMoveHandler = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        //
    }

    const onClickHandler = () => {
        //
    }

    const {children} = props;

    return (
        <StyledDiv
            ref={ref}
            onClick={onClickHandler}
            onMouseMove={onMouseMoveHandler}
        >
            {children}
        </StyledDiv>
    );

}
