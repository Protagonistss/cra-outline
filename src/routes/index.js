import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "../pages/home-page/";
import LoginPage from "../pages/login-page/";
import _404 from "../pages/404";
import BottomBar from "../components/bottom-bar";
import TopBar from "../components/top-bar";
import BaseLayout from "../layout/base-layout";
import Authorization from "../routes/authorization";
import UserPage from "../pages/user-page";

export default function Routes(props) {
  return (
    <Router>
      <Route component={BaseLayout}>
        <Route component={TopBar}></Route>
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Authorization path="/user" component={UserPage}></Authorization>
          <Route path="/login" component={LoginPage}></Route>
          <Route component={_404}></Route>
        </Switch>
        <Route component={BottomBar}></Route>
      </Route>
    </Router>
  );
}
