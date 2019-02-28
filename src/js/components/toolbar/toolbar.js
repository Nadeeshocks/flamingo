import React from 'react';
import { Link } from 'react-router-dom';
import DrawerToggleButton from '../drawerToggleButton/drawer_toggle_button';

const Toolbar = props => (
    <div className="container-fluid h-100">
        <nav className="toolbar">
            <div>
                <DrawerToggleButton />
            </div>
            
            <div className="toolbar-nav">
                <ul>
                    <li className="toolbar-nav-item">
                        <Link to="/" className="toolbar-nav-link">shop all</Link>
                    </li>
                    <li className="toolbar-nav-item">
                        <Link to="/" className="toolbar-nav-link">our story</Link>
                    </li>
                    <li className="toolbar-nav-item">
                        <Link to="/" className="toolbar-nav-link">wax guide</Link>
                    </li>
                </ul>
            </div>

            <div className="toolbar-brand">
                <Link to="/">
                    <img src={'assets/svg/log.svg'} />
                </Link>
            </div>

            <div className="toolbar-cart">
                <i className="fas fa-shopping-cart"></i>
            </div>
        </nav>
    </div>
);

export default Toolbar;