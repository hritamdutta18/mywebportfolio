import React from 'react'
import styled from 'styled-components'
import { DarkTheme, mediaQueries } from '../components/Themes'

const Logo= styled.h1`
    display: inline-block;
    color: ${props => props.color === 'dark' ? DarkTheme.text : DarkTheme.body};
    transition: color 1s ease;
    font-family: 'Pacifico', cursive;
    position: fixed;
    left: 2rem;
    top: 2rem;
    z-index: 3;

    ${mediaQueries(40)`
        font-size: 1.75em;
        left: 1rem;
  `};
`

const LogoComponent = (props) => {
    return (
        <Logo color= {props.theme}>
            {/* My Full Name initials */}
            HD
        </Logo>
    )
}

export default LogoComponent
