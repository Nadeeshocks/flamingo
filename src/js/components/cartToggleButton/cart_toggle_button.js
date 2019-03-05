import React from 'react';

const CartToggleButton = ({ click }) => (
  <button className="cart-toggle-button" onClick={click} >
    <i className="fas fa-shopping-cart"></i>
  </button>
);

export default CartToggleButton;