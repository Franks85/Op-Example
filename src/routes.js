import React from "react";
import { Route } from "react-router-dom";
import Home from './containers/Home'
import Suppliers from './containers/Company/Suppliers/Suppliers'
import OAservice from './containers/Base/OAservice/main'
import About from './containers/Base/About/main'
import AFservice from './containers/Base/AFservice/main'

const BaseRouter = () => (
  <div>
    <Route exact path="/" render={(props) => <Home {...props} base={true} />}  />
    <Route path="/about" render={(props) => <About {...props} />}  />
    <Route path="/suppliers" render={(props) => <Suppliers {...props} />}  />
    <Route path="/service/openappalti" render={(props) => <OAservice {...props} />}  />
    <Route path="/service/albofornitori" render={(props) => <AFservice {...props} />}  />
  </div>
);

export default BaseRouter;