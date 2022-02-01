import React, { lazy, Suspense } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { lightTheme, mediaQueries} from './Themes'
import { Coding, Developer, Github } from './AllSvgs'
import { HTML, CSS, Javascript, C, JAVA, Reactjs, Node, Express, MongoDB, VSCode, Bootstrap, Heroku, Vercel } from '../subComponents/Skill-IconsSvgs'
import PreLoader from '../subComponents/PreLoader'

// Importing Components using React.lazy
const LogoComponent= lazy (() => import ('../subComponents/LogoComponent'));
const HomeButton= lazy (() => import ('../subComponents/HomeButton'));
const SocialIcons= lazy (() => import ('../subComponents/SocialIcons'));
const BackgroundTitle=  lazy (() => import ('../subComponents/BackgroundTitle'));
const ParticleComponent= lazy (() => import ('../subComponents/ParticleComponent')) 


const Box= styled.div`
    background-color: ${props => props.theme.body};
    height: 100vh;
    width: 100vw;
    position: relative;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    ${mediaQueries(60)`
        flex-direction: column;
        padding: 8rem 0 4rem 0;
        height: auto;

        &>*:nth-child(5){
            margin-bottom: 5rem;
        }
    `}
    ${mediaQueries(30)`
        &>*:nth-child(5){
            margin-bottom: 4rem;
        }
        &>*:nth-child(7){
            font-size: calc(4rem + 4vw);
        }
    `}
`
const Main= styled.div`
    position: relative;
    top: 2rem;
    border: 2px solid ${props => props.theme.text};
    color: ${props => props.theme.text};
    background-color: ${props => `rgba(${props.theme.bodyRgba}, 0.4)`};
    padding: 2rem;
    width: 30vw;
    height: 65vh;
    z-index: 2;
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

    ${mediaQueries(60)`
        height: 50vh;
        width: 50vw;
    `}
    ${mediaQueries(55)`
        height: max-content;
        width: 50vw;
    `}
    ${mediaQueries(50)`
        width: 55vw;
        height: max-content;
        padding: 1.5rem;
    `}
`
const Title= styled.h2`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: calc(0.7em + 1vw);

    ${Main}:hover &{
        &>*{
            fill: ${props => props.theme.body} !important;
            transition: all 0.3s ease;
        }        
    }

    &>*:first-child{
        margin-right: 1rem;
    }

    ${mediaQueries(60)`
        font-size:calc(0.8em + 1vw);
    `}
    ${mediaQueries(50)`
        font-size: calc(1em + 2vw);
         margin-bottom: 1rem;
    `}
    ${mediaQueries(30)`
        font-size:calc(1em + 1vw);
    `};
    ${mediaQueries(25)`
        font-size:calc(0.8em + 1vw);
    `};
`
const Description= styled.div`
    color: ${props => props.theme.text};
    font-size: calc(0.6em + 1vw);
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

    ${mediaQueries(50)`
        font-size: calc(0.8em + 1vw);
    `}
    ${mediaQueries(30)`
        font-size:calc(0.7em + 1vw);
    `}
    ${mediaQueries(25)`
        font-size:calc(0.5em + 1vw);
    `}
`
const LI= styled.li`
    fill: ${props => props.theme.text}; 

    ${Main}:hover &{
        fill: ${props => props.theme.body};
    }
`

const SkillsPage = () => {

    document.title= "Skills - Hritam Dutta"

    const matchQuery = window.matchMedia("(max-width: 30em)").matches;

    return (
        <ThemeProvider theme= {lightTheme}>
            <Suspense fallback= {<PreLoader />}>
                <Box>
                    <LogoComponent theme= 'light'/>
                    <SocialIcons theme= 'light'/>
                    <HomeButton />
                    <ParticleComponent theme= 'light'/>

                    <Main>
                        <Title>
                            <Developer width= {matchQuery ? 35 : 40} height= {matchQuery ? 35 : 40} />
                            MERN Developer
                        </Title>
                        <Description>   
                            I am more in love with frontend development. Challenging and creative designs excite me !<br/>
                            I have a bit of experience in backend development as well.                        
                        </Description>
                        <Description>
                            <strong>SKILLS</strong>
                                <ul>
                                    <div>
                                        <li><HTML width= {matchQuery ? 15 : 20} height= {matchQuery ? 15 : 20}/>&nbsp;HTML</li>
                                        <li><CSS width= {matchQuery ? 15 : 20} height= {matchQuery ? 15 : 20}/>&nbsp;CSS</li>
                                    </div>
                                    <div>
                                        <li><Javascript width= {matchQuery ? 15 : 20} height= {matchQuery ? 15 : 20}/>&nbsp;Javascript</li>                                    
                                        <li><Bootstrap width= {matchQuery ? 15 : 20} height= {matchQuery ? 15 : 20}/>&nbsp;Bootstrap</li>
                                    </div>
                                    <div>                                    
                                        <li><Reactjs width= {matchQuery ? 15 : 20} height= {matchQuery ? 15 : 20}/>&nbsp;React</li>
                                        <li><Node width= {matchQuery ? 15 : 20} height= {matchQuery ? 15 : 20}/>&nbsp;Node</li>                                  
                                    </div>
                                    <div>                                     
                                        <LI theme= {lightTheme}><Express width= {matchQuery ? 15 : 20} height= {matchQuery ? 15 : 20}/>&nbsp;Express</LI>  
                                        <li><MongoDB width= {matchQuery ? 15 : 20} height= {matchQuery ? 15 : 20}/>&nbsp;MongoDB</li>
                                    </div>
                                </ul>
                        </Description>
                    </Main>

                    <Main>
                        <Title>
                            <Coding width= {matchQuery ? 30 : 35} height= {matchQuery ? 30 : 35} />
                            Repertoire
                        </Title>
                        <Description>   
                            I am also into basic coding and Data Structures &amp; Algorithms. I do use quite a few tools for my coding and development errands.                   
                        </Description>
                        <Description>
                            <strong>LANGUAGES</strong>
                                <ul>
                                    <div>
                                        <li><C width= {matchQuery ? 15 : 20} height= {matchQuery ? 15 : 20}/>&nbsp;C</li>
                                        <li><JAVA width= {matchQuery ? 15 : 20} height= {matchQuery ? 15 : 20}/>&nbsp;JAVA</li>
                                    </div>
                                </ul>
                        </Description>
                        <Description>
                            <strong>TOOLS</strong>
                                <ul>
                                    <div>
                                        <li><VSCode width= {matchQuery ? 15 : 20} height= {matchQuery ? 15 : 20}/>&nbsp;VS Code</li>
                                        <LI theme= {lightTheme}><Github width= {matchQuery ? 15 : 20} height= {matchQuery ? 15 : 20} />&nbsp;GitHub</LI>
                                    </div>
                                    
                                    <div>
                                        <li><Heroku width= {matchQuery ? 15 : 20} height= {matchQuery ? 15 : 20}/>&nbsp;Heroku</li>
                                        <LI theme= {lightTheme}><Vercel width= {matchQuery ? 15 : 20} height= {matchQuery ? 15 : 20}/>&nbsp;Vercel</LI>
                                    </div>
                                </ul>
                        </Description>
                    </Main>
                    
                    <BackgroundTitle text= "SKILLS" top= {matchQuery ? '55%' : '80%'}  left= {matchQuery ? '30%' : '20%'} />

                </Box>
            </Suspense>            
        </ThemeProvider>
    )
}

export default SkillsPage
