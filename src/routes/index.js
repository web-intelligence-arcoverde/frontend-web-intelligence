import React, { Suspense } from "react";

import { Switch, Route } from "react-router-dom";

import { ConnectedRouter } from "connected-react-router";

import Index from "~/pages";

import history from "./history";

function Routes() {
  return (
    <Suspense fallback={<div>Loader</div>}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route component={Index} exact path="/" />
        </Switch>
      </ConnectedRouter>
    </Suspense>
  );
}

export default Routes;
