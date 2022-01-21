import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'
import HomeButton from '../subComponents/HomeButton'
import LogoComponent from '../subComponents/LogoComponent'
import SocialIcons from '../subComponents/SocialIcons'
import { HDLogo } from './AllSvgs'
import Intro from './Intro'


const MainContainer= styled.div`
    background: ${props => props.theme.body};
    width: 100vw;
    height: 100vh;
    overflow-x: hidden;
    position: relative;

    h2, h3, h4, h5, h6 {
        font-family: 'Karla', sans-serif;
        font-weight: 500;
    }
`

const Container= styled.div`
    padding: 2rem;
`

const Contact= styled(NavLink)`
    color: ${props => props.theme.text};
    position: absolute;
    top: 2.5rem;
    right: calc(1rem + 2vw);
    text-decoration: none;
    z-index: 1;
`
const Experience= styled(NavLink)`
    color: ${props => props.theme.text};
    position: absolute;
    top: 57%;
    right: 0;
    transform: rotate(90deg) translate(-50%, -50%);
    text-decoration: none;
    z-index: 1;
`
const Projects= styled(NavLink)`
    color: ${props => props.click ? props.theme.body : props.theme.text};
    transition: color 1s ease;
    position: absolute;
    top: 50%;
    left: 2.5rem;
    transform: translate(-50%, -50%) rotate(-90deg);
    text-decoration: none;
    z-index: 1;
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
    }

    &>:last-child{
        padding-top: 1rem;    
        display: ${props => props.click ? 'none' : 'inline-block'};    
    }
`

const DarkDiv= styled.div`
    position: absolute;
    top: 0;
    background-color: #000;
    bottom: 0;
    right: 50%;
    width: ${props => props.click ? '50%' : "0%"};
    height: ${props => props.click ? '100%' : "0%"};
    z-index: 1;
    transition: height 0.5s ease, width 1s ease 0.5s;
`


const Main = () => {

    const [click, setClick] = useState(false);

    return (
        <MainContainer>
            <DarkDiv click= {click}/>

            <Container>
                <HomeButton />
                <LogoComponent theme= {click ? 'dark' : 'light'}/>
                <SocialIcons theme= {click ? 'dark' : 'light'}/>
                
                <Center click= {click}>
                    <HDLogo onClick= {() => setClick (!click)} width= {click ? 120 : 220} height= {click ? 120 : 220} />
                    <span>Click here !</span>
                </Center>

                <Contact target= "_blank" to= {{pathname: "mailto:hritamloyola10@gmail.com"}}>
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

                <Experience to= "/experience" >
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
                        Experience
                    </motion.h2>
                </Experience>

                <Projects click= {click} to= "/projects" >
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
                        Projects
                    </motion.h2>
                </Projects>

                <BottomBar>

                    <About click= {click} to= "/about" >
                        <motion.h2
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
    )
}

export default Main
