import React from "react";
import classnames from "classnames";
import TopBar from "../../components/top-bar";
import BottomBar from "../../components/bottom-bar";
import _404 from "../../pages/404";
import "./index.scss";
import { matchAllRoute, matchRoute } from "../../routes/helper";
import { Route, Switch } from "react-router-dom";
import { baseRoutes } from "../../routes/routes";
import BlankLayout from "../blank-layout";

export default function BaseLayout(props) {
  /**
   * 谁使用 返回给谁
   */
  const { location } = props;
  const matchAll = matchAllRoute(location);
  if (!matchAll) {
    return <Route component={_404}></Route>;
  }
  // 不使用当前layout的
  const match = matchRoute(baseRoutes, location);
  if (!match) {
    const { component } = matchAll;
    console.log("loginlogn", matchAll, component);
    return <Route component={BlankLayout}></Route>;
  }

  const { title, showTopBar } = match;
  return (
    <div className={classnames("base-layout", "layout")}>
      {showTopBar && <TopBar title={title}></TopBar>}
      <article>
        <Switch>
          {baseRoutes.map((item) =>
            item.guard ? (
              <item.guard
                key={item.path}
                path={item.path}
                component={item.component}
                {...item.props}
              />
            ) : (
              <Route
                key={item.path}
                path={item.path}
                component={item.component}
                {...item.props}
              ></Route>
            )
          )}
        </Switch>
      </article>
      <BottomBar></BottomBar>
    </div>
  );
}
