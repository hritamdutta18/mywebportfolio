import { motion } from 'framer-motion';
import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Github } from '../components/AllSvgs';
import { External } from '../components/AllSvgs';


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
`
const Title= styled.h2`
    font-size: calc(1em + 0.5vw);
`
const Description= styled.h2`
    font-size: calc(0.8em + 0.3vw);
    font-family: 'Karla', sans-serif;
    font-wight: 500;
    text-align: justify;
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


const ProjectCard = (props) => {

    const { id, name, description, tags, demo, github }= props.data;

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
                <Git to= {{pathname: `${github}`}} target="_blank">
                    <Github width= {30} height= {30} />
                </Git>
            </Footer>
        </Box>
    )
}

export default ProjectCard
