import { createReducer, createActions } from "reduxsauce";
import Immutable from "seamless-immutable";

/* Types & Action Creators */
const { Types, Creators } = createActions({
  createEmployeeRequest: ["employee"],
  createEmployeeSuccess: ["employee"],

  updateEmployeeRequest: ["employee"],
  updateEmployeeSuccess: ["employee"],

  deleteEmployeeRequest: ["employee_id"],
  deleteEmployeeSuccess: ["employee_id"],

  readEmployeeRequest: [],
  readEmployeeSuccess: ["employees"],
});

export const EmployeeTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = Immutable({
  employees: [],
  employees_loading: false,
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
