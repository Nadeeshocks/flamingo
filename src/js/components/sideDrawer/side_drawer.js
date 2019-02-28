import React from 'react';

const sideDrawer = props => (
  <nav className="side-drawer">
    <ul className="side-drawer-nav">
      <li className="side-drawer-item">
        <Link className="side-drawer-link">Shop All</Link>
      </li>
      <li className="side-drawer-item">
        <Link className="side-drawer-link">Our Story</Link>
      </li>
      <li className="side-drawer-item">
        <Link className="side-drawer-link">Wax Guide</Link>
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

export default sideDrawer;