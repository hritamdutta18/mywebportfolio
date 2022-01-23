import { motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'


const Box= styled(motion.div)`
    width: calc(8rem + 8vw);
    margin-right: 0 !important;
    text-decoration: none;
    height: 20rem;
    padding: 1rem;
    color: ${props => props.theme.text};
    border: 2px solid ${props => props.theme.text};
    backdrop-filter: blur(2px);
    box-shadow: 0 0 1rem 0 rgba(0,0,0,0.2);
    display: flex;
    flex-direction: column;
    z-index: 5;

    &:hover{
        color: ${props => props.theme.body};
        background: ${props => props.theme.text};
        transition: all 0.4s ease;
    }
`
const Image= styled.div`
    background-image: ${props => `url(${props.img})`};
    width: 100%;
    height: 60%;
    background-color: #FFFFFF;
    background-size: contain;
    background-repeat: no-repeat;
    border: 1px solid transparent;
    background-position: center center;

    ${Box}:hover &{
        border: 1px solid ${props => props.theme.body};
    }
`
const Title= styled.h3`
    color: inherit;
    padding: 1rem 0 0.5rem 0;
    font-family: 'Karla', sans-serif;
    font-weight: 900 !important;
    border-bottom: 1px solid ${props => props.theme.text};    
    transition: border-bottom 0.5s ease-out; 
    display: block;

    ${Box}:hover &{
        border-bottom: 1px solid ${props => props.theme.body};
    } 
`
const Position= styled.h4`
    font-weight: 600;
    font-style: italic;
    margin-top: 0.3rem;
`
const Date= styled.span`
    padding: 0.5rem 0;
`
const Container= styled(motion.div)`

`

// Framer-motion Configurations
const Item= {
    hidden:{
        scale: 0
    },
    show:{
        scale: 1,
        transition:{
            type: 'spring',
            duration: 0.5
        }
    }
}


const ExpComponent = (props) => {

    const {name, position, date, imgSrc}= props.exp;

    return (
        <Container
            variants= {Item}
        >
            <Box>
                <Image img= {imgSrc} />
                <Title>{name}</Title>
                <Position>{position}</Position>
                <br/>
                <Date>
                    {date}
                </Date>
            </Box>
        </Container>
    )
}

export default ExpComponent
