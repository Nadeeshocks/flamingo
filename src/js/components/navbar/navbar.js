import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = props => (
    <header >
        <nav className="navbar">
            <div></div>
            <div className="navbar-brand">
                <Link to="/">
                    <img src="" />
                </Link>
            </div>
            <div className="navbar-nav">
                <ul>
                    <li className="navbar-nav-item">
                        <Link to ="/" className="navbar-nav-link">Product</Link>
                    </li>
                    <li className="navbar-nav-item">
                        <Link to ="/" className="navbar-nav-link">Story</Link>
                    </li>
                    <li className="navbar-nav-item">
                        <Link to ="/" className="navbar-nav-link">Guide</Link>
                    </li>
                </ul>
            </div>
        </nav>

    </header>
);

export default Navbar;