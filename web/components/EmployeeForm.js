import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux'
import { createEmployee } from '../actions';

// TODO - Implement client side validation

class EmployeeForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      employee: {
        firstname: '',
        surname: '',
        contact_number: '',
        email: ''
      },
      errors: {
        firstname: [],
        surname: [],
        contact_number: [],
        email: []
      }
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.isValid = this.isValid.bind(this);

  }

  handleChange(field, e) {
    let { employee } = this.state;

    employee = Object.assign({}, employee, { [field]: e.target.value });

    this.setState({ employee });
  }

  isValid() {
    console.log(this.state.employee);
    return;
  }

  onSubmit(e) {
    const { employee, errors } = this.state;
    const { dispatch } = this.props;

    e.preventDefault();

    dispatch(createEmployee(employee));
  }

  render() {
    const { errors } = this.state;

    return (
      <form className="form" onSubmit={this.onSubmit}>
        <div className="row">
            <input type="text" name="firstname" className="input-field" placeholder="Firstname" onChange={(evt) => this.handleChange('firstname', evt)} />

            <input type="text" name="surname" className="input-field" placeholder="Surname" onChange={(evt) => this.handleChange('surname', evt)} />
        </div>
        <div className="row">
            <input type="text" name="contact_number" className="input-field" placeholder="Contact Number" onChange={(evt) => this.handleChange('contact_number', evt)}
            />
            <input type="text" name="email" className="input-field" placeholder="Email" onChange={(evt) => this.handleChange('email', evt)} />
        </div>
        <div className="row">
            <button type="submit" className="btn submit-btn">Add</button>
        </div>
      </form>
    );
  }

}

EmployeeForm = connect()(EmployeeForm)

export default EmployeeForm;
