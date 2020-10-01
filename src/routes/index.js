import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import BaseLayout from "../layout/base-layout";

export default function Routes(props) {
  return (
    <Router>
      <Route component={BaseLayout}></Route>
    </Router>
  );
}
