import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon';

import './StaticAlert.scss';

export default class StaticAlert extends Component {

  static propTypes = {
    type: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired
  }

  constructor(props) {
    super(props)

    this.state = {
      isOpen: true,
      opacity: 1
    }
  }

  handleClose = () => {
    this.setState({
      isOpen: false,
      opacity: 0
    });
  }

  renderAlert = () => (
    <div opacity={this.state.opacity}
         style={{border: '1px solid black', height: 200}}
         onClick={this.handleClose}>
      <p>WOOOOOOO</p>
    </div>
  )

  render() {

    return (
      <div>
        <p>Hi</p>
        {this.state.isOpen && this.renderAlert()}
      </div>
    )
  }
}
