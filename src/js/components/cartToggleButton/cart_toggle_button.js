import React from 'react';

const CartToggleButton = ({ click }) => (
  <button className="cart-toggle-button" onClick={click} >
    <img src='/public/assets/images/icons/cart.png' />
  </button>
);

export default CartToggleButton;