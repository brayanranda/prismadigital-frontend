import React from "react";
// import { Switch } from "react";
// import Switch from "react-switch";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { map } from "lodash";
import configRouting from "./configRouting";

export default function Routing(props) {
  const { setRefreshCheckLogin } = props;

  return (
    <Router>
      <Routes>
        {map(configRouting, (route, index) => (
          <Route key={index} path={route.path} exact={route.exact}>
            <route.page setRefreshCheckLogin={setRefreshCheckLogin} />
          </Route>
        ))}
      </Routes>
    </Router>
  );
}
