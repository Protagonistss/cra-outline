import React, { Component } from "react";
import "./index.scss";
import { connect } from "react-redux";
import { loginAction } from "../../actions/login";
import { Redirect } from "react-router-dom";

export default connect(
  // state
  ({ user }) => ({ user }),
  //dispatch
  // {
  //   login: (userInfo) => (dispatch) => {
  //     loginAction(dispatch, userInfo);
  //   },
  // }

  // saga style
  {
    login: (userInfo) => ({ type: "loginSaga", payload: userInfo }),
  }
)(
  class LoginPage extends Component {
    constructor(props) {
      super(props);
      this.state = { name: "" };
    }
    render() {
      const { login, user, location } = this.props;
      console.log("this.props********", this.props);
      const { isLogin, loading, message } = user;
      if (isLogin) {
        const { next = "/" } = location.state || {};
        return <Redirect to={next}></Redirect>;
      }
      const { name } = this.state;

      return (
        <>
          <div>login</div>
          <input
            type="text"
            value={name}
            onChange={(e) => this.setState({ name: e.target.value })}
          ></input>
          <p className="red">{message}</p>
          <button onClick={() => login({ name })}>
            {loading ? "loading" : "login"}
          </button>
        </>
      );
    }
  }
);
