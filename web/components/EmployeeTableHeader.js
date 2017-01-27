import React from 'react'
import { connect } from 'react-redux'

const EmployeeTableHeader = ({ employees, onSort, sortOrder }) => {

  return (
    <thead>
        <tr>
          <th onClick={() => onSort('firstname', employees, 'asc')}>Firstname</th>
          <th onClick={() => onSort('surname', employees)}>Surname</th>
          <th onClick={() => onSort('contact_number', employees)}>Contact Number</th>
          <th onClick={() => onSort('email', employees)}>Email</th>
          <th>Delete</th>
        </tr>
    </thead>
  )
}

export default EmployeeTableHeader;
