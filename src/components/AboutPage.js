import React from 'react'
import { lazy, Suspense } from 'react'
import styled, { keyframes, ThemeProvider } from 'styled-components'
import { DarkTheme, mediaQueries } from './Themes'
import rocket from '../assets/Images/rocket.png'
import { Download } from './AllSvgs'
import { motion } from 'framer-motion'
import PreLoader from '../subComponents/PreLoader'
import MetaTag from './MetaTag'
import thumbnail from '../assets/share-imgs/about.PNG'

// Importing Components using React.lazy
const LogoComponent= lazy (() => import ('../subComponents/LogoComponent'))
const HomeButton= lazy (() => import ('../subComponents/HomeButton'))
const SocialIcons= lazy (() => import ('../subComponents/SocialIcons'))
const ParticleComponent= lazy (() => import ('../subComponents/ParticleComponent')) 
const BackgroundTitle=  lazy (() => import ('../subComponents/BackgroundTitle'))


const Box= styled(motion.div)`
    background-color: ${props => props.theme.body};
    height: 100vh;
    width: 100vw;
    position: relative;
    overflow: hidden;
`

// Rocket Animation
const float= keyframes`
    0% {
        left: 0;
        bottom: -10%;
        transform: rotate(-180deg);
    }
    10%{    
        transform: rotate(0deg);
    }
    25% {
        left: 40%;
        bottom: 30%;
    }
    50% {
        left: 70%;
        bottom: 60%;
        transform: rotate(0deg);
    }
    60%{  
        transform: rotate(180deg);
    }
    75% {
        left: 40%;
        bottom: 30%;
    }
    100% {
        left: 0;
        bottom: -10%;    
        transform: rotate(180deg);
    }
`
const Rocket= styled(motion.div)`
    position: absolute;
    width: 30vw;
    animation: ${float} 100s infinite linear;

    img{
        width: 100%;
        height: auto;
        transform: rotate(20deg);
    }
`
const Main= styled(motion.div)`
    border: 2px solid ${props => props.theme.text};
    color: ${props => props.theme.text};
    padding: 2rem;
    width: 60vw;
    height: 60vh;
    z-index: 3;
    line-height: 1.5;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    font-size: calc(0.6rem + 1vw);
    font-family: 'Ubuntu Mono', monospace;
    font-style: italic;
    backdrop-filter: blur(8px);
    text-align: justify;    
    position: absolute;
    right: calc(3rem + 3vw);
    bottom: calc(2rem + 2vh);
    border-radius: 50px 0 50px 0;

    ${mediaQueries(75)`
        font-size: calc(0.5rem + 1vw);
    `};
    ${mediaQueries(40)`
        width: 70vw;
        height: 55vh;
        transform: translate(30%, 40%);
        bottom: 40%;
        right: 30%;
    `};
    ${mediaQueries(30)`
        padding: 1.5rem;
        width: 60vw;
        height: auto;
        backdrop-filter: none;
        margin-top: 2rem;
    `};
    ${mediaQueries(20)`
        font-size: calc(0.6rem + 1vw);
    `};
`
const Resume= styled.button`
    background: ${props => props.theme.text};    
    border: 2px solid ${props => props.theme.text};
    border-radius: 0 0 25px 0;
    font-family: 'Ubuntu Mono', monospace;
    font-size: calc(0.7rem + 0.7vw);
    padding: 0.4rem 1rem;
    cursor: pointer;
    align-self: end;

    a{
        color: ${props => props.theme.body};
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }
    &:hover{
        background: transparent;
        transition: all 0.3s ease;
    }    
    &:hover a{
        color: ${props => props.theme.text};
        transition: all 0.3s ease;
        fill: ${props => props.theme === 'dark' ? DarkTheme.text: DarkTheme.body};
    }    
`

const AboutPage = () => {

    return (
        <ThemeProvider theme= {DarkTheme}>
            <Suspense fallback= {<PreLoader />}>
                <Box
                    key='skills'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { duration: 0.5 } }}
                    exit={{ opacity: 0, transition: { duration: 0.5 } }}
                >
                    <MetaTag 
                        title= "About - Hritam Dutta"
                        description= "I am a student @ VIT Vellore and a Web Developer."
                        imageUrl= {thumbnail}
                        imageAlt= "This image shows the about page of the portfolio"                    
                    />
                    
                    <LogoComponent theme= 'dark'/>
                    <SocialIcons theme= 'dark'/>
                    <HomeButton />
                    <ParticleComponent theme= 'dark'/>

                    <Rocket
                        initial={{ left: '0%', bottom: '-10%' }}
                        animate={{ transition: { duration: 2, delay: 0.5 } }}
                    >
                        <img src= {rocket} alt= "Rocket" />
                    </Rocket>   

                    <Main
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, transition: { duration: 1, delay: 1 } }}
                    >
                        Currently, I am a B.Tech student at VIT Vellore pursuing Computer Science &amp; Engineering with specialization in IoT.   
                        I am a full-stack web developer specializing in MERN Stack.
                        I am also interested in software development with proficiency in C and JAVA.
                        <br/> <br/>
                        I am an avid badminton player, a FIFA fanatic and also a cricket enthusiast. Music is my escape.
                        <br/> <br/>
                        Feel free to reach out to me !  
                        <br/> <br/>                    
                        <Resume>
                            <a href='Resume.pdf' style= {{textDecoration: 'none'}} target= '_blank'>
                                <Download width= {18} height= {18} fill= 'currentColor' />&nbsp;<span>Download Resume</span>
                            </a>
                        </Resume>
                        
                    </Main>

                    <BackgroundTitle text= "ABOUT" top= '10%'  left= '10%' />

                </Box>
            </Suspense>            
        </ThemeProvider>
    )
}

export default AboutPage
