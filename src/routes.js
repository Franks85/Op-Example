import React from "react";
import { Route } from "react-router-dom";
import Home from './containers/Home/Home'

const BaseRouter = () => (
  <div style={{height: '100%'}}>
    <Route exact path="/" component={Home} />
  </div>
);

export default BaseRouter;