import React from "react";
import { Route } from "react-router-dom";
import Home from './containers/Home'
import Suppliers from './containers/Company/Suppliers/Suppliers'
import OAservice from './containers/Base/OAservice/main'

const BaseRouter = () => (
  <div>
    <Route exact path="/" render={(props) => <Home {...props} city={false} company={true} />}  />
    <Route exact path="/suppliers" render={(props) => <Suppliers {...props} />}  />
    <Route exact path="/service" render={(props) => <OAservice {...props} />}  />
  </div>
);

export default BaseRouter;