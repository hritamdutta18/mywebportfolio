import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { HomeBtn } from '../components/AllSvgs'

const Home= styled.button`
    position: fixed;
    top: 2rem;
    left: 50%;
    transform: translate (-50%, 0);
    background-color: #FCF6F4;
    paddding: 0.3rem;
    border-radius: 50%;
    borrder: 1px solid black;
    width: 2.5rem;
    height: 2.5rem;
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 3;

    &:hover{
        background-color: rgba(0, 255, 0, 0.4);
        box-shadow: 0 0 8px 6px rgba(0, 255, 0, 0.2);
    }

    &>*::first-child{
        text-decoration: none;
        color: inherit;
    }
    
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
