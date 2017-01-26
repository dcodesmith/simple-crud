import { findIndex } from 'lodash';
import {
  CREATE_EMPLOYEE_SUCCESS,
  READ_EMPLOYEES_SUCCESS,
  UPDATE_EMPLOYEE_SUCCESS,
  DELETE_EMPLOYEE_SUCCESS
} from '../actions/constants';
import initialState from './initialState';

export default function employeeReducer(state = initialState.employees, action) {
  switch (action.type) {
    case CREATE_EMPLOYEE_SUCCESS: {
      return [...state, action.employee];
    }

    case READ_EMPLOYEES_SUCCESS: {
      return action.employees;
    }

    case UPDATE_EMPLOYEE_SUCCESS: {
      let s = [...state];
      return [];
    }

    case DELETE_EMPLOYEE_SUCCESS: {
      const index = findIndex(state, action.employee);

      return [
        ...state.slice(0, index),
        ...state.slice(index + 1)
      ];
    }

    default:
      return state;
  }
}
