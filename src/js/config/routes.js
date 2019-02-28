import React from "react";
import { Route } from 'react-router-dom';
import Home from '../containers/home/home';

export default(
  <div className="app-content">
    <Route exact path="/" component={Home} />
  </div>
)