import React from "react";
// import { Route, Switch} from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../containers/home/home";
import Products from "../containers/products/products";
import ProductDetail from "../containers/productDetail/product_detail";
import WaxGuide from "../containers/waxGuide/wax_guide";
import OurStory from "../containers/ourStory/our_story";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
const Routers = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/products" element={<Products />} />

          <Route path="/ourStory" element={<OurStory />}></Route>
          <Route path="/waxGuide" element={<WaxGuide />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route
            element={() => (
              <h2 style={{ margin: "140px 0", textAlign: "center" }}>
                Not A Valid URL .
              </h2>
            )}
          />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default Routers;
