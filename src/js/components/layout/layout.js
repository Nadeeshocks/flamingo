import React, { useState, useEffect} from 'react';
import routes from "../../config/routes";
import Header from '../header/header';
import Footer from '../footer/footer';
import SideDrawer from '../sideDrawer/side_drawer';
import Backdrop from '../backdrop/backdrop';
import CartDrawer from '../cartDrawer/cart_drawer';

// using Hook's to create a Component-level state in a functional component.

const Layout = () => {
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);
  const [cartDrawerOpen, setCartDrawerOpen] = useState(false);

  const drawerToggleClickHandle = () => setSideDrawerOpen(!sideDrawerOpen) ;
  const cartToggleClickHandle = () => setCartDrawerOpen( !cartDrawerOpen )
  
  // const cartToggleClickHandle = () => setCartDrawerOpen(prevState =>     !prevState.cartDrawerOpen );
  // useEffect(() => console.log(sideDrawerOpen));

  return (
    <div className="layout">
      <Header 
        drawerClickHandle={drawerToggleClickHandle} 
        cartClickHandle={cartToggleClickHandle}
      />

      <SideDrawer show={sideDrawerOpen} click={drawerToggleClickHandle}/>    
      <CartDrawer show={cartDrawerOpen} click={cartToggleClickHandle}/>
      {cartDrawerOpen ? <Backdrop click={cartToggleClickHandle} /> : "" }

      <main>
        {routes}
      </main>

      <Footer />
    </div>
  );

}
export default Layout;
