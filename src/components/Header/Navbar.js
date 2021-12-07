import React, { useState} from 'react';
import { useDispatch } from 'react-redux';

import { SidebarData } from './SidebarData'
import { searchMovies } from '../../redux/slices/favouriteMovies'

import {
    MenuItemWrapper,
    MenuItem,
    SearchBarForm,
    MenuComponent,
    Input,
    Logo,
    Img,
    LogoItem,
} from './Navbar.styled';
import logo from '../../assets/logo/tmovie.png';



function Navbar() {

    const [searchTerm, setSearchTerm] = useState('');

    const dispatch = useDispatch();

    const onChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const loadFilms = (searchTerm) => {
        dispatch(searchMovies(searchTerm))
    }

    const handleOnSubmit =  (e) => {
        e.preventDefault();
        
        if (searchTerm) {
            loadFilms(searchTerm)
            setSearchTerm('')
        };    
    };

   
    return (
        <MenuComponent>
            <Logo to = '/'>      
                <Img src={logo} alt="" />
                <LogoItem>MovieFlex</LogoItem>
            </Logo>

            <SearchBarForm onSubmit={handleOnSubmit}>
                <Input
                    type='search'
                    placeholder='Search . . .'
                    value={searchTerm}
                    onChange = {onChange}
                />
            </SearchBarForm>

            <MenuItemWrapper>
                {SidebarData.map(({ title, path }, index) => {
                    return (
                        <MenuItem key={index} to={path}>{title}</MenuItem>
                    );
                })}
            </MenuItemWrapper>
        </MenuComponent>
    );
};

export default Navbar;
