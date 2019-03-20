import React from "react";
import { Route, Switch} from 'react-router-dom';
import Home from '../containers/home/home';
import Products from '../containers/products/products';
import ProductDetail from '../containers/productDetail/product_detail';
import waxGuide from '../containers/waxGuide/wax_guide';
import ourStory from '../containers/ourStory/our_story';

export default(
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path ="/products" component={Products} />
    <Route path="/ourStory" component={ourStory} />
    <Route path="/waxGuide" component={waxGuide} />
    <Route path="/products/:id" component={ProductDetail} />
    <Route component={()=> <h2 style={{margin : '140px 0',textAlign :'center'}}>Not A Valid URL .</h2>}/>
  </Switch>
)