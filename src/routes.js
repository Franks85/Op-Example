import React from "react";
import { Route } from "react-router-dom";
import Home from './containers/Home'
import Suppliers from './containers/Company/Suppliers/Suppliers'

const BaseRouter = () => (
  <div>
    <Route exact path="/" render={(props) => <Home {...props} city={false} company={true} />}  />
    <Route exact path="/suppliers" render={(props) => <Suppliers {...props} />}  />
  </div>
);

export default BaseRouter;