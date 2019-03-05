import React from 'react';

const DrawerToggleButton = ({click}) => (
  <button className="toggle-button" onClick={click} >
    <i className="fas fa-bars"></i>
  </button>
);

export default DrawerToggleButton;