import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';


export const MenuItem = styled(Link)`
    text-decoration: none;
    color: white;
    font-size: 18px;
    cursor: pointer;

    &:hover{
        color: #F56A79;
    }
`;

export const MenuItemWrapper = styled.div`
    display: flex; 
    gap: 40px; 
`;

export const SearchBarForm = styled.form`
    display: flex;
    align-items: center;
`;

export const MenuComponent = styled.div`
    min-height: 65px;
    background-color: #0F1115;
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: center;
    gap: 350px;
    flex: 0 0 auto;
`;

export const Input = styled.input`
    background-color: #19181F;
    border: none;
    font-size: 16px;
    border-radius: 10px;
    padding: 10px;
    color: white;

    &:focus{
        outline: none;
    }
`;

export const Logo = styled(Link)`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    text-decoration: none;
`;

export const Img = styled.img`
    width: 25px;
    height: 25px;
`;

export const LogoItem = styled.h2`
    color: #8AC43F;
    text-decoration: none;
    font-size: 18;
`;