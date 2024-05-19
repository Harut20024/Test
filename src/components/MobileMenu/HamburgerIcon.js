import React from 'react';
import { FaBars } from 'react-icons/fa';
import './HamburgerIcon.css';

const HamburgerIcon = ({ onClick }) => {
    return (
        <div className="hamburger-container">
            <div className="hamburger-icon" onClick={onClick}>
                <FaBars size={30} color="#333" />
            </div>
        </div>
    );
};

export default HamburgerIcon;
