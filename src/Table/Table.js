import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Table extends Component {

  getChildContext() {
    return {
      table: {}
    };
  }

  render() {
    const { children } = this.props;

    return (
      <table className="pe-table pe-table--selectable">
        {children}
      </table>
    )
  }
}

Table.childContextTypes = {
  table: PropTypes.object
};
