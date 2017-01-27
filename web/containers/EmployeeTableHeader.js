import { connect } from 'react-redux';
import { sortEmployees } from '../actions';

import EmployeeTableHeader from '../components/EmployeeTableHeader';

function mapStateToProps(state) {
  const { employees, sortOrder } = state;

  // from reducer/index.js
  return { employees, sortOrder };
}

function mapDispatchToProps(dispatch) {
  return {
    onSort: (field, [...data], sortOrder) => dispatch(sortEmployees(field, data, sortOrder))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeTableHeader);
