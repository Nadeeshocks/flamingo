import React from 'react';
import { Link } from 'react-router-dom';

const SideDrawer = props => (
  <nav className="side-drawer">
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
      <p className="faq"></p>
      <p className="halp"></p>
      <p className="phone"></p>
      <p className="press"></p>
      <div className="social-media">
        <i className="fa fa-facebook"></i>
        <i className="fa fa-insta"></i>
      </div>
    </div>
  </nav>
);

export default SideDrawer;