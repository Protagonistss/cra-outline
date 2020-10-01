import React from "react";
import classnames from "classnames";
import { Route, Switch } from "react-router-dom";
import { blankRoutes } from "../../routes/routes";

export default function BlankLayout(props) {
  return (
    <div className={classnames("blank-layout", "layout")}>
      <article>
        <Switch>
          {blankRoutes.map((item) => {
            return item.guard ? (
              <item.guard
                key={item.path}
                path={item.path}
                component={item.component}
              ></item.guard>
            ) : (
              <Route
                key={item.path}
                path={item.path}
                component={item.component}
              ></Route>
            );
          })}
        </Switch>
      </article>
    </div>
  );
}
