import { motion } from 'framer-motion';
import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Github } from '../components/AllSvgs';
import { External } from '../components/AllSvgs';
import { mediaQueries } from '../components/Themes'

const Box= styled(motion.li)`
    width: 16rem;
    height: 40vh;
    background-color: ${props => props.theme.text};
    color: ${props => props.theme.body};
    padding: 1.5rem 2rem;
    margin-right: 8rem;
    border-radius: 0 50px 0 50px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 1px solid ${props => props.theme.body};
    transition: all 0.2s ease;

    &:hover{
        background-color: ${props => props.theme.body};
        color: ${props => props.theme.text};
        border: 1px solid ${props => props.theme.text};
    }

    ${mediaQueries(60)`
        height: 35vh;
    `}
    ${mediaQueries(50)`
        margin-right: 5rem;
    `}
    ${mediaQueries(40)`
        width: 14rem;
        margin-right: 4rem;
    `}
    ${mediaQueries(25)`
        width: 12rem;
        padding: 1.5rem;
    `}
    ${mediaQueries(20)`
        width: 10rem;
        height: 40vh;
    `}
`
const Title= styled.h2`
    font-size: calc(1em + 0.5vw);
`
const Description= styled.h2`
    font-size: calc(0.8em + 0.3vw);
    font-family: 'Karla', sans-serif;
    font-wight: 500;
    text-align: justify;

    ${mediaQueries(25)`
        font-size: calc(0.7em + 0.3vw);
    `}
    ${mediaQueries(20)`
        font-size: calc(0.6em + 0.3vw);
    `}
`
const Tags= styled.div`
    border-top: 2px solid ${props => props.theme.body};
    padding-top: 0.5rem;
    display: flex;
    flex-wrap: wrap;

    ${Box}:hover &{
        border-top: 2px solid ${props => props.theme.text};
    }
`
const Tag= styled.span`
    margin-right: 1rem;
    font-size: calc(0.8em + 0.3vw);

    ${mediaQueries(25)`
        font-size: calc(0.7em);
    `}
`
const Footer= styled.div`
    display: flex;
    align-items: center;
`
const Link= styled(NavLink)`
    background-color: ${props => props.theme.body};
    color: ${props => props.theme.text};
    text-decoration: none;
    padding: 0.5rem calc(2rem + 1vw);
    border-radius: 0 0 0 50px;
    font-size: calc(1em + 0.5vw);
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    ${Box}:hover &{
        background-color: ${props => props.theme.text};
        color: ${props => props.theme.body};
        fill: ${props => props.theme.body};
    }
    
    .ext{
        margin-left: 0.8rem;
    }

    ${mediaQueries(30)`
        padding: 0.5rem calc(1.5rem + 1vw);
    `}
`
const Git= styled(NavLink)`
    color: inherit;
    text-decoration: none;
    height: fit-content;

    ${Box}:hover &{
        &>*{
            fill: ${props => props.theme.text}
        }
    }
`

// Framer-motion Configurations
const Item= {
    hidden:{ scale: 0 },
    show:{
        scale: 1,
        transition:{ type: 'spring', duration: 0.5 }
    }
}


const ProjectCard = (props) => {

    const { id, name, description, tags, demo, github }= props.data;

    const matchQuery = window.matchMedia("(max-width: 30em)").matches;

    return (
        <Box key= {id} variants={Item}  >
            <Title>{name}</Title>
            <Description>{description}</Description>
            <Tags>
                {
                    tags.map((t, id) => {
                        return <Tag key= {id}>#{t}</Tag> 
                    })
                }
            </Tags>
            <Footer style={{ justifyContent: demo === "" ? 'end' : 'space-between' }}>
                {
                    demo === "" ?
                    <></>
                    :                    
                    <Link to= {{pathname: `${demo}`}} target="_blank">
                        Visit
                        <External className="ext" fill="currentColor" />
                    </Link>
                }
                {
                    github === "" ?
                    <></>
                    :                    
                    <Git to= {{pathname: `${github}`}} target="_blank">
                        <Github width= { matchQuery ? 25 : 30 } height= { matchQuery ? 25 : 30 } />
                    </Git>
                }                
            </Footer>
        </Box>
    )
}

export default ProjectCard
