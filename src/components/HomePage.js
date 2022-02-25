import { motion } from 'framer-motion'
import React, { useState, lazy, Suspense } from 'react'
import { NavLink } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'
import { HDLogo } from './AllSvgs'
import Intro from './Intro'
import { mediaQueries } from './Themes'
import PreLoader from '../subComponents/PreLoader'
import thumbnail from '../assets/share-imgs/home.PNG'
import MetaTag from './MetaTag'

// Importing Components using React.lazy
const LogoComponent= lazy (() => import ('../subComponents/LogoComponent'))
const HomeButton= lazy (() => import ('../subComponents/HomeButton'))
const SocialIcons= lazy (() => import ('../subComponents/SocialIcons'))


const MainContainer= styled(motion.div)`
    background: ${props => props.theme.body};
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    position: relative;

    h2, h3, h4, h5, h6 {
        font-family: 'Karla', sans-serif;
        font-weight: 500;
    }

    h2{
        ${mediaQueries(40)`
            font-size: 1.2em;  
        `}
        ${mediaQueries(30)`
            font-size: 1em;  
        `}
    }
`
const Container= styled.div`
    padding: 2rem;
`
const rotateLogo = keyframes`
    from{
        transform: rotate(0);
    }
    to{
        transform: rotate(360deg);
    }
`
const Logo= styled(motion.div)`
    position: absolute;
    top: 85%;
    left: 92%;
    transform: translate(-50%, -50%);
    border: none;
    outline: none;
    background-color: transparent;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: all 1s ease;

    &>:first-child{
        animation: ${rotateLogo} infinite 1.75s linear;       
        fill: ${props => props.theme.text};
    }

    &>:last-child{   
        display: inline-block;    
    }

    @media only screen and (max-width: 50em){
        top: 92%;
        left: 90%;
        width: 100px;
        height: 100px;
    }

    @media only screen and (max-width: 30em) {
        width: 40px;
        height: 40px;
    }
`
const Contact= styled(NavLink)`
    color: ${props => props.theme.text};
    position: absolute;
    top: 2.5rem;
    right: calc(1rem + 2vw);
    text-decoration: none;
    z-index: 1;       
    
    @media only screen and (max-width: 50em){  
        color: ${props => props.theme.body};  
    }
`
const ExpEdu= styled(NavLink)`
    color: ${props => props.theme.text};
    position: absolute;
    top: 50%;
    right: 2rem;
    transform: translate(50%, -50%) rotate(90deg);
    text-decoration: none;
    z-index: 1;

    @media only screen and (max-width: 50em){  
        color: ${props => props.theme.body};  
        text-shadow: rgb(0 0 0) 0px 0px 4px;
    }
`
const Projects= styled(NavLink)`
    color: ${props => props.theme.body};
    transition: color 1s ease;
    position: absolute;
    top: 45%;
    left: 2.5rem;
    transform: translate(-50%, -50%) rotate(-90deg);
    text-decoration: none;
    z-index: 1;

    @media only screen and (max-width: 50em){  
        text-shadow: rgb(0 0 0) 0px 0px 4px;
    }
`
const BottomBar= styled.div`
    position: absolute;
    bottom: 1rem;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
`
const About= styled(NavLink)`
    color: ${props => props.theme.body};
    transition: color 1s ease;
    text-decoration: none;
    z-index: 1;

    @media only screen and (max-width: 50em){  
        color: ${props => props.theme.text}; 
    }
`
const Skills= styled(NavLink)`
    color: ${props => props.theme.text};
    text-decoration: none;
    z-index: 1;

    // Error Styles (Unresolved)

    position: unset;
    left: 0;
    top: 0;
    font-size: inherit;
    font-family: inherit;
    transition: color 1s ease;
`
const DarkDiv= styled(motion.div)`
    position: absolute;
    top: 0;
    background-color: ${props => props.theme.text};
    bottom: 0;
    right: 50%;
    width: 50%;
    height: 100%;
    z-index: 1;

    @media only screen and (max-width: 50em){  
        width: 100%;
        height: 50%;
        right: 0;
    }
`

