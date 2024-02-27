import './Header.css';
import React from 'react';
import { Link } from 'react-router-dom';

function Header () {
    return(
        <nav className="Header-nav">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/registration">Team Registration</Link></li>
                <li><Link to="/games">Games</Link></li>
            </ul>
        </nav>
    )
}

export default Header;