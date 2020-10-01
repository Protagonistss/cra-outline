import React, { Component } from "react";
import { connect } from "react-redux";

export default connect(({ user }) => ({ user }))(
  class UserPage extends Component {
    render() {
      const { user } = this.props;
      const { id, name, money } = user.userInfo;
      return (
        <>
          <div>UserPage</div>
          <p>id:{id}</p>
          <p>name:{name}</p>
          <p>money:{money}</p>
        </>
      );
    }
  }
);
