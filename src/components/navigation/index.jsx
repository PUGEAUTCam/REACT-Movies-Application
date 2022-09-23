import React from 'react';
import { NavLink } from 'react-router-dom';
import { ContainerNavigation, ImgNavigation, TitleNavigation } from './style';

const Navigation = () => {
    return (
        <div style={{ display: 'flex', justifyContent: "space-between", alignItems: 'center' }}>
            <NavLink to='/' style={{ textDecoration: 'none' }}>
                <ContainerNavigation>
                    <ImgNavigation src="./camera2.jpg" alt="Camera icon" />
                    <TitleNavigation>Cam'ovies</TitleNavigation>
                </ContainerNavigation>
            </NavLink>
        </div>
    );
};

export default Navigation;