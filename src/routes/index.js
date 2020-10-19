import React, { Suspense } from "react";

import { Switch } from "react-router-dom";

import { ConnectedRouter } from "connected-react-router";

import history from "./history";

function Routes() {
  return (
    <Suspense fallback={<div>Loader</div>}>
      <ConnectedRouter history={history}>
        <Switch />
      </ConnectedRouter>
    </Suspense>
  );
}

export default Routes;
