import React from 'react';
import { NavLink } from 'react-router-dom';
import { ContainerNavigation, ImgNavigation, TitleNavigation } from './style';
import logo from "../../assets/images/camera2.jpg"

const Navigation = () => {
    return (
        <div style={{ display: 'flex', justifyContent: "space-between", alignItems: 'center' }}>
            <NavLink to='/' style={{ textDecoration: 'none' }}>
                <ContainerNavigation>
                    <TitleNavigation>Cam'ovies</TitleNavigation>
                </ContainerNavigation>
            </NavLink>
        </div>
    );
};

export default Navigation;