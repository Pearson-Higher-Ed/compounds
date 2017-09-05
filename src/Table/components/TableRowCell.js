import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../../Icon';

const TableRowCell = (props, context) => {
  const { children, inputId, containerId, cellId, labelledbyCellId } = props;
  const { selectable } = context;
  return (
    <td id={cellId}>
      { selectable && !children
        ? <div className="pe-checkbox">
            <input type="checkbox" id={inputId} aria-labelledby={`${containerId} ${labelledbyCellId}}`} />
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
  labelledbyCellId: PropTypes.string
}

TableRowCell.contextTypes = {
  selectable: PropTypes.bool
}
