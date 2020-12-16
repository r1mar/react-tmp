import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      //<Route path="/not-found" component={NotFound} />
// <Route component={NotFound} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
