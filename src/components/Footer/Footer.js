import React from 'react';

import {
    FooterComponent,
    LinkContainer,
    LinkMenu,
    Icons,
    Logo,
    Img,
    LogoItem
} from './Footer.styled.js';
import logo from '../../assets/logo/tmovie.png';
import { AiFillTwitterCircle } from "react-icons/ai";
import { RiFacebookCircleFill } from "react-icons/ri";
import { FaTelegram } from "react-icons/fa";


const Footer = () => {
    return (
        <FooterComponent >
            <Logo to = '/'>      
                <Img src={logo} alt="" />
                <LogoItem>MovieFlex</LogoItem>
            </Logo>

            <LinkContainer >          
                <LinkMenu to="/">Home</LinkMenu>
                <LinkMenu to="/">Contact us</LinkMenu>
                <LinkMenu to="/">Term of services</LinkMenu>
                <LinkMenu to="/">About us</LinkMenu>
                <LinkMenu to="/">Pravacy policy</LinkMenu>          
            </LinkContainer>

            <Icons>
                <AiFillTwitterCircle style={{ color: 'white' }} size={40} />
                <RiFacebookCircleFill style={{ color: 'white' }} size={43}/>
                <FaTelegram  style={{ color: 'white' }} size={38}/>
            </Icons>
        </FooterComponent>
    );
}

export default Footer;