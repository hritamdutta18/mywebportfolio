import React, { useEffect, useRef } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { DarkTheme } from './Themes'
import LogoComponent from '../subComponents/LogoComponent'
import HomeButton from '../subComponents/HomeButton'
import SocialIcons from '../subComponents/SocialIcons'
import { Project } from '../data/ProjectData'
import ProjectCard from '../subComponents/ProjectCard'
import { HDLogo } from './AllSvgs'
import BackgroundTitle from '../subComponents/BackgroundTitle'
import { motion } from 'framer-motion'

const Box= styled.div`
    background-color: ${props => props.theme.body};
    height: 400vh;
    position: relative;
    display: flex;
    align-items: center;
`
const Main= styled(motion.ul)`
    position: fixed;
    top: 12rem;
    left: calc(10rem + 15vw);
    height: 40vh;
    display: flex;
    color: white;
`
const Rotate= styled.span`
    display: block;
    position: fixed;
    right: 2rem;
    bottom: 2rem;
    width: 90px;
    height: 90px;
    z-index: 1;
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

    useEffect(() => {

        const rotateLogo= () =>{
            ref.current.style.transform= `translateX(${-window.pageYOffset}px)`;
            return (hdlogo.current.style.transform= 'rotate('+ -window.pageYOffset + 'deg)');
        }

        window.addEventListener('scroll', rotateLogo);
        return () => window.removeEventListener('scroll', rotateLogo);

    }, [])

    return (
        <ThemeProvider theme= {DarkTheme}>
            <Box>
                <LogoComponent theme= 'dark'/>
                <SocialIcons theme= 'dark'/>
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

                <BackgroundTitle text= "PROJECTS" top= '10%' right= '20%' />
            </Box>
        </ThemeProvider>
    )
}

export default ProjectPage
