import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "../pages/home-page/";
import UserPage from "../pages/user-page/";
import LoginPage from "../pages/login-page/";
import _404 from "../pages/404";

export default function Routes(props) {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route path="/user" component={UserPage}></Route>
        <Route path="/login" component={LoginPage}></Route>
        <Route component={_404}></Route>
      </Switch>
    </Router>
  );
}
