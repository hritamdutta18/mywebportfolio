import React from 'react'
import styled, { keyframes } from "styled-components"
import { HDLogo } from '../components/AllSvgs';


const heartbeatLogo = keyframes`
    0%{
        transform: scale(1);
    }
    50%{
        transform: scale(1.25);
    }
    0%{
        transform: scale(1);
    }
`
const Box = styled.div`
    width: 100vw;
    height: 100vh;
    background: ${(props) => props.theme.text};
    display: flex;
    justify-content: center;
    align-items: center;

    &>:first-child{
        fill: ${(props) => props.theme.body};
        animation: ${heartbeatLogo} infinite 2s ease;       
    }
`

const PreLoader = () => {
    
    return (
        <Box>
            <HDLogo width= {200} height= {200} />
        </Box>
    )
}

export default PreLoader