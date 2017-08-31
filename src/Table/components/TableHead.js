import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TableHead extends Component {

  getChildContext() {
    return {
      table: {
        head: true
      }
    };
  }

  render() {
    const { children } = this.props;

    return (
      <thead>
        {children}
      </thead>
    )
  }
}

TableHead.contextTypes = {
  table: PropTypes.object
}

TableHead.childContextTypes = {
  table: PropTypes.object
}
