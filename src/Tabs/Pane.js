import React, { Component } from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';

export default class Pane extends Component {

  static propTypes = {
    label: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired
  }

  render() {
    const i_id = uuid.v1();

    return (
      <div role="tabpanel" id={i_id}>
        {this.props.children}
      </div>
    )
  }
}
