import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

class Bio extends Component {
  render() {
    console.log("render Bio: " + this.props.location.pathname);
    return (
      <div>
        <h2>BIO</h2>
      </div>
    );
  }

  static propTypes = {   
    location: PropTypes.object.isRequired 
  }
}

export default withRouter(Bio);
