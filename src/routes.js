import React from "react";
import { Route } from "react-router-dom";
import Home from './containers/Home'
import Suppliers from './containers/Company/Suppliers/Suppliers'
import OAservice from './containers/Base/OAservice/main'

const BaseRouter = () => (
  <div>
    <Route exact path="/" render={(props) => <Home {...props} base={true} />}  />
    <Route path="/suppliers" render={(props) => <Suppliers {...props} />}  />
    <Route path="/service/openappalti" render={(props) => <OAservice {...props} />}  />
  </div>
);

export default BaseRouter;