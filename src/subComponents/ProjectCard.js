import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Github } from '../components/AllSvgs';

const Box= styled.li`
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
    justify-content: space-between;
`
const Link= styled(NavLink)`
    background-color: ${props => props.theme.body};
    color: ${props => props.theme.text};
    text-decoration: none;
    padding: 0.5rem calc(2rem + 2vw);
    border-radius: 0 0 0 50px;
    font-size: calc(1em + 0.5vw);

    ${Box}:hover &{
        background-color: ${props => props.theme.text};
        color: ${props => props.theme.body};
    }
`
const Git= styled(NavLink)`
    color: inherit;
    text-decoration: none;

    ${Box}:hover &{
        &>*{
            fill: ${props => props.theme.text}
        }
    }
`

const ProjectCard = (props) => {

    const { id, name, description, tags, demo, github }= props.data;
    return (
        <Box key= {id}>
            <Title>{name}</Title>
            <Description>{description}</Description>
            <Tags>
                {
                    tags.map((t, id) => {
                        return <Tag key= {id}>#{t}</Tag> 
                    })
                }
            </Tags>
            <Footer>
                <Link to= {{pathname: `${demo}`}} target="_blank">
                    Visit
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" class="fill-current ml-1" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><polyline points="216 100 215.992 40.008 156 40" fill="none" stroke-linecap="round" class="stroke-current" stroke-linejoin="round" stroke-width="16"></polyline><line x1="143.9714" y1="112.0286" x2="215.9714" y2="40.0286" fill="none" class="stroke-current" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><path d="M184,144v64a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V80a8,8,0,0,1,8-8h64" fill="none" class="stroke-current" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path></svg>
                </Link>
                <Git to= {{pathname: `${github}`}} target="_blank">
                    <Github width= {30} height= {30} />
                </Git>
            </Footer>
        </Box>
    )
}

export default ProjectCard