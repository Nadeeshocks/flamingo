import React, { useState } from 'react';
import routes from "../../config/routes";
import Header from '../header/header';
import Footer from '../footer/footer';
import SideDrawer from '../sideDrawer/side_drawer';
import Backdrop from '../backdrop/backdrop';

// using Hook's to create a Component-level state in a functional component.

const Layout = () => {
  const [sideDrawerOpen, setSideDrawerOpen ] = useState(false);

  return (
    <div className="layout">

      <Header />
      
      { sideDrawerOpen ? <SideDrawer /> : "" }      
      { sideDrawerOpen ? <Backdrop /> : "" }

      <main>
        {routes}
      </main>

      <Footer />

    </div>
  );

}
export default Layout;