const HomePage = () => {

    const [path, setPath] = useState("");

    const moveY = { y: "-100%" };
    const moveX = { x: `${path === "projects" ? "100%" : "-100%"}` };
    const matchQuery = window.matchMedia("(max-width: 50em)").matches;

    return (
        <Suspense fallback= {<PreLoader />}>
            <MainContainer
                key= "modal"
                initial= {{ opacity: 0 }}
                animate= {{ opacity: 1 }}
                exit= { path === "about" || path === "skills" ? moveY : moveX }
                transition= {{ duration: 0.5 }}
            >
                <MetaTag 
                    title= "Hritam Dutta"
                    description= "Welcome to my web portfolio !"
                    imageUrl= {thumbnail}
                    imageAlt= "This image shows the home page of the portfolio"                    
                />

                <DarkDiv 
                    initial= { matchQuery ? {height: 0} : {width: 0} }
                    animate= {matchQuery ? {height: '50%'} : {width: '50%'}}
                    transition= {{ type: 'spring', duration: 2, delay: 0.5}}                
                />

                <Container>
                    <HomeButton />
                    <LogoComponent theme= {'dark'}/>
                    <SocialIcons theme= { matchQuery ? 'light' : 'dark' } />
                    
                    <Logo
                        initial= {{opacity: 0}}
                        animate= {{opacity: 1}}
                        transition= {{ duration: 1, delay: 1}}
                    >                         
                        <HDLogo 
                            width= { matchQuery ? 100 : 120 } 
                            height= { matchQuery ? 100 : 120 } 
                        />                        
                    </Logo>
                   
                    <Contact 
                        target= "_blank" 
                        to= {{ pathname: "mailto:hritamloyola10@gmail.com" }}
                    >
                        <motion.h2
                            initial= {{
                                y: -200,
                                transition: { type: 'spring', duration: 1.5, delay: 1 }
                            }}
                            animate= {{
                                y: 0,
                                transition: { type: 'spring', duration: 1.5, delay: 1 }
                            }}
                            whileHover={{scale: 1.1}}
                            whileTap={{ scale: 0.9 }}
                        >
                            Email me !
                        </motion.h2>
                    </Contact>                                
                   
                    <ExpEdu 
                        onClick= { () => setPath ("education-experience") } 
                        to= "/education-experience" >
                        <motion.h2
                            initial= {{
                                y: -200,
                                transition: { type: 'spring', duration: 1.5, delay: 1 }
                            }}
                            animate= {{
                                y: 0,
                                transition: { type: 'spring', duration: 1.5, delay: 1 }
                            }}
                            whileHover={{scale: 1.1}}
                            whileTap={{ scale: 0.9 }}
                        >
                            Education &amp; Experience
                        </motion.h2>
                    </ExpEdu>                     
                    
                    <Projects 
                        to= "/projects" 
                        style= {{ left: matchQuery ? '1.75rem' : '2.5rem'}} >
                        <motion.h2
                            onClick={ () => setPath("projects") }
                            initial= {{
                                y: -200,
                                transition: { type: 'spring', duration: 1.5, delay: 1 }
                            }}
                            animate= {{
                                y: 0,
                                transition: { type: 'spring', duration: 1.5, delay: 1 }
                            }}
                            whileHover={{scale: 1.1}}
                            whileTap={{ scale: 0.9 }}
                        >
                            Projects
                        </motion.h2>
                    </Projects>

                    <BottomBar>
                        <About                               
                            to= "/about" >
                            <motion.h2
                                onClick={ () => setPath("about") }
                                initial= {{
                                    y: 200,
                                    transition: { type: 'spring', duration: 1.5, delay: 1 }
                                }}
                                animate= {{
                                    y: 0,
                                    transition: { type: 'spring', duration: 1.5, delay: 1 }
                                }}
                                whileHover={{scale: 1.1}}
                                whileTap={{ scale: 0.9 }}
                            >
                                About
                            </motion.h2>
                        </About>

                        <Skills 
                            to= "/skills" 
                        >
                            <motion.h2
                                onClick={ () => setPath("skills") }
                                initial= {{
                                    y: 200,
                                    transition: { type: 'spring', duration: 1.5, delay: 1 }
                                }}
                                animate= {{
                                    y: 0,
                                    transition: { type: 'spring', duration: 1.5, delay: 1 }
                                }}
                                whileHover={{scale: 1.1}}
                                whileTap={{ scale: 0.9 }}
                            >
                                Skills
                            </motion.h2>
                        </Skills>

                    </BottomBar>    
                </Container>

                <Intro />
            </MainContainer>
        </Suspense>        
    )
}

export default HomePage
