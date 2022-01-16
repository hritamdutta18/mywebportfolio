import React from 'react'
import { NavLink } from 'react-router-dom'
import { Github, Gmail, Instagram, Linkedin } from '../components/AllSvgs'
import styled from 'styled-components'
import { DarkTheme } from '../components/Themes'

const Icons= styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;
    bottom: 0;
    left: 2rem;
    z-index: 3;

    &>*::not(:last-child){
        margin: 0 .5rem 0;
    }
`

const Line= styled.span`
    width: 3px;
    height: 8rem;
    background-color: ${props => props.color === "dark" ?  DarkTheme.text : DarkTheme.body};
    transition: background-color 1s ease;
`

const SocialIcons = (props) => {
    return (
        <Icons>            
            <div style={{margin: '0.3rem 0'}}>
                <NavLink style={{color: 'inherit'}} target='_blank' to= {{pathname: "mailto:hritamloyola10@gmail.com"}}>
                    <Gmail width= {27} height= {27} fill= {props.theme === "dark" ?  DarkTheme.text : DarkTheme.body} />
                </NavLink>
            </div>
            <div style={{margin: '0.3rem 0'}}>
                <NavLink style={{color: 'inherit'}} target='_blank' to= {{pathname: "https://github.com/hritamdutta18/"}}>
                    <Github width= {27} height= {27} fill={props.theme === "dark" ?  DarkTheme.text : DarkTheme.body} />
                </NavLink>
            </div>
            <div style={{margin: '0.3rem 0'}}>
                <NavLink style={{color: 'inherit'}} target='_blank' to= {{pathname: "https://www.linkedin.com/in/hritam-dutta-6713581b6"}}>
                    <Linkedin width= {27} height= {27} fill={props.theme === "dark" ?  DarkTheme.text : DarkTheme.body} />
                </NavLink>
            </div>
            <div style={{margin: '0.3rem 0'}}>
                <NavLink style={{color: 'inherit'}} target='_blank' to= {{pathname: "https://www.instagram.com/_hritam_dutta_"}}>
                    <Instagram width= {27} height= {27} fill={props.theme === "dark" ?  DarkTheme.text : DarkTheme.body} />
                </NavLink>
            </div>
            <Line color= {props.theme}/>
        </Icons>
    )
}

export default SocialIcons
