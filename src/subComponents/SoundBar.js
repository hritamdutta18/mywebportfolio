import React, { useRef, useState } from 'react'
import styled, { keyframes } from 'styled-components'
import music from '../assets/audio/Lean_On_Tune.mp3'

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
        height: 0.4rem;
    }
    &>*:nth-child(2){
        animation-delay: 0.3s;
        height: 0.7rem;
    }
    &>*:nth-child(3){
        animation-delay: 0.4s;
        height: 1rem;
    }
    &>*:nth-child(4){
        animation-delay: 0.5s;
        height: 0.7rem;
    }
    &>*:nth-child(5){
        animation-delay: 0.6s;
        height: 0.4rem;
    }
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

const SoundBar = () => {

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
            <Line click= {click} />
            <Line click= {click} />
            <Line click= {click} />
            <Line click= {click} />
            <Line click= {click} />
            
            <audio src= {music} ref= {ref} loop />
        </Box>
    )
}

export default SoundBar
