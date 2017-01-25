import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
// import _ from 'lodash';
import { bindActionCreators } from 'redux';
import * as actions from '../actions';

import EmployeeForm from '../components/EmployeeForm';
import EmployeeTable from '../components/EmployeeTable';

class Index extends Component {
  constructor(props, context) {
    super(props, context);

    this.onRead = this.onRead.bind(this);
    this.onUpdate = this.onUpdate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onDelete = this.onDelete.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
    alert('onSubmit');
  }

  onDelete(email) {
    alert(email);
    // this.props.actions.deleteEmployee(email);
  }

  onUpdate() {}

  onRead() {}

  render() {
    const { employees } = this.props;
    const isUploading = false;

    return (
      <div className="container">
        <EmployeeForm onSubmit={this.onSubmit} />
        <EmployeeTable />        
      </div>
    );
  }
}

Index.propTypes = {
  employees: PropTypes.array,
  actions: PropTypes.object.isRequired,
};

function mapStateToProps(state, ownProps) {
  const { employees } = state;

  // from reducer/index.js

  return { employees };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);