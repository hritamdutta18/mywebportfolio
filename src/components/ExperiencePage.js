import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import img from '../assets/Images/experience-wallpaper.jpeg'
import LogoComponent from '../subComponents/LogoComponent'
import HomeButton from '../subComponents/HomeButton'
import SocialIcons from '../subComponents/SocialIcons'
import { Experience } from '../data/ExpData'
import ExpComponent from './ExpComponent'
import AnchorComponent from '../subComponents/AnchorComponent'
import BackgroundTitle from '../subComponents/BackgroundTitle'


const MainContainer= styled.div`
    background-image: url(${img});
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
    width: 100vw;
    height: auto;
`
const Container= styled.div`
    background-color: ${props => `rgba(${props.theme.bodyRgba}, 0.8)`};
    width: 100%;
    height: auto;
    position: relative;
    padding-bottom: 5rem;
`
const Center= styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 10rem;
`
const Grid= styled.div`
    display: grid;
    grid-template-columns: repeat(2, minmax(calc(10rem + 15vw), 1fr));
    grid-gap: calc(2rem + 2vw);
`

const ExperiencePage = () => {

    const [numbers, setNumbers]= useState(0);

    useEffect(() => {
        let num= (window.innerHeight - 70)/30;
        setNumbers(parseInt(num));
    }, [])

    return (
        <MainContainer>
            <Container>
                <LogoComponent  />
                <HomeButton />
                <SocialIcons />
                <AnchorComponent numbers= {numbers}/>
                <Center>
                    <Grid>
                        {
                            Experience.map(exp => {
                                return <ExpComponent key= {exp.id} exp= {exp} />
                            })
                        }
                    </Grid>
                </Center>
                
                <BackgroundTitle text= "EXPERIENCE" bottom= '3rem'  right= '5rem' />

            </Container>
        </MainContainer>
    )
}

export default ExperiencePage