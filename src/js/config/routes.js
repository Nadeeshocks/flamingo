import React from "react";
import { Route, Switch} from 'react-router-dom';
import Home from '../containers/home/home';
import Products from '../containers/products/products';
import ProductDetail from '../containers/productDetail/product_detail';

export default(
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path ="/products" component={Products} />
    <Route path="/ourStory" component={() => <h2>ourStory</h2>} />
    <Route path="/waxGuide" component={() => <h2>waxGuide</h2>} />
    <Route path="/products/:id" component={ProductDetail} />
    <Route component={()=> <h2>Not A Valid URL .</h2>}/>
  </Switch>
)