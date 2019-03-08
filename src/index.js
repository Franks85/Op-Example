import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Root from './Root';
import 'bootstrap/dist/css/bootstrap.min.css';

const app = (
  <Root>
    <App />
  </Root>
);

ReactDOM.render(app, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA

