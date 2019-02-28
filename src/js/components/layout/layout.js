import React from 'react';
import routes from "../../config/routes";
import Header from '../header/header';
import Footer from '../footer/footer';

const Layout = () =>(
  <div>
    <Header />
    <main>
      {routes}
    </main>
    <Footer />
  </div>
);
export default Layout;
