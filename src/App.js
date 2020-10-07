import React, { Fragment } from "react";

import ReduxToastr from "react-redux-toastr";

import { Provider } from "react-redux";
import { store } from "./store";

import GlobalStyle from "./styles/global";

import Routes from "./routes/index";

function App() {
  return (
    <Provider store={store}>
      <Fragment>
        <Routes />
        <GlobalStyle />
        <ReduxToastr />
      </Fragment>
    </Provider>
  );
}

export default App;
