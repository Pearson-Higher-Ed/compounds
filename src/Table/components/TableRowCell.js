import React from 'react';
import PropTypes from 'prop-types';

const TableRowCell = (props, context) => {
  const { children } = props;
  const { table } = context;
  return (
    <td>
      {children}
    </td>
  )
}

export default TableRowCell;

TableRowCell.propTypes = {
  children: PropTypes.node
}

TableRowCell.contextTypes = {
  table: PropTypes.object
}
