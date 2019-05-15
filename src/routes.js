import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import Suppliers from "./containers/Company/Suppliers/Suppliers";
import OAservice from "./containers/Base/OAservice/main";
import About from "./containers/Base/About/main";
import AFservice from "./containers/Base/AFservice/main";

const BaseRouter = () => (
  <div>
    <Switch>
      <Route exact path="/" render={props => <Home {...props} base={true} />} />
      <Route path="/about" render={props => <About {...props} />} />
      <Route path="/fornitori" render={props => <Suppliers {...props} />} />
      <Route
        path="/servizi/openappalti"
        render={props => <OAservice {...props} />}
      />
      <Route
        path="/servizi/albofornitori"
        render={props => <AFservice {...props} />}
      />
    </Switch>
  </div>
);

export default BaseRouter;
