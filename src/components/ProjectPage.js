import React, { useEffect, useRef } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { DarkTheme } from './Themes'
import LogoComponent from '../subComponents/LogoComponent'
import HomeButton from '../subComponents/HomeButton'
import SocialIcons from '../subComponents/SocialIcons'
import { Project } from '../data/ProjectData'
import ProjectCard from '../subComponents/ProjectCard'
import { HDLogo } from './AllSvgs'


const Box= styled.div`
    background-color: ${props => props.theme.body};
    height: 400vh;
    position: relative;
    overflow: hidden;
`
const Main= styled.ul`
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

const ProjectPage = () => {

    const ref= useRef(null);
    const hdlogo= useRef(null);

    useEffect(() => {

        const rotateLogo= () =>{
            ref.current.style.transform= `translateX(${-window.pageYOffset}px)`;
            hdlogo.current.style.transform= `rotate(`+ -window.pageYOffset + 'deg)';
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
                
                <Main ref= {ref}>
                    {
                        Project.map(p => 
                            <ProjectCard key= {p.id} data= {p}/>
                        )
                    }
                </Main>

                <Rotate ref= {hdlogo}>
                    <HDLogo width= {90} height= {90} fill= {DarkTheme.text}/>
                </Rotate>
            </Box>
        </ThemeProvider>
    )
}

export default ProjectPage
