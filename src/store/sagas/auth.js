import { call, put } from "redux-saga/effects";
import { push } from "connected-react-router";
import { toastr } from "react-redux-toastr";
import api from "~/service/api";

import AuthActions from "../ducks/auth";

export function* signIn({ email, password }) {
  try {
    const { data } = yield call(api.post, "auth", { email, password });
    localStorage.setItem("@Omni:token", data.token);
    yield put(AuthActions.signInSuccess(data.token));
  } catch (err) {
    console.log(err);
  }
}

export function* signOut() {
  localStorage.removeItem("@Omni:token");
  localStorage.removeItem("@Omni:team");

  yield put(push("/entrar"));
}
