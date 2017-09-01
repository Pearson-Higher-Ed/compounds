import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../../Icon';

const TableHeaderCell = (props, context) => {
  const { children, scope, inputId, containerId, inputLabel } = props;
  const { table, selectable } = context;

  return (
    <th scope={scope}>
      { selectable && !children
          ?  <div className="pe-checkbox" id={containerId}>
               <input type="checkbox" id={inputId} />
               <label htmlFor={inputId}>{inputLabel}</label>
               <span>
                 <Icon name="check-sm-18" />
               </span>
             </div>
          : children
      }
    </th>
  )
}

export default TableHeaderCell;

TableHeaderCell.propTypes = {
  children: PropTypes.node,
  scope: PropTypes.string,
  inputId: PropTypes.string,
  containerId: PropTypes.string,
  inputLabel: PropTypes.string
}

TableHeaderCell.defaultProps = {
  scope: 'col'
}

TableHeaderCell.contextTypes = {
  table: PropTypes.object,
  selectable: PropTypes.bool
}
