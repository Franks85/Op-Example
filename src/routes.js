import React from "react";
import { Route } from "react-router-dom";
import Home from './containers/Home'

const BaseRouter = () => (
  <div>
    <Route exact path="/" render={(props) => <Home {...props} city={false} company={true} />}  />
  </div>
);

export default BaseRouter;