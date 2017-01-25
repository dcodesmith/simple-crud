import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

class App extends React.Component {

  render() {
    console.log(this.props.children)

    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object,
  loading: PropTypes.bool.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    loading: state.ajaxCallsInProgress > 0
  };
}

export default connect(mapStateToProps)(App);