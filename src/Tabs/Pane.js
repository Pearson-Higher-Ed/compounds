import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Pane extends Component {

  static propTypes = {
    label: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

export default Pane;
