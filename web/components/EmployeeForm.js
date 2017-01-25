import React from 'react'
import { connect } from 'react-redux'

let EmployeeForm = ({ onSubmit }) => {

  return (
      <form className="form" onSubmit={onSubmit}>
        <div className="row">
            <input type="text" className="input-field" placeholder="Firstname" />
            <input type="text" className="input-field" placeholder="Surname" />
        </div>
        <div className="row">
            <input type="text" className="input-field" placeholder="Contact Number" />
            <input type="text" className="input-field" placeholder="Email" />
        </div>
        <div className="row">
            <button type="submit" className="btn submit-btn">Add</button>
        </div>
    </form>
  )
}

export default EmployeeForm