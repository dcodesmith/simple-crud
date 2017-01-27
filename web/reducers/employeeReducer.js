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
      const index = findIndex(state, action.employee.row);

      return [
        ...state.slice(0, index),
        Object.assign({}, state[index], action.employee.fieldsToUpdate),
        ...state.slice(index + 1)
      ];
    }

    case DELETE_EMPLOYEE_SUCCESS: {
      // NOTE - Considering passing the employees index
      const index = findIndex(state, action.employee);

      return [
        ...state.slice(0, index),
        ...state.slice(index + 1)
      ];
    }

    // case SORT_EMPLOYEES: {
    //   console.log('state', state);
    //   console.log('action', action);
    //   // const { employees, sortOrder } = action;

    //   // if ( a[field] < b[field] ) return state.sortOrder === SORT_ASC ? -1 : 1;
    //   // if ( a[field] > b[field] ) return state.sortOrder === SORT_ASC ? 1: -1;

    //   return { employees: action.employees, sortOrder: action.sortOrder };
    // }

    default:
      return state;
  }
}
