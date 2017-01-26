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
      console.log('read', action);

      return action.employees;
    }

    case UPDATE_EMPLOYEE_SUCCESS: {
      const index = findIndex(state, action.employee.row);

      console.log('state', state);
      console.log('lll', ...state.slice(0, index));

      return [
        ...state.slice(0, index),
        Object.assign({}, state[index], action.employee.fieldsToUpdate)
      ];
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
