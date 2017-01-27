import {
  SORT_EMPLOYEES
} from '../actions/constants';
import initialState from './initialState';

export default function employeeReducer(state = initialState.sortOrder, action) {
  switch (action.type) {
    case SORT_EMPLOYEES: {
    //   console.log('state', state);
    //   console.log('action', action);
      const { employees, sortOrder } = action;
        // const { employees, sortOrder } = action;

        // if ( a[field] < b[field] ) return state.sortOrder === SORT_ASC ? -1 : 1;
        // if ( a[field] > b[field] ) return state.sortOrder === SORT_ASC ? 1: -1;

      return state;
    }

    default:
      return state;
  }
}
