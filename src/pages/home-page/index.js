import React, { Component } from "react";
import BottomBar from "../../components/bottom-bar";
import BaseLayout from "../../layout/base-layout";

export default class HomePage extends Component {
  render() {
    return (
      <BaseLayout title="home">
        <div>
          <h3>HomePage</h3>
        </div>
      </BaseLayout>
    );
  }
}
