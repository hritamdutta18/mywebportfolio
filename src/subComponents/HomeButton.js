import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { HomeBtn } from '../components/AllSvgs'
import { mediaQueries } from '../components/Themes'

const Home= styled.button`
    position: fixed;
    top: 2rem;
    left: 50%;
    transform: translate(-50%, 0%);
    background-color: rgb(247, 251, 253);
    padding: 0.3rem;
    border-radius: 50%;
    border: none;
    width: 2.5rem;
    height: 2.5rem;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 3;

    &:hover{
        background-color: rgba(247, 251, 253, 0.8);
        box-shadow: 0 0 8px 6px rgba(20, 20, 20, 0.3);
        transform: scale(1.1) translate(-50%, 0%);
        transition: all 0.3s ease;
    }

    &>*:first-child{
        text-decoration: none;
        color: inherit;

        &{
            fill: #00000E;
        }
    }    

    ${mediaQueries(40)`
        width: 2.1rem;
        height: 2.1rem;

        svg{
            width: 25px;
            height: 25px;
        }
    `};
`


const HomeButton = () => {
    return (
        <Home>
            <NavLink to= "/">
                <HomeBtn width = {30} height= {30} /> 
            </NavLink>   
        </Home>
    )
}

export default HomeButton
