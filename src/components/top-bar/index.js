import React, { Component } from "react";
import "./index.scss";

export default class TopBar extends Component {
  componentWillUnmount() {
    console.log("componentWillUnmout");
  }
  render() {
    const { title } = this.props;
    return (
      <div className="topBar">
        <span
          onClick={() => "hi"}
          className="iconfont icon-jiantou-copy"
        ></span>
        <div className="menuItem">{title}</div>
      </div>
    );
  }
}
