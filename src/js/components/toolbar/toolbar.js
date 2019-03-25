import React from 'react';
import { Link } from 'react-router-dom';
import DrawerToggleButton from '../drawerToggleButton/drawer_toggle_button';
import CartToggleButton from '../cartToggleButton/cart_toggle_button';

const Toolbar = ({ toolbarClick , cartClick }) => (
    <div className="container-fluid h-100">
        <nav className="toolbar">
            <div className="toolbar-toggle">
                <DrawerToggleButton click={toolbarClick} />
            </div>
            
            <div className="toolbar-nav">
                <ul>
                    <li className="toolbar-nav-item">
                        <Link to="/products" className="toolbar-nav-link">shop all</Link>
                    </li>
                    <li className="toolbar-nav-item">
                        <Link to="/ourStory" className="toolbar-nav-link">our story</Link>
                    </li>
                    <li className="toolbar-nav-item">
                        <Link to="/waxGuide" className="toolbar-nav-link">wax guide</Link>
                    </li>
                </ul>
            </div>

            <div className="toolbar-brand">
                <Link to="/">
                    <img src={'/public/assets/images/logo/logo.png'} />
                </Link>
            </div>

            <div className="toolbar-cart">
                <CartToggleButton click={ cartClick }/>
            </div>
        </nav>
    </div>
);

export default Toolbar;