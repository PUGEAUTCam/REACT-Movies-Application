import React from 'react';
import { NavLink } from 'react-router-dom';
import { ContainerNavigation, ImgNavigation, TitleNavigation } from './style';
import logo from "../../assets/images/camera2.jpg"
import SearchBar from '../searchBar';

const Navigation = () => {
    return (
        <div>
            <NavLink to='/' style={{ textDecoration: 'none' }}>
                <ContainerNavigation>
                    <TitleNavigation>Cam'ovies</TitleNavigation>
                    <SearchBar />
                </ContainerNavigation>
            </NavLink>
        </div>
    );
};

export default Navigation;