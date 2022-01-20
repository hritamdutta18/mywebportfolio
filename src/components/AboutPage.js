import React from 'react'
import styled, { keyframes, ThemeProvider } from 'styled-components'
import { DarkTheme } from './Themes'
import LogoComponent from '../subComponents/LogoComponent'
import HomeButton from '../subComponents/HomeButton'
import SocialIcons from '../subComponents/SocialIcons'
import ParticleComponent from '../subComponents/ParticleComponent'
import rocket from '../assets/Images/rocket.png'
import BackgroundTitle from '../subComponents/BackgroundTitle'


const Box= styled.div`
    background-color: ${props => props.theme.body};
    height: 100vh;
    width: 100vw;
    position: relative;
    overflow: hidden;
`
// Alternate Animation (if required)

// const float= keyframes`
//     0%{
//         transform: translateY(-10px);
//     }
//     50%{
//         transform: translate(15px, 15px);
//     }
//     100%{
//         transform: translateY(-10px);
//     }
// `

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
const Rocket= styled.div`
    position: absolute;
    width: 30vw;
    animation: ${float} 100s infinite linear;

    img{
        width: 100%;
        height: auto;
        transform: rotate(20deg);
    }
`
const Main= styled.div`
    border: 2px solid ${props => props.theme.text};
    color: ${props => props.theme.text};
    padding: 2.5rem;
    width: 60vw;
    height: 55vh;
    z-index: 3;
    line-height: 1.5;

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    font-size: calc(0.7rem + 1vw);
    font-family: 'Ubuntu Mono', monospace;
    font-style: italic;
    backdrop-filter: blur(3px);
    text-align: justify;
    
    position: absolute;
    left: 18%;
    top: 10rem;

    div{
        align-self: end;
    }
`

const AboutPage = () => {
    return (
        <ThemeProvider theme= {DarkTheme}>
            <Box>
                <LogoComponent theme= 'dark'/>
                <SocialIcons theme= 'dark'/>
                <HomeButton />
                <ParticleComponent theme= 'dark'/>

                <Rocket>
                    <img src= {rocket} alt= "Rocket" />
                </Rocket>   

                <Main>
                    Currently, I am a B.Tech student at VIT Vellore pursuing Computer Science &amp; Engineering with specialization in IoT.   
                    I am a full-stack web developer specializing in MERN Stack.
                    I am also interested in software development with proficiency in C and JAVA.
                    <br/><br/>
                    I am an avid badminton player, a FIFA fanatic and also a cricket enthusiast. Music is my escape buddy.
                    <br/> <br/>
                    <div>                        
                        Wanna have some random discussions ?<br/>
                        Feel free to reach out to me !
                    </div>
                </Main>

                <BackgroundTitle text= "ABOUT" bottom= '5%'  right= '5%' />

            </Box>
        </ThemeProvider>
    )
}

export default AboutPage
