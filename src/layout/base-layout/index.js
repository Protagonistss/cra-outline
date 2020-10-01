import React, { Component } from "react";
import classnames from "classnames";
import "./index.scss";

export default class BaseLayout extends Component {
  componentDidMount() {
    const { title = "default" } = this.props;
    document.title = title;
  }
  render() {
    const { children } = this.props;
    return (
      <div className={classnames("base-layout")}>
        <article>{children}</article>
      </div>
    );
  }
}
