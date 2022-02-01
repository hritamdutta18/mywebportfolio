import React from 'react'
import styled, { css, keyframes } from 'styled-components'
import { mediaQueries } from '../components/Themes'


const updownArrow= keyframes`
    0%{
        transform: translateY(20px);
    }
    50%{
        transform: translateY(-20px);
    }
    100%{
        transform: translateY(20px);
    }
`
const animation= props => css` ${updownArrow} 2s infinite ease; `

const Text= styled.h1`
    position: fixed;
    top: ${props => props.top};
    left: ${props => props.left};
    right: ${props => props.right};
    bottom: ${props => props.bottom};
    color: ${props => props.text === '⬇' ? `rgba(${props.theme.textRgba}, 0.4)` : `rgba(${props.theme.textRgba}, 0.1)`};
    font-size: ${props => props.text === '⬇' ? 'calc(3rem + 4vw)' : 'calc(4rem + 5vw)'};
    z-index: 0;
    animation: ${props => props.text === '⬇' ? animation : 'none'};

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
