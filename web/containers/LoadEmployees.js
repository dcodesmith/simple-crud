import { connect } from 'react-redux';
import { readEmployees } from '../actions';

import EmployeeTable from '../components/EmployeeTable';

function mapDispatchToProps(dispatch) {
  return {
    onLoad: () => { dispatch(readEmployees()); }
  };
}

export default connect(null, mapDispatchToProps)(EmployeeTable);
