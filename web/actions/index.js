import {
  CREATE_EMPLOYEE_SUCCESS,
  READ_EMPLOYEES_SUCCESS,
  UPDATE_EMPLOYEE_SUCCESS,
  DELETE_EMPLOYEE_SUCCESS,
  SORT_EMPLOYEES,
  SORT_ASC
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

export function sort(employees, sortOrder) {
  return { type: SORT_EMPLOYEES, employees, sortOrder };
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

export function updateEmployee(old, newData) {
  return (dispatch) => {
    dispatch(beginAjaxCall());
    return api.update(old, newData).then((employees) => {
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

export function sortEmployees(field, employees, sortOrder) {
  return (dispatch) => {
    employees.sort((a, b) => {
      if (a[field] < b[field]) {
        return -1;
      }

      if (a[field] > b[field]) {
        return 1;
      }

      return 0;
    });

    console.log('employees', employees);

    dispatch(sort(employees, sortOrder, field));
  };
}
