import React from 'react'
import { NavLink } from 'react-router-dom'
import { Github, Facebook, Instagram, Linkedin } from '../components/AllSvgs'
import styled from 'styled-components'
import { DarkTheme, mediaQueries } from '../components/Themes'
import { motion } from 'framer-motion'


const Icons= styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;
    bottom: 0;
    left: 2rem;
    z-index: 3;

    &>*:not(:last-child){
        margin: 0.5rem 0;
        
        ${mediaQueries(20)`
            margin: 0.3rem 0;
        `}
    }

    &>*:nth-child(1), &>*:nth-child(2), &>*:nth-child(3){
        margin: 0.3rem 0; 
        &>*{
            color: inherit;
        }
    }
    

    & svg{
        &>*{
            filter: drop-shadow(0px 2px 3px rgba(0, 0, 14, 0.2));
        }
    }

    ${mediaQueries(40)`
        left: 1rem;
        svg{
            width: 22px;
            height: 22px;
        }
    `}    
`
const Line= styled(motion.span)`
    width: 2px;
    background-color: ${props => props.color === "dark" ?  DarkTheme.text : DarkTheme.body};
    transition: background-color 1s ease;
`

const SocialIcons = (props) => {

    return (
        <Icons>  
            <motion.div 
                initial= {{ transform: "scale(0)" }}
                animate= {{ scale: [0,1,1.5,1] }}
                transition={{ type: 'spring', duration: 1, delay: 1 }}
            >
                <NavLink target='_blank' to= {{pathname: "https://www.facebook.com/hritamdutta10"}}>
                    <Facebook width= {27} height= {27} fill= {props.theme === "dark" ?  DarkTheme.text : DarkTheme.body} />
                </NavLink>
            </motion.div>

            <motion.div 
                initial= {{ transform: "scale(0)" }}
                animate= {{ scale: [0,1,1.5,1] }}
                transition={{ type: 'spring', duration: 1, delay: 1.2 }}
            >
                <NavLink target='_blank' to= {{pathname: "https://www.github.com/hritamdutta18"}}>
                    <Github width= {27} height= {27} fill={props.theme === "dark" ?  DarkTheme.text : DarkTheme.body} />
                </NavLink>
            </motion.div>

            <motion.div 
                initial= {{ transform: "scale(0)" }}
                animate= {{ scale: [0,1,1.5,1] }}
                transition={{ type: 'spring', duration: 1, delay: 1.4 }}
            >
                <NavLink target='_blank' to= {{pathname: "https://www.linkedin.com/in/hritam-dutta-6713581b6"}}>
                    <Linkedin width= {27} height= {27} fill={props.theme === "dark" ?  DarkTheme.text : DarkTheme.body} />
                </NavLink>
            </motion.div>

            <motion.div 
                initial= {{ transform: "scale(0)" }}
                animate= {{ scale: [0,1,1.5,1] }}
                transition={{ type: 'spring', duration: 1, delay: 1.6 }}
            >
                <NavLink target='_blank' to= {{pathname: "https://www.instagram.com/_hritam_dutta_"}}>
                    <Instagram width= {27} height= {27} fill={props.theme === "dark" ?  DarkTheme.text : DarkTheme.body} />
                </NavLink>
            </motion.div>

            <Line 
                color= {props.theme}
                initial= {{ height: 0 }}
                animate= {{ height: props.hint === 'projects' ? '1rem' : '4.5rem' }}
                transition= {{ type: 'spring', duration: 1, delay: 0.8 }}            
            />
        </Icons>
    )
}

export default SocialIcons