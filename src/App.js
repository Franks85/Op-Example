import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import BaseRouter from "./routes";
import Header from './containers/Header/Header'
import Footer from './components/footer/footer'


class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <main style={{minHeight: '55vh'}}>
        <Router>
          <BaseRouter />
        </Router>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
