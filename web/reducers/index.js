import { combineReducers } from 'redux';
import employee from './employeeReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  employee,
  ajaxCallsInProgress
});

export default rootReducer;
