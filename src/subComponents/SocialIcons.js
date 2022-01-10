import React from 'react'
import { NavLink } from 'react-router-dom'
import { Github, Gmail, Instagram, Linkedin } from '../components/AllSvgs'
import styled from 'styled-components'

const Icons= styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;
    bottom: 0;
    left: 2.5rem;
    z-index: 3;

    &>*::not(:last-child){
        margin: 0 .5rem 0;
    }
`

const Line= styled.span`
    width: 2px;
    height: 8rem;
    background-color: ${props => props.theme.text};
`

const SocialIcons = () => {
    return (
        <Icons>            
            <div style={{margin: '0.4rem 0'}}>
                <NavLink style={{color: 'inherit'}} target='_blank' to= {{pathname: "mailto:hritamloyola10@gmail.com"}}>
                    <Gmail width= {30} height= {30} />
                </NavLink>
            </div>
            <div style={{margin: '0.4rem 0'}}>
                <NavLink style={{color: 'inherit'}} target='_blank' to= {{pathname: "https://github.com/hritamdutta18/"}}>
                    <Github width= {30} height= {30} />
                </NavLink>
            </div>
            <div style={{margin: '0.4rem 0'}}>
                <NavLink style={{color: 'inherit'}} target='_blank' to= {{pathname: "https://www.linkedin.com/in/hritam-dutta-6713581b6"}}>
                    <Linkedin width= {30} height= {30} />
                </NavLink>
            </div>
            <div style={{margin: '0.4rem 0'}}>
                <NavLink style={{color: 'inherit'}} target='_blank' to= {{pathname: "https://www.instagram.com/_hritam_dutta_"}}>
                    <Instagram width= {30} height= {30} />
                </NavLink>
            </div>
            <Line />
        </Icons>
    )
}

export default SocialIcons
