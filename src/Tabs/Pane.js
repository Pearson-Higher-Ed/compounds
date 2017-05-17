import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Pane extends Component {

  static propTypes = {
    label: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired
  }

  render() {
    return (
      <div aria-live="polite">
        {this.props.children}
      </div>
    )
  }
}
