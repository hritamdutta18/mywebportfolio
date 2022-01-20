import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { lightTheme } from './Themes'
import { Coding, Developer } from './AllSvgs'
import LogoComponent from '../subComponents/LogoComponent'
import HomeButton from '../subComponents/HomeButton'
import SocialIcons from '../subComponents/SocialIcons'
import ParticleComponent from '../subComponents/ParticleComponent'
import { HTML, CSS, Javascript, C, JAVA, Reactjs, Node, Express, MongoDB, VSCode, Bootstrap, Heroku } from '../subComponents/Skill-IconsSvgs'
import { Github } from './AllSvgs'


const Box= styled.div`
    background-color: ${props => props.theme.body};
    height: 100vh;
    width: 100vw;
    position: relative;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`
const Main= styled.div`
    border: 2px solid ${props => props.theme.text};
    color: ${props => props.theme.text};
    background-color: ${props => props.theme.body};
    padding: 2rem;
    width: 30vw;
    height: 60vh;
    z-index: 3;
    line-height: 1.5;
    font-family: 'Ubuntu Mono', monospace;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    &:hover{
        color: ${props => props.theme.body};
        background-color: ${props => props.theme.text};
        transition: all 0.3s ease;
    }
`
const Title= styled.h2`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: calc(0.75em + 1vw);

    ${Main}:hover &{
        &>*{
            fill: ${props => props.theme.body} !important;
            transition: all 0.3s ease;
        }        
    }

    &>*:first-child{
        margin-right: 1rem;
    }

`
const Description= styled.div`
    color: ${props => props.theme.text};
    font-size: calc(0.4em + 1vw);
    padding: 0.5rem 0;
    text-align: justify;

    ${Main}:hover &{
        color: ${props => props.theme.body};
        transition: all 0.3s ease;
    }

    strong{
        margin-bottom: 2rem;
    }

    ul{
        list-style-type: none;        
    }
    
    ul div{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    ul div li{
        display: flex;
        align-items: center;
        width: 50%;
    }
`
const LI= styled.li`
    fill: ${props => props.theme.text}; 

    ${Main}:hover &{
        fill: ${props => props.theme.body};
    }
`

const SkillsPage = () => {
    return (
        <ThemeProvider theme= {lightTheme}>
            <Box>
                <LogoComponent theme= 'light'/>
                <SocialIcons theme= 'light'/>
                <HomeButton />
                <ParticleComponent theme= 'light'/>
                <Main>
                    <Title>
                        <Developer width= {40} height= {40} />
                        MERN Developer
                    </Title>
                    <Description>   
                        I am more in love with frontend development. Challenging and creative designs excite me !<br/>
                        I have quite a bit of experience in backend development as well.                        
                    </Description>
                    <Description>
                        <strong>SKILLS</strong>
                            <ul>
                                <div>
                                    <li><HTML width= {20} height= {20}/>&nbsp;HTML</li>
                                    <li><CSS width= {20} height= {20}/>&nbsp;CSS</li>
                                </div>
                                <div>
                                    <li><Javascript width= {20} height= {20}/>&nbsp;Javascript</li>                                    
                                    <li><Bootstrap width= {20} height= {20}/>&nbsp;Bootstrap</li>
                                </div>
                                <div>                                    
                                    <li><Reactjs width= {20} height= {20}/>&nbsp;React.js</li>
                                    <li><Node width= {20} height= {20}/>&nbsp;Node.js</li>                                  
                                </div>
                                <div>                                     
                                    <LI theme= {lightTheme}><Express width= {20} height= {20}/>&nbsp;Express.js</LI>  
                                    <li><MongoDB width= {20} height= {20}/>&nbsp;MongoDB</li>
                                </div>
                            </ul>
                    </Description>
                </Main>

                <Main>
                    <Title>
                        <Coding width= {35} height= {35} />
                        Repertoire
                    </Title>
                    <Description>   
                        Being a CSE student, I am also into basic coding and Data Structures &amp; Algorithms.                    
                    </Description>
                    <Description>
                        <strong>LANGUAGES</strong>
                            <ul>
                                <div>
                                    <li><C width= {20} height= {20}/>&nbsp;C</li>
                                    <li><JAVA width= {20} height= {20}/>&nbsp;JAVA</li>
                                </div>
                            </ul>
                    </Description>
                    <Description>   
                        I do use quite a few tools for my coding errands and hosting my web apps.                   
                    </Description>
                    <Description>
                        <strong>TOOLS</strong>
                            <ul>
                                <li><VSCode width= {20} height= {20}/>&nbsp;Visual Studio Code</li>
                                <LI theme= {lightTheme}><Github width= {20} height= {20} />&nbsp;GitHub</LI>
                                <li><Heroku width= {20} height= {20}/>&nbsp;Heroku</li>
                            </ul>
                    </Description>
                </Main>
            </Box>
        </ThemeProvider>
    )
}

export default SkillsPage
