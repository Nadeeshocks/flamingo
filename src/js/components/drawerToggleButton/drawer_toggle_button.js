import React from 'react';

const DrawerToggleButton = ({click}) => (
  <button className="toggle-button" onClick={click} >
    <img src="/public/assets/images/icons/hamburger.png" />
  </button>
);

export default DrawerToggleButton;