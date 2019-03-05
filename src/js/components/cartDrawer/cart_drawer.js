import React from 'react';
import { Link } from 'react-router-dom';

const CartDrawer = ({ show , click }) =>(
  <div className={`cart-drawer ${show ? 'open-cart' : ''}`}>
    <div className="cart-drawer-close" onClick={ click }>
      <i className="fas fa-arrow-left"></i>
    </div>
    <div className="cart-drawer-title">
      <h2>YOUR BAG</h2>
      <p>is currently empty</p>
    </div>
    <div className="cart-drawer-footer">
      <p>Looks like there's nothing in your cart.</p>
      <p>We can help with that.</p>
      <button>
        Start Shopping
      </button>
    </div>
  </div>
);

export default CartDrawer;