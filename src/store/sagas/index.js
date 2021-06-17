// eslint-disable-next-line no-unused-vars
import { all, takeLatest } from "redux-saga/effects";
import { AuthTypes } from "../ducks/auth";
import { signIn, signOut } from "./auth";

export default function* rootSaga() {
  return (
    takeLatest(AuthTypes.SIGN_IN_REQUEST, signIn),
    takeLatest(AuthTypes.SIGN_OUT, signOut)
  );
}
