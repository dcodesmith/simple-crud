import React from 'react'
import { connect } from 'react-redux'

let EmployeeTableHeader = ({ onSort }) => {

  return (
    <thead>
        <tr>
          <th onClick={onSort}>Firstname</th>
          <th onClick={onSort}>Surname</th>
          <th onClick={onSort}>Contact Number</th>
          <th onClick={onSort}>Email</th>
          <th onClick={onSort}>Delete</th>
        </tr>
    </thead>
  )
}

export default EmployeeTableHeader
