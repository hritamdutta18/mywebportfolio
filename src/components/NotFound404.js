import React from 'react'
import { NavLink } from 'react-router-dom'
import styled, { ThemeProvider } from "styled-components"
import { lightTheme } from "./Themes"
import { HomeBtn } from "./AllSvgs"
import MetaTag from './MetaTag'


const Box= styled.div`
  height: 100vh;
  background-color: ${props => props.theme.body};
  font-family: 'Ubuntu', sans-serif;
  padding: 0 2rem;
`
const Headers= styled.div`
  color: ${props => props.theme.text};
  position: absolute;
  width: 80%;
  padding: 0 10%;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -45%);      
  text-align: center;

  h1{
    font-size: calc(8rem + 8vw);
    opacity: 0.1;
    z-index: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);   
  }

  h2{
    z-index: 1;
    font-size: calc(2.5rem + 2vw);
    text-transform: uppercase;
    margin: 1rem 0;    
  }

  p{
    font-size: 1.2em;
    z-index: 1;    
  }
`
const HomeRedirect= styled(NavLink)`
  background-color: ${props => `rgba(${props.theme.bodyRgba}, 0.7)`};
  color: ${props => props.theme.text};
  border: 1px solid ${props => props.theme.text};
  text-decoration: none;
  padding: 0.5rem calc(1rem + 1vw);
  border-radius: 0 20px 0 20px;
  font-size: calc(1em + 0.5vw);
  font-weight: 700;
  font-family: 'Karla', sans-serif;
  margin-top: 4rem;
  display: flex;
  align-items: center;
  z-index: 1;
  
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -55%); 

  &:hover {
    background-color: ${props => `rgba(${props.theme.textRgba}, 0.9)`};
    color: ${props => props.theme.body};
    fill: ${props => props.theme.body};
    transition: all 0.4s ease;
  }
`

const NotFound404 = () => {
 
  return (
    <ThemeProvider theme= { lightTheme }>
      <Box>     

        <MetaTag title= "404 - Page Not Found" />

        <Headers>
          <h1>404</h1>
          <h2>Page Not Found !</h2>    
          <p>This is not the page you're looking for.</p>      
        </Headers>

        <HomeRedirect to= "/" >
            <HomeBtn width= {20} height= {20} />&nbsp; Go Back
        </HomeRedirect>

      </Box>
    </ThemeProvider>
    )
};

export default NotFound404