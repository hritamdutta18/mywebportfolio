import React, { useRef, useState } from 'react'
import styled, { keyframes } from 'styled-components'
import music from '../assets/audio/Lean_On_Tune.mp3'
import { mediaQueries } from '../components/Themes'

const Box= styled.div`
    display: flex;
    cursor: pointer;
    position: fixed;
    left: 8rem;
    top: 2.5rem;
    z-index: 10;
    align-items: center;

    &>*:nth-child(1){
        animation-delay: 0.2s;
        height: 0.2rem;
    }
    &>*:nth-child(2){
        animation-delay: 0.3s;
        height: 0.6rem;
    }
    &>*:nth-child(3){
        animation-delay: 0.4s;
        height: 1.1rem;
    }
    &>*:nth-child(4){
        animation-delay: 0.5s;
        height: 1.7rem;
    }
    &>*:nth-child(5){
        animation-delay: 0.6s;
        height: 1.1rem;
    }
    &>*:nth-child(6){
        animation-delay: 0.7s;
        height: 0.6rem;
    }
    &>*:nth-child(7){
        animation-delay: 0.8s;
        height: 0.2rem;
    }

    ${mediaQueries(40)`
        left: 0.5rem;
        top: 9rem;
    `}
    ${mediaQueries(30)`
        transform: scale(0.8);
    `}
`
const playsound= keyframes`
    0%{
        transform: scaleY(1);
    }
    50%{
        transform: scaleY(2);
    }
    0%{
        transform: scaleY(1);
    }
`
const Line= styled.span`
    background: ${props => props.theme.text};
    border: 1px solid ${props => props.theme.body};
    animation: ${playsound} 1s ease infinite;
    animation-play-state: ${props => props.click ? "running" : "paused"};    
    width: 2px;
    margin: 0 0.1rem;
`

const SoundBar = (props) => {

    const ref= useRef(null);
    const [click, setClick]= useState (false);

    const handleClick= () => {
        setClick(!click);

        if (!click)
            ref.current.play();
        else
            ref.current.pause();
    }

    return (
        <Box onClick={() => handleClick()}>
            <Line click= {click} theme= {props.theme} />
            <Line click= {click} theme= {props.theme} />
            <Line click= {click} theme= {props.theme} />
            <Line click= {click} theme= {props.theme} />
            <Line click= {click} theme= {props.theme} />
            <Line click= {click} theme= {props.theme} />
            <Line click= {click} theme= {props.theme} />
            
            <audio src= {music} ref= {ref} loop />
        </Box>
    )
}

export default SoundBar
