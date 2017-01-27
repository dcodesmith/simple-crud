import { connect } from 'react-redux';
// import { deleteEmployee, updateEmployee } from '../actions';

import EmployeeTableHeader from '../components/EmployeeTableHeader';

function mapStateToProps(state) {
  const { employees } = state;

  // from reducer/index.js
  console.log(employees);
  return { employees };
}

const sort = (field) => {
  console.lo(this.state);
  console.log(field);
};

function mapDispatchToProps(dispatch) {
  return {
    onSort: field => sort(field)
  };
}

export default connect(mapStateToProps, null)(EmployeeTableHeader);
