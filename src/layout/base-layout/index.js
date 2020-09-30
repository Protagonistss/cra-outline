import React, { Component } from "react";
import classnames from "classnames";
import "./index.scss";
import BottomBar from "../../components/bottom-bar";

export default class BaseLayout extends Component {
  render() {
    return (
      <div className={classnames("base-layout")}>
        <article>{this.props.children}</article>
        <BottomBar></BottomBar>
      </div>
    );
  }
}
