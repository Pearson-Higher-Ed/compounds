import React from 'react';
import PropTypes from 'prop-types';

const TableHeaderCell = (props, context) => {
  const { children, scope } = props;
  const { table } = context;

  return (
    <th scope={scope}>
      {children}
    </th>
  )
}

export default TableHeaderCell;

TableHeaderCell.propTypes = {
  children: PropTypes.node,
  scope: PropTypes.string
}

TableHeaderCell.defaultProps = {
  scope: 'col'
}

TableHeaderCell.contextTypes = {
  table: PropTypes.object
}
