import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import MenuItem from './MenuItem';
import './MenuBar.css';

const MenuBar = () => {
    const [menuActive, setMenuActive] = useState(false);

    const handleToggleMenu = () => {
        setMenuActive(!menuActive);
    };

    return (
        <div>
            <div className="title">
                <h1>VIRTUAL CLOSET</h1>
            </div>
            <div className={`menu ${menuActive ? 'active' : ''}`}>
                <ul>
                    <MenuItem text="Home" />
                    <MenuItem text="About" />
                    <MenuItem text="Services" />
                    <MenuItem text="Portfolio" />
                    <MenuItem text="Contact Us" />
                </ul>
            </div>
            <div className="toggle" onClick={handleToggleMenu}>
                <a>
                    <FaBars /> {/* Utilizamos el icono de Font Awesome */}
                </a>
            </div>

        </div>
    );
};

export default MenuBar;