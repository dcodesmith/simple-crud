import { connect } from 'react-redux';
import { deleteEmployee } from '../actions';

import EmployeeTableRow from '../components/EmployeeTableRow';

function mapStateToProps(state) {
  const { employees } = state;

  // from reducer/index.js

  return { employees };
}

function mapDispatchToProps(dispatch) {
  return {
    onDelete: row => dispatch(deleteEmployee(row))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeTableRow);
