import styled from 'styled-components/macro'

import { Link } from 'react-router-dom';


export const FooterComponent = styled.div`
    background-color: #0F1115;
    min-height: 170px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 180px;
`;

export const LinkContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 30px;
`;

export const LinkMenu = styled(Link)`
    text-decoration: none;
    color: #ffff;
    font-size: 18px;

    &:hover{
        color: #F56A79;
    }
`;

export const Icons = styled.div`
    display: flex;
    gap: 15px ;
    align-items: center;
`;

export const Logo = styled(Link)`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    text-decoration: none;
`;

export const Img = styled.img`
    width: 45px;
    height: 45px;

`;

export const LogoItem = styled.h2`
    color: #8AC43F;
    text-decoration: none;
    font-size: 18;
`;