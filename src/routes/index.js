import React, { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";

import Loader from "../components/loader";

import history from "./history";

const Employee = lazy(() => import("../pages/employee/list"));

export default function Routes() {
  return (
    <Suspense fallback={<Loader />}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route
            path="/"
            exact
            component={(props) => <Employee {...props} />}
          />
        </Switch>
      </ConnectedRouter>
    </Suspense>
  );
}
