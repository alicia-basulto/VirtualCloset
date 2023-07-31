import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import MenuItem from './MenuItem';
import './styles/MenuBar.css';

const MenuBar = ({ isMenuActive, handleToggleMenu }) => {
    return (
        <div>
            <div className="title">
                <h1>VIRTUAL CLOSET</h1>
            </div>
            <div className={`menu ${isMenuActive ? 'active' : ''}`}>
                <ul>
                    <MenuItem text="Home" />
                    <MenuItem text="About" />
                    <MenuItem text="Gallery" />
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
