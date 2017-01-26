import React from 'react';

import EmployeeForm from '../components/EmployeeForm';
import EmployeeTable from '../containers/LoadEmployees';

const App = () => (
  <div className="container">
    <EmployeeForm />
    <EmployeeTable />
  </div>
)

export default App;
