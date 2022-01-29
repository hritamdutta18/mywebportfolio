import React from 'react'
import styled from 'styled-components'
import { mediaQueries } from '../components/Themes'


const Text= styled.h1`
    position: fixed;
    top: ${props => props.top};
    left: ${props => props.left};
    right: ${props => props.right};
    bottom: ${props => props.bottom};
    color: ${props => `rgba(${props.theme.textRgba}, 0.1)`};
    font-size: ${props => props.text === '(Swipe up/down to scroll list)' ? `calc(0.75rem + 1vw) !important` : `calc(4rem + 5vw)`};
    z-index: 0;

    ${mediaQueries(30)`
        font-size: calc(3rem + 4vw); 
    `}
`

const BackgroundTitle = (props) => {

    return (
        <Text 
            top= {props.top}
            left= {props.left}
            right= {props.right}
            bottom= {props.bottom}
            text= {props.text}
        >
            {props.text}
        </Text>
    )
}

export default BackgroundTitle
