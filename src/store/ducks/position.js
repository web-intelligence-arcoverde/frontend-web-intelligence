import { createReducer, createActions } from "reduxsauce";
import Immutable from "seamless-immutable";

/* Types & Action Creators */
const { Types, Creators } = createActions({
  createPositionRequest: ["position"],
  createPositionSuccess: ["position"],

  updatePositionRequest: ["position"],
  updatePositionSuccess: ["position"],

  deleteEmployeeRequest: ["position_id"],
  deleteEmployeeSuccess: ["position_id"],

  readEmployeeRequest: [],
  readEmployeeSuccess: ["positions"],
});

export const PositionTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = Immutable({
  positions: [],
  position_loading: false,
});

export const success = (state, { token }) => {
  return { ...state, signedIn: true, token };
};

export const logout = (state) => ({ ...state, signedIn: false, token: null });

/* Reducers to types */
export const reducer = createReducer(INITIAL_STATE, {});

/*

[Types.SIGN_IN_SUCCESS]: success,
  [Types.SIGN_OUT]: logout,

*/
