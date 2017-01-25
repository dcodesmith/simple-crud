import {
  CREATE_EMPLOYEE_SUCCESS,
  READ_EMPLOYEES_SUCCESS,
  UPDATE_EMPLOYEE_SUCCESS,
  DELETE_EMPLOYEE_SUCCESS
} from '../actions/constants';
import initialState from './initialState';

// Consider using immutable.js here

export default function employeeReducer(state = initialState.employees, action) {
  switch (action.type) {
    case CREATE_EMPLOYEE_SUCCESS: {
      return [...state, ...action.programmes];
    }

    case READ_EMPLOYEES_SUCCESS: {
      return action.programmes;
    }

    case UPDATE_EMPLOYEE_SUCCESS: {
      let s = [...state];
      return [];
    }

    case DELETE_EMPLOYEE_SUCCESS: {
      let s = [...state];
      return [];
    }

    default:
      return state;
  }
}
