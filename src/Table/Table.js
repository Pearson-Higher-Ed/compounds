import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Table extends Component {

  static propTypes = {
    sortable: PropTypes.bool,
    selectable: PropTypes.bool
  }

  static defaultProps = {
    sortable: false,
    selectable: false
  }

  getChildContext() {
    return {
      table: {},
      selectable: this.props.selectable
    };
  }

  render() {
    const { children, sortable, selectable } = this.props;
    const sortClass = sortable ? ' pe-table--active-headers' :'';
    const selectClass = selectable ? ' pe-table--selectable' :'';

    return (
      <table className={`pe-table${sortClass}${selectClass}`}>
        {children}
      </table>
    )
  }
}

Table.childContextTypes = {
  table: PropTypes.object,
  selectable: PropTypes.bool
};
