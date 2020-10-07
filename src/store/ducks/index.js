import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import { reducer as toastr } from "react-redux-toastr";

import { reducer as employee } from "./employee";
import { reducer as position } from "./position";

export default (history) =>
  combineReducers({
    toastr,

    employee,
    position,

    router: connectRouter(history),
  });
