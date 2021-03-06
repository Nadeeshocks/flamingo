import React from 'react';
import { Link } from 'react-router-dom';


const CartDrawer = ({ show , click }) =>(
  <div className={`cart-drawer ${show ? 'open-cart' : ''}`}>
    <div className="cart-drawer-close" onClick={ click }>
      <img src="/public/assets/images/icons/left-arrow.png" />
    </div>
    <div className="cart-drawer-title">
      <h2 className="text-uc-l">YOUR BAG</h2>
      <p className="text-c-14">is currently empty</p>
    </div>
    <div className="cart-drawer-footer">
      <p className="text-c-14 mb-2">Looks like there's nothing in your cart.</p>
      <p className="text-c-14 mb-5">We can help with that.</p>
      <Link to="/products" onClick={ click }>
        <button className="f-btn f-border-btn w-100">
          Start Shopping
        </button>
      </Link>
    </div>
  </div>
);

export default CartDrawer;