import React, { useRef } from 'react'
import styled from 'styled-components'
import img2 from '../assets/Images/experience-wallpaper.jpeg'
import img1 from '../assets/Images/education-wallpaper.jpg'
import LogoComponent from '../subComponents/LogoComponent'
import HomeButton from '../subComponents/HomeButton'
import SocialIcons from '../subComponents/SocialIcons'
import { Experience } from '../data/ExpData'
import { Education } from '../data/EducationData'
import ExpComponent from './ExpComponent'
import EduComponent from './EduComponent'
import BackgroundTitle from '../subComponents/BackgroundTitle'
import { motion } from 'framer-motion'


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
const Container1= styled.div`
    background-color: ${props => `rgba(${props.theme.bodyRgba}, 0.8)`};
    width: 100%;
    height: 100vh;
    position: relative;
    padding-bottom: 5rem;
    overflow-y: scroll;    
    scroll-snap-align: start;
    background-blend-mode: lighten;

    .center-edu{
        padding-top: 3rem;
    }
`
const Container2= styled.div`
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
    }
`
const Center= styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 100%;
    height: 100%;
`
const Grid= styled.div`
    display: grid;
    grid-template-columns: repeat(3, minmax(calc(8rem + 8vw), 1fr));
    grid-gap: calc(0.5rem + 2vw);
    position: absolute;    
`
const BGContainer= styled.div`
    position: absolute;    
    top: ${props => props.top};
    bottom: ${props => props.bottom};
    left: ${props => props.left};
    right: ${props => props.top};
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


const ExperiencePage = () => {

    const scrollRef = useRef();

    const onScroll = () => {        
        if (scrollRef.current) {
            var { scrollTop, scrollHeight } = scrollRef.current;

            if (scrollTop >= scrollHeight/3) {
                    setTimeout (5000);
                    document.getElementById('cont-1').style.zIndex= '0';
                    document.getElementById('cont-2').style.zIndex= '1';                
            }
            else{
                setTimeout (5000);
                document.getElementById('cont-1').style.zIndex= '1';
                document.getElementById('cont-2').style.zIndex= '0';
            }
        }
    };
    

    return (

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

            <Container1 id='cont-1'>    
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
                
                <BGContainer top= '5rem' left= '5rem'>
                    <BackgroundTitle text= "EDUCATION" top= '5rem' left= '5rem' />
                </BGContainer>

            </Container1>

            <Container2 id='cont-2'>
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

                <BGContainer bottom= '2rem' right= '5rem' >
                    <BackgroundTitle text= "EXPERIENCE" bottom= '2rem' right= '5rem' />
                </BGContainer>
                
            </Container2>
            
        </MainContainer>
    )
}

export default ExperiencePage