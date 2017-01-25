import React from 'react'
import { connect } from 'react-redux'

let EmployeeTable = () => {

  return (
    <div className="employee-table-container">
        <header className="employee-table-header">
            <h3 className="title">Employee Data</h3>
            <button type="submit" className="btn btn-load">Load</button>
        </header>
        <table className="table">
            <thead>
                <tr><th>Firstname</th><th>Surname</th><th>Contact Number</th><th>Email</th><th>Delete</th></tr>
            </thead>
            <tbody>
                <tr>
                    <td contentEditable="true">Jim</td><td>Combes</td><td>07788263793</td><td>jim.combes@gamesys.com</td><td><button className="btn-delete">&times;</button></td>
                </tr>
                <tr><td>Jim</td><td>Combes</td><td>07788263793</td><td>jim.combes@gamesys.com</td><td><button className="btn-delete">&times;</button></td></tr>
                <tr><td>Jim</td><td>Combes</td><td>07788263793</td><td>jim.combes@gamesys.com</td><td><button className="btn-delete">&times;</button></td></tr>
                <tr><td>Jim</td><td>Combes</td><td>07788263793</td><td>jim.combes@gamesys.com</td><td><button className="btn-delete">&times;</button></td></tr>
            </tbody>
        </table>
    </div>
  )
}

export default EmployeeTable