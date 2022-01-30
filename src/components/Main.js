import { motion } from 'framer-motion'
import React, { useState, lazy, Suspense } from 'react'
import { NavLink } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'
import { HDLogo } from './AllSvgs'
import Intro from './Intro'
import { mediaQueries } from './Themes'
import PreLoader from '../subComponents/PreLoader'

// Importing Components using React.lazy
const LogoComponent= lazy (() => import ('../subComponents/LogoComponent'))
const HomeButton= lazy (() => import ('../subComponents/HomeButton'))
const SocialIcons= lazy (() => import ('../subComponents/SocialIcons'))


const MainContainer= styled(motion.div)`
    background: ${props => props.theme.body};
    width: 100vw;
    height: 100vh;
    overflow-x: hidden;
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
const Center= styled.button`
    position: absolute;
    top: ${props => props.click ? '85%' : '50%'};
    left: ${props => props.click ? '92%' : '50%'};
    transform: translate(-50%, -50%);
    border: none;
    outline: none;
    background-color: transparent;
    cursor: pointer;
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
        padding-top: 1rem;    
        display: ${props => props.click ? 'none' : 'inline-block'};    
    }

    @media only screen and (max-width: 50em){
        top: ${props => props.click ? "90%" : "50%"};
        left: ${props => props.click ? "90%" : "50%"};
        width: ${props => props.click ? "80px" : "150px"};
        height: ${props => props.click ? "80px" : "150px"};
    }
    @media only screen and (max-width: 30em) {
        width: ${props => props.click ? "40px" : "150px"};
        height: ${props => props.click ? "40px" : "150px"};
    }
`
const Contact= styled(NavLink)`
    color: ${props => props.theme.text};
    position: absolute;
    top: 2.5rem;
    right: calc(1rem + 2vw);
    text-decoration: none;
    z-index: 1;        
`
const ExpEdu= styled(NavLink)`
    color: ${props => props.click ? props.theme.body : props.theme.text};
    position: absolute;
    top: 50%;
    right: 2rem;
    transform: translate(50%, -50%) rotate(90deg);
    text-decoration: none;
    z-index: 1;

    @media only screen and (max-width: 50em){  
        text-shadow: ${props => props.click ? `rgb(0 0 0) 0px 0px 4px` : `none`};
    }
`
const Projects= styled(NavLink)`
    color: ${props => props.click ? props.theme.body : props.theme.text};
    transition: color 1s ease;
    position: absolute;
    top: 45%;
    left: 2.5rem;
    transform: translate(-50%, -50%) rotate(-90deg);
    text-decoration: none;
    z-index: 1;

    @media only screen and (max-width: 50em){  
        text-shadow: ${props => props.click ? `rgb(0 0 0) 0px 0px 4px` : `none`};
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
    color: ${props => props.click ? props.theme.body : props.theme.text};
    transition: color 1s ease;
    text-decoration: none;
    z-index: 1;
`
const Skills= styled(NavLink)`
    color: ${props => props.theme.text};
    text-decoration: none;
    z-index: 1;
`
const DarkDiv= styled.div`
    position: absolute;
    top: 0;
    background-color: ${props => props.theme.text};
    bottom: 0;
    right: 50%;
    width: ${props => props.click ? '50%' : "0%"};
    height: ${props => props.click ? '100%' : "0%"};
    z-index: 1;
    transition: height 0.5s ease, width 1s ease 0.5s;

    @media only screen and (max-width: 50em){  
        width: ${props => props.click ? '100%' : "0%"};
        height: ${props => props.click ? '50%' : "0%"};
        right: 0;
        transition: width 0.5s ease 0s, height 1s ease 0.5s;
    }
`

const Main = () => {

    const [click, setClick] = useState(false);
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
                <DarkDiv click= {click}/>

                <Container>
                    <HomeButton />
                    <LogoComponent theme= {click ? 'dark' : 'light'}/>
                    <SocialIcons theme= { matchQuery ? 'light' : (click ? 'dark' : 'light') } />
                    
                    <Center click= {click}>                         
                        <HDLogo 
                            onClick= { () => setClick (!click) } 
                            width= { matchQuery ? (click ? 80 : 150) : (click ? 120 : 220) } 
                            height= { matchQuery ? (click ? 80 : 150) : (click ? 120 : 220) } 
                        />                        
                        <span>Click here !</span>
                    </Center>
                   
                    <Contact 
                        click= { matchQuery ? +click : +false } 
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
                        click= { matchQuery ? +click : +false } 
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
                        click= {+click} 
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
                            onClick={ () => setClick(false) }
                            click= { matchQuery ? +false : +click }  
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

                        <Skills to= "/skills" >
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

                {click ? <Intro /> : null}
            </MainContainer>
        </Suspense>        
    )
}

export default Main
