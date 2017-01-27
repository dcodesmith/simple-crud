import { combineReducers } from 'redux';
import sortOrder from './sortReducer';
import employees from './employeeReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  employees,
  sortOrder,
  ajaxCallsInProgress
});

export default rootReducer;
