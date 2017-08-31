import React, { Component } from 'react';

export default class TableBody extends Component {

  getChildContext() {
    return {
      table: {
        body: true
      }
    };
  }

  render() {
    const { children } = this.props

    return (
      <tbody>
        {children}
      </tbody>
    )
  }
}

TableBody.contextTypes = {
  table: PropTypes.object
}

TableBody.childContextTypes = {
  table: PropTypes.object
}
