import React from 'react';
import '../styles/Navbar.css';
import { Link } from 'react-router-dom';


function Navbar() {
    return (
        <div className='navContainer'>
            <Link to='/chrissna-khiev-website'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/projects'>Projects</Link>
            <Link to='/resume'>Resume</Link>
        </div>
    );
};

export default Navbar;