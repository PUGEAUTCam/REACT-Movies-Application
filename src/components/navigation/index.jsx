import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div>
            <div>
                {/* <img src="./camera.png" alt="Camera icon" /> */}
                <h1>Cam'ovies</h1>
            </div>

            <NavLink to='/'>
                <li>Home</li>
            </NavLink>
        </div>
    );
};

export default Navigation;