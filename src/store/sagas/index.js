import { all, takeLatest } from "redux-saga/effects";

import { EmployeeTypes } from "../ducks/employee";

import { PositionTypes } from "../ducks/position";

export default function* rootSaga() {
  return yield all([]);
}

/**
 * 
 * 
 * takeLatest(AuthTypes.SIGN_IN_REQUEST, signIn),
    takeLatest(AuthTypes.SIGN_OUT, signOut),
 * 
 */
