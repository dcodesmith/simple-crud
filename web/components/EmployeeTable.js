import React from 'react'
import { connect } from 'react-redux'
import TableHeader from '../containers/EmployeeTableHeader';
// import TableRow from './EmployeeTableRow';
import TableRow from '../containers/EmployeeRow';

const EmployeeTable = ({ onLoad }) => {

  return (
    <div className="employee-table-container">
        <header className="employee-table-header">
            <h3 className="title">Employee Data</h3>
            <button type="submit" className="btn btn-load" onClick={onLoad}>Load</button>
        </header>
        <table className="table">
            <TableHeader />
            <TableRow />
        </table>
    </div>
  )
}

export default EmployeeTable;
