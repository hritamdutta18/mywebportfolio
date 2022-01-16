import React from 'react'
import styled from 'styled-components'
import Me from '../assets/Images/profile-avatar.png'
import { motion } from 'framer-motion'


const Box= styled(motion.div)`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 65vw;
    height: 55vh;
    display: flex;

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
`

const SubBox= styled.div`
    width: 50%;
    position: relative;
    display: flex;

    .avatar{
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translate(-50%, 0%);
        width: 110%;
        height: auto;
    }
`

const Text= styled.div`
    font-size: calc(1em + 1.3vw);
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
    }
`


const Intro = () => {
    return (
        <Box
            initial= {{height: 0}}
            animate= {{height: '55vh'}}
            transition= {{ type: 'spring', duration: 2, delay: 1}}
        >              
            <SubBox >
                <motion.div
                    initial= {{opacity: 0}}
                    animate= {{opacity: 1}}
                    transition= {{ duration: 1, delay: 2}}
                >
                    <img className= "avatar" src= {Me} alt= "Profile Avatar" />
                </motion.div>
            </SubBox>   

            <SubBox>
                <Text>
                    <h1>Hola !</h1>
                    <h3>I'm Hritam Dutta.</h3>
                    <h6>I'm an engineering student at Vellore Institute of Technology, Vellore. 
                        I am primarily a MERN Developer who loves coding anything.</h6>
                </Text>
            </SubBox>       
        </Box>
    )
}

export default Intro
