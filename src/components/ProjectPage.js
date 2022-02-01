import React, { useEffect, useRef, lazy, Suspense } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { DarkTheme, mediaQueries } from './Themes'
import { Project } from '../data/ProjectData'
import ProjectCard from '../subComponents/ProjectCard'
import { HDLogo } from './AllSvgs'
import { motion } from 'framer-motion'
import img from '../assets/Images/coder-img.jpg'
import PreLoader from '../subComponents/PreLoader'
import Helmet from 'react-helmet'

// Importing Components using React.lazy
const LogoComponent= lazy (() => import ('../subComponents/LogoComponent'));
const HomeButton= lazy (() => import ('../subComponents/HomeButton'));
const SocialIcons= lazy (() => import ('../subComponents/SocialIcons'));
const BackgroundTitle=  lazy (() => import ('../subComponents/BackgroundTitle'));


const MainContainer= styled.div`
    background-image: url(${img});
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
    width: 100vw;
    height: auto;
`
const Box= styled.div`
    background-color: ${props => `rgba(${props.theme.bodyRgba}, 0.8)`};
    height: 500vh;
    position: relative;
    display: flex;
    align-items: center;

    & #warning{
        font-size: 1em !important;
    }
    ${mediaQueries(65)`            
        height: 100vh;
        overflow-x: scroll;
        scroll-behavior: smooth;

        &::-webkit-scrollbar{
            display: none;
        }
    `}
`
const Main= styled(motion.ul)`
    position: fixed;
    top: 11rem;
    transform: translate(-30%, 0);
    left: calc(9rem + 9vw);
    height: 40vh;    
    display: flex;
    color: ${props => props.theme.text};
    
    ${mediaQueries(75)`       
        top: 20%;
    `}
    ${mediaQueries(65)`       
        top: 30%;
        height: max-content;
        position: absolute;
        transform: none;
    `}
    ${mediaQueries(50)`       
        left: calc(8rem + 9vw);
    `}
    ${mediaQueries(40)`      
        left: calc(7rem + 9vw);
    `}
    ${mediaQueries(30)`            
        left: calc(5rem + 9vw);
    `}
    ${mediaQueries(25)`            
        left: calc(3rem + 9vw);
    `}
`
const Rotate= styled.span`
    display: block;
    position: fixed;
    right: 2rem;
    bottom: 2rem;
    width: 90px;
    height: 90px;
    z-index: 1;

    ${mediaQueries(40)`
        width: 65px;
        height: 65px;  

        svg{
            width: 65px;
            height: 65px;
        }
    `}
    ${mediaQueries(25)`
        width: 55px;
        height: 55px;

        svg{
            width: 55px;
            height: 55px;
        }
    `};
`

// Framer-motion Configurations
const container= {
    hidden: {opacity: 0},
    show:{
        opacity: 1,
        transition: {
            staggerChildren: 0.5,
            duration: 0.5
        }
    }
}


const ProjectPage = () => {

    const ref= useRef(null);
    const hdlogo= useRef(null);    
    
    const matchQuery = window.matchMedia("(max-width: 65em)").matches;
                   
    const mobileScroll= (s) => {
        hdlogo.current.style.transform= 'rotate('+ -s+ 'deg)';   
    }

    useEffect(() => { 

        const rotateLogo= () =>{
            ref.current.style.transform= `translateX(${-window.pageYOffset}px)`;
            return (hdlogo.current.style.transform= 'rotate('+ -window.pageYOffset + 'deg)');            
        }

        window.addEventListener('scroll', rotateLogo);
        return () => window.removeEventListener('scroll', rotateLogo);

    }, []);

    

    return (
        <ThemeProvider theme= {DarkTheme}>
            <Suspense fallback= {<PreLoader />}>
                <MainContainer>  

                    <Helmet>
                        <title>Projects - Hritam Dutta</title>
                        <meta name= 'description' content= 'Listed here are my projects.' />
                        <meta property= "og:title" content="Projects - Hritam Dutta" />
                        <meta
                            property="og:description"
                            content="Listed here are my projects."
                        />
                    </Helmet>

                    <Box
                        onScroll={matchQuery ? (e) => mobileScroll(e.target.scrollLeft) : null}
                        key="projects"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, transition: { duration: 1 } }}
                        exit={{ opacity: 0, transition: { duration: 0.5 } }}
                    >
                        <LogoComponent theme= 'dark'/>
                        <SocialIcons theme= 'dark' hint= 'projects' />
                        <HomeButton />
                        
                        <Main ref= {ref} variants={container} initial='hidden' animate= 'show'>
                            {                                
                                Project.map(p => 
                                    <ProjectCard key= {p.id} data= {p}/>
                                )
                            }
                        </Main>

                        <Rotate ref= {hdlogo}>
                            <HDLogo width= {90} height= {90} fill= {DarkTheme.text}/>
                        </Rotate>

                        <BackgroundTitle text= "PROJECTS" top= '10%' left= '5%' />
                        
                    </Box>
                </MainContainer> 
            </Suspense>                       
        </ThemeProvider>
    )
}

export default ProjectPage
