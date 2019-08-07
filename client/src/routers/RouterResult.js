import React, { Component } from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import SearchResultLayout from "../layouts/SearchResultLayout";
import resultRouter from "../routes/result.routes";
class RouterResult extends Component {
  render() {
    return (
      <SearchResultLayout>
        <Switch>
          {resultRouter.map((route, index) => {
            return (
              <Route
                path={route.path}
                component={route.component}
                key={index}
                exact={route.exact}
              />
            );
          })}
        </Switch>
      </SearchResultLayout>
    );
  }
}

export default RouterResult;
