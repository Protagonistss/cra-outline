import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect, Route } from "react-router-dom";

export default connect(({ user }) => {
  return { isLogin: user.isLogin };
})(
  class Authorization extends Component {
    render() {
      console.log("this.props", this.props);
      const { isLogin, component, ...rest } = this.props;
      return (
        <Route
          {...rest}
          render={({ location }) =>
            isLogin ? (
              component
            ) : (
              <Redirect
                to={{
                  pathname: "/login",
                  state: { next: location.pathname },
                }}
              ></Redirect>
            )
          }
        ></Route>
      );
    }
  }
);
