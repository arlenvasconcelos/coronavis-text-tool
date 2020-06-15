import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Home from "../pages/Home";
import Answers from "../pages/Answers";
import Tools from "../template/Tools.js";

const ToolsRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => (
      <Tools>
        <Component {...props} />
      </Tools>
    )}
  />
);

export default function Routes() {
  return (
    <Router>
      <Switch>
        <ToolsRoute path="/tools/home" exact component={Home} />
        <ToolsRoute
          path="/tools/questions/:id/answers"
          exact
          component={Answers}
        />
        <ToolsRoute
          path="/tools/questions/:id/answers?page=:page"
          exact
          component={Answers}
        />
        <Redirect from="*" to="/tools/home" />
      </Switch>
    </Router>
  );
}
