import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import HomeButton from '../subComponents/HomeButton'
import LogoComponent from '../subComponents/LogoComponent'
import SocialIcons from '../subComponents/SocialIcons'

const MainContainer= styled.div`
    background: ${props => props.theme.body};
    width: 100vw;
    height: 100vh;
    overflow-x: hidden;
    position: relative;

    h2, h3, h4, h5, h6 {
        font-family: 'Karla', sans-serif;
        font-weight: 500;
    }
`

const Container= styled.div`
    padding: 2rem;
`

const Contact= styled(NavLink)`
    color: ${props => props.theme.text};
    position: absolute;
    top: 2.5rem;
    right: calc(1rem + 2vw);
    text-decoration: none;
    z-index: 1;
`

const Main = () => {
    return (
        <MainContainer>
            <Container>
                <HomeButton />
                <LogoComponent />
                <SocialIcons />

                <Contact target= "_blank" to= {{pathname: "mailto:hritamloyola10@gmail.com"}}>
                    <h3>
                        Email me !
                    </h3>
                </Contact>

            </Container>
        </MainContainer>
    )
}

export default Main
