import React, { Component } from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';

export default class Pane extends Component {

  static propTypes = {
    label: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired,
    onActive: PropTypes.func
  }

  componentDidUpdate() {
    if (this.props.onActive) this.props.onActive();
  }

  render() {
    const { onActive } = this.props;
    const i_id = uuid.v1();

    return (
      <div role="tabpanel" id={i_id}>
        {this.props.children}
      </div>
    )
  }
}
