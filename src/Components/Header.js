import React from 'react';
import { Link } from 'react-router-dom';

function Header(props) {
    return (
        <div>
        <h1>PortFolio</h1>
            <Link to="/">Home</Link>
            <Link to="/Portfolio">Portfolio</Link>
            <Link to="/Contact">Contact</Link>
        </div>
    );
}

export default Header;