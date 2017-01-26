import React from 'react'
import { connect } from 'react-redux'

const EmployeeTableRow = ({ employees, onDelete, onUpdate }) => {

  const update = (field, employee, e) => {
    const o = {};
    const value = e.target.innerHTML;

    o[field] = e.target.innerHTML;
    onUpdate(employee, o);
  };

  const employeeRows = employees.map((employee, index) => {
    return (
      <tr key={index}>
        <td contentEditable onBlur={(e) => update('firstname', employee, e)}>{employee.firstname}</td>
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
