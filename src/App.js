import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import BaseRouter from "./routes";
import Header from './containers/Header/Header'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Router>
          <BaseRouter />
        </Router>
      </div>
    );
  }
}

export default App;
