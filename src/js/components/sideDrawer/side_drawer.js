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
      <p className="text-uc-10"> HAVE QUESTIONS? </p>
      <p className="text-uc-14"> FAQ </p>
      <p className="halp text-c-14 mb-1"> help@shopflamingo.com </p>
      <p className="phone text-c-14 mb-1"> 1-888-205-9655</p>
      <p className="press text-c-14 mb-1"> press@shopflamingo.com </p>
      <div className="social-media mt-5">
        <i className="fab fa-facebook-f fa-lg fa-fw"></i>
        <i className="fab fa-instagram fa-lg fa-fw"></i>
      </div>
    </div>
  </nav>
);

export default SideDrawer;