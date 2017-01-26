import React from 'react'
import { connect } from 'react-redux'

const EmployeeTableRow = ({ employees, onDelete, onUpdate }) => {

  const update = (field, employee, e) => {
    const value = e.target.innerHTML;

    onUpdate(employee, {
      [field]: value
    });
  };

  const employeeRows = employees.map((employee, index) => {
    return (
      <tr key={index}>
        <td contentEditable onBlur={(e) => update('firstname', employee, e)}>{employee.firstname}</td>
        <td contentEditable onBlur={(e) => update('surname', employee, e)}>{employee.surname}</td>
        <td contentEditable onBlur={(e) => update('contact_number', employee, e)}>{employee.contact_number}</td>
        <td contentEditable onBlur={(e) => update('email', employee, e)}>{employee.email}</td>
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
