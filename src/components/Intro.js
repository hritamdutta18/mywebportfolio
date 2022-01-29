import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import myAvatar from '../assets/Images/profile-avatar.png'
import { motion } from 'framer-motion'
import { mediaQueries } from "./Themes"


const Box= styled(motion.div)`
    position: absolute;
    left: 50%;
    top: 50%;
    right: 0;
    transform: translate(-50%, -50%);
    width: 65vw;
    // height: 55vh;
    display: flex;

    // For 2 color border of the Intro Box
    background: linear-gradient(to right,
        ${props => props.theme.body} 50%,
        ${props => props.theme.text} 50%) bottom,
        linear-gradient(to right,
        ${props => props.theme.body} 50%,
        ${props => props.theme.text} 50%) top;

    background-repeat: no-repeat;
    background-size: 100% 2px;
    z-index: 1;
    border-left: 2px solid ${props => props.theme.body};
    border-right: 2px solid ${props => props.theme.text};

    ${mediaQueries(1200)`
        width: 65vw;
    `}
    ${mediaQueries(60)`
        width: 70vw;
    `}
    ${mediaQueries(50)`
        width: 50vw;
        flex-direction: column;
        justify-content: space-between;        
        background-size: 100% 2px;       
    `}

    @media only screen and (max-width: 50em){  
        background: none;
        border: none;      
        border-bottom: 2px solid ${(props) => props.theme.text};
        border-top: 2px solid ${(props) => props.theme.body};
        background-image: linear-gradient(
            ${(props) => props.theme.body} 50%,
            ${(props) => props.theme.text} 50%
        ),
        linear-gradient(
            ${(props) => props.theme.body} 50%,
            ${(props) => props.theme.text} 50%
        );
        background-size: 2px 100%;         
        background-position: 0 0, 100% 0;
        background-repeat: no-repeat;
    }

    ${mediaQueries(40)`
        width: 60vw;
    `}
    ${mediaQueries(30)`
        width: 70vw;
    `}
    ${mediaQueries(20)`
        width: 60vw;
    `}
`

const SubBox= styled.div`
    width: 50%;
    position: relative;
    display: flex;

    .avatar{
        position: absolute;
        bottom: -15px;
        left: 50%;
        transform: translate(-50%, 0%);
        width: 110%;
        height: auto;

        ${mediaQueries(50)`   
            width: 75%; 
        `}
        ${mediaQueries(40)`  
            width: 85%; 
        `}
        ${mediaQueries(30)`   
            width: 100%; 
        `}
        ${mediaQueries(20)`
            width: 85%; 
        `}
    }

    ${mediaQueries(50)`
        width: 100%;
        height: 50%;  
    `}
`

const Text= styled(motion.div)`
    font-size: calc(1em + 1.4vw);
    color: ${props => props.theme.text};
    padding: 2rem;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    &>*:last-child{
        color: ${props =>`rgba(${props.theme.text}, 0.6)`};
        font-size: calc (0.5rem + 1.5vw);
        font-weight: 300;

        ${mediaQueries(40)`
            font-size: calc(0.5rem + 1vw);
        `}
    }

    ${mediaQueries(40)`
        font-size: calc(1rem + 1.4vw);
    `}
    ${mediaQueries(20)`            
        padding: 1rem;
    `}
`


const Intro = () => {

    const [boxheight, setBoxHeight] = useState("55vh");

    useEffect(() => {

        if (window.matchMedia("(max-width: 50em)").matches) 
            setBoxHeight("70vh");
    
        if (window.matchMedia("(max-width: 20em)").matches) 
            setBoxHeight("60vh");
        
    }, []);


    return (
        <Box
            initial= {{height: 0}}
            animate= {{height: boxheight}}
            transition= {{ type: 'spring', duration: 2, delay: 1}}
        >              
            <SubBox >
                <motion.div
                    initial= {{opacity: 0}}
                    animate= {{opacity: 1}}
                    transition= {{ duration: 1, delay: 2}}
                >
                    <img className= "avatar" src= {myAvatar} alt= "Profile Avatar" />
                </motion.div>
            </SubBox>   

            <SubBox>
                <Text
                    initial= {{opacity: 0}}
                    animate= {{opacity: 1}}
                    transition= {{ duration: 1, delay: 1}}
                >
                    <h1>Hola !</h1>
                    <h3>I'm Hritam Dutta.</h3>
                    <h6>I am primarily a MERN Developer who loves coding anything.</h6>
                </Text>
            </SubBox>       
        </Box>
    )
}

export default Intro
