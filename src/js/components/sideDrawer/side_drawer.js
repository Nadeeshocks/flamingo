import React from 'react';
import { Link } from 'react-router-dom';

const SideDrawer = ({show , click}) => (
  
  <nav className={`side-drawer ${show ? 'open' : '' }`} >
    <div className="side-drawer-close" onClick={ click }>
      <i className="fa fa-times fa-2x" aria-hidden="true"></i>
    </div>
    <ul className="side-drawer-nav">
      <li className="side-drawer-item">
        <Link className="side-drawer-link" to="/">Shop All</Link>
      </li>
      <li className="side-drawer-item">
        <Link className="side-drawer-link" to="/">Our Story</Link>
      </li>
      <li className="side-drawer-item">
        <Link className="side-drawer-link" to="/">Wax Guide</Link>
      </li>
    </ul>
    <div className="contacts">
      <p className="faq">
        <span> HAVE QUESTIONS? </span>
        <span> FAQ </span>
      </p>
      <p className="halp"> help@shopflamingo.com </p>
      <p className="phone"> 1-888-205-9655</p>
      <p className="press"> press@shopflamingo.com </p>
      <div className="social-media">
        <i className="fab fa-facebook-f"></i>
        <i className="fab fa-instagram"></i>
      </div>
    </div>
  </nav>
);

export default SideDrawer;