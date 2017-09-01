import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../../Icon';

const TableRowCell = (props, context) => {
  const { children, inputId, containerId, cellId, labelledbyId } = props;
  const { table, selectable } = context;
  return (
    <td id={cellId}>
      { selectable && !children
        ? <div className="pe-checkbox">
            <input type="checkbox" id={inputId} aria-labelledby={`${containerId} ${labelledbyId}}`} />
            <label htmlFor={inputId}> </label>
            <span>
              <Icon name="check-sm-18" />
            </span>
          </div>
        : children }
    </td>
  )
}

export default TableRowCell;

TableRowCell.propTypes = {
  children: PropTypes.node,
  inputId: PropTypes.string,
  containerId: PropTypes.string,
  cellId: PropTypes.string,
  labelledbyId: PropTypes.string
}

TableRowCell.contextTypes = {
  table: PropTypes.object,
  selectable: PropTypes.bool
}
