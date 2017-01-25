import {
  CREATE_EMPLOYEE_SUCCESS,
  READ_EMPLOYEES_SUCCESS,
  UPDATE_EMPLOYEE_SUCCESS,
  DELETE_EMPLOYEE_SUCCESS
} from './constants';
import { beginAjaxCall, ajaxCallError } from './ajaxStatusActions';
import api from '../api';

export function createEmployeeSuccess(employee) {
  return { type: CREATE_EMPLOYEE_SUCCESS, employee };
}

export function readEmployeesSuccess(employees) {
  return { type: READ_EMPLOYEES_SUCCESS, employees };
}

export function updateEmployeeSuccess(employee) {
  return { type: UPDATE_EMPLOYEE_SUCCESS, employee };
}

export function deteleEmployeeSuccess(employee) {
  return { type: DELETE_EMPLOYEE_SUCCESS, employee };
}

export function createEmployee(data) {
  return (dispatch) => {
    dispatch(beginAjaxCall());
    return api.create(data).then((employee) => {
      dispatch(createEmployeeSuccess(employee));
    }).catch((error) => {
      dispatch(ajaxCallError());
      throw(error);
    });
  };
}

export function readEmployees() {
  return (dispatch) => {
    dispatch(beginAjaxCall());
    return api.readAll().then((employees) => {
      dispatch(readEmployeesSuccess(employees));
    }).catch((error) => {
      dispatch(ajaxCallError());
      throw(error);
    });
  };
}

export function updateEmployees() {
  return (dispatch) => {
    dispatch(beginAjaxCall());
    return api.update().then((employees) => {
      dispatch(updateEmployeeSuccess(employees));
    }).catch((error) => {
      dispatch(ajaxCallError());
      throw(error);
    });
  };
}

export function deleteEmployee(email) {
  return (dispatch) => {
    dispatch(beginAjaxCall());
    return api.delete(email).then((employee) => {
        // check if status is 204, then dispatch
      dispatch(deteleEmployeeSuccess(employee));
    }).catch((error) => {
      dispatch(ajaxCallError());
      throw(error);
    });
  };
}
