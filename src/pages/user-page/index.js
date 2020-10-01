import React, { Component } from "react";
import BaseLayout from "../../layout/base-layout";
import { connect } from "react-redux";

export default connect(({ user }) => ({ user }))(
  class UserPage extends Component {
    render() {
      const { user } = this.props;
      const { id, name, money } = user.userInfo;
      return (
        <BaseLayout title="center">
          <div>UserPage</div>
          <p>id:{id}</p>
          <p>name:{name}</p>
          <p>money:{money}</p>
        </BaseLayout>
      );
    }
  }
);
