import React from 'react'
import { connect } from 'react-redux'

const EmployeeTableHeader = ({ employees }) => {

  const sort = (field) => {
    // console.log(field, employees);
    employees.sort((a, b) => {
      // console.log('a', a);
      // console.log('b', b);

      if (a[field] < b[field] ) {
        return -1;
      }

      if (a[field] < b[field] ) {
        return 1;
      }

      return 0;
    });
  }

  return (
    <thead>
        <tr>
          <th onClick={() => sort('firstname')}>Firstname</th>
          <th onClick={() => sort('surname')}>Surname</th>
          <th onClick={() => sort('contact_number')}>Contact Number</th>
          <th onClick={() => sort('email')}>Email</th>
          <th>Delete</th>
        </tr>
    </thead>
  )
}

export default EmployeeTableHeader;
