import React, { Component } from "react";
import { Link } from "react-router-dom";
import { MenuModel } from "../../constants/custom";
import "./index.scss";

const model = new MenuModel();
export default class BottonBar extends Component {
  componentWillUnmount() {
    console.log("bottom bar");
  }
  render() {
    return (
      <ul className="bottomBar">
        {model.getData.map((item) => {
          return <MenuItem key={item.key} {...item}></MenuItem>;
        })}
      </ul>
    );
  }
}

function MenuItem(props) {
  return (
    <li className="menuItem">
      <span className={"iconfont icon-" + props.icon}></span>
      <Link to={props.link}>{props.title}</Link>
    </li>
  );
}
