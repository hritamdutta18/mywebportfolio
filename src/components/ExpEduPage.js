import React, { lazy, Suspense, useRef } from 'react'
import styled from 'styled-components'
import img2 from '../assets/Images/experience-wallpaper.jpeg'
import img1 from '../assets/Images/education-wallpaper.jpg'
import { Experience } from '../data/ExpData'
import { Education } from '../data/EducationData'
import ExpComponent from './ExpComponent'
import EduComponent from './EduComponent'
import { motion } from 'framer-motion'
import { mediaQueries } from "./Themes";
import PreLoader from '../subComponents/PreLoader'

// Importing Components using React.lazy
const LogoComponent= lazy (() => import ('../subComponents/LogoComponent'));
const HomeButton= lazy (() => import ('../subComponents/HomeButton'));
const SocialIcons= lazy (() => import ('../subComponents/SocialIcons'));
const BackgroundTitle=  lazy (() => import ('../subComponents/BackgroundTitle'));


const MainContainer= styled(motion.div)`
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
    width: 100vw;
    height: 100vh;
    position: relative;
    scroll-snap-type: y mandatory;    
    overflow-y: scroll;

    &>:nth-child(1){
        background-image: url(${img1});
        z-index: 1;
    }
    &>:nth-child(2){
        background-image: url(${img2});
    }
    &>::-webkit-scrollbar {
        display: none;
    }
`
const EducationContainer= styled.div`
    background-color: ${props => `rgba(${props.theme.bodyRgba}, 0.8)`};
    width: 100%;
    height: 100vh;
    position: relative;
    overflow-y: scroll;    
    scroll-snap-align: start;
    background-blend-mode: lighten;

    .center-edu{
        padding-top: 3rem;

        ${mediaQueries(60)`
            padding-top: 0; 
        `};
    }
`
const ExperienceContainer= styled.div`
    background-color: ${props => `rgba(${props.theme.bodyRgba}, 0.8)`};
    width: 100%;
    height: 100vh;
    position: relative;
    padding-bottom: 5rem;
    overflow-y: scroll;    
    scroll-snap-align: start;
    background-blend-mode: lighten;

    .center-exp{
        padding-top: 10rem;

        ${mediaQueries(60)`
            padding-top: 0; 
        `};
    }
`
const Center= styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 100%;
    height: 100%;

    ${mediaQueries(30)`
        padding-top: 7rem !important; 
    `};
`
const Grid= styled.div`
    display: grid;
    grid-template-columns: repeat(3, minmax(calc(8rem + 8vw), 1fr));
    grid-gap: calc(0.5rem + 2vw);
    position: absolute;    

    ${mediaQueries(60)`
        grid-template-columns: repeat(2, minmax(calc(11rem + 11vw), 1fr));   
    `};    
    ${mediaQueries(50)`
        grid-template-columns: 100%;   
    `};
    ${mediaQueries(30)`
        top: 7rem;
        padding-bottom: 5rem; 
    `};
`
const BGContainer= styled.div`
    position: absolute;    
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


const ExpEduPage = () => {

    const scrollRef = useRef();

    const onScroll = () => {        
        if (scrollRef.current) {
            var { scrollTop, scrollHeight } = scrollRef.current;

            if (scrollTop >= scrollHeight/3) {
                    setTimeout (5000);
                    document.getElementById('edu-container').style.zIndex= '0';
                    document.getElementById('exp-container').style.zIndex= '1';                
            }
            else{
                setTimeout (5000);
                document.getElementById('edu-container').style.zIndex= '1';
                document.getElementById('exp-container').style.zIndex= '0';
            }
        }
    };
    
    const matchQuery = window.matchMedia("(max-width: 30em)").matches;

    return (        
        <Suspense fallback= {<PreLoader />}>
            <MainContainer 
                variants={container} 
                initial= 'hidden' 
                animate= 'show' 
                exit= {{
                    opacity: 0, transition: { duration: 0.5 }
                }}
                onScroll={() => onScroll()}
                ref={scrollRef}
            >     

                <EducationContainer id='edu-container'>    
                    <LogoComponent  />
                    <HomeButton />
                    <SocialIcons />

                    <Center className='center-edu'>
                        <Grid>
                            {
                                Education.map(exp => {
                                    return <EduComponent key= {exp.id} exp= {exp} />
                                })
                            }
                        </Grid>
                    </Center>
                    
                    <BGContainer>
                        <BackgroundTitle text= "EDUCATION" top= '5rem' left= { matchQuery ? '3rem' : '5rem' } />
                    </BGContainer>

                </EducationContainer>

                <ExperienceContainer id='exp-container'>
                    <LogoComponent  />
                    <HomeButton />
                    <SocialIcons />

                    <Center className='center-exp'>
                        <Grid>
                            {
                                Experience.map(exp => {
                                    return <ExpComponent key= {exp.id} exp= {exp} />
                                })
                            }
                        </Grid>
                    </Center>

                    <BGContainer >
                        <BackgroundTitle text= "EXPERIENCE" bottom= '2rem' right= { matchQuery ? '1.5rem' : '5rem' } />
                    </BGContainer>
                    
                </ExperienceContainer>
                
            </MainContainer>
        </Suspense>
        
    )
}

export default ExpEduPage