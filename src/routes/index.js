import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "../Pages/Home";
import Results from "../Pages/Results";

export default function Routes() {
  return (
    <Switch>
      <Route path="/search/:query/:page?" exact component={Results} />
      <Route path="/:page?" exact component={Home} />
    </Switch>
  );
}
