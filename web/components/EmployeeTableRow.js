import React from 'react'
import { connect } from 'react-redux'

const EmployeeTableRow = ({ employees, onDelete }) => {

  const employeeRows = employees.map((employee, index) => {
    return (
      <tr key={index}>
        <td contentEditable>{employee.firstname}</td>
        <td contentEditable>{employee.surname}</td>
        <td contentEditable>{employee.contact_number}</td>
        <td contentEditable>{employee.email}</td>
        <td>
          <button className="btn-delete" onClick={() => onDelete(employee)}>&times;</button>
        </td>
      </tr>
    );
  });

  return (
    <tbody>
      {employeeRows}
    </tbody>
  )
}

export default EmployeeTableRow;
