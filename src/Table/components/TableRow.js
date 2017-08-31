import React from 'react';
import PropTypes from 'prop-types';

const TableRow = (props, context) => {
  const className = '';
  const { children } = props;
  const { table } = context;

  return (
    <tr className={className}>
      {children}
    </tr>
  )
}

export default TableRow;

TableRow.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
}

TableRow.contextTypes = {
  table: PropTypes.object
}
