import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../../Icon';

// some check for columnSort; put the <Icon /> next to children

const TableHeaderCell = (props, context) => {
  const { children, scope, inputId, containerId, inputLabel, columnSort } = props;
  const { table, selectable } = context;

  return (
    <th scope={scope}>
      {
        selectable && !children
          ?  <div className="pe-checkbox" id={containerId}>
               <input type="checkbox" id={inputId} />
               <label htmlFor={inputId}>{inputLabel}</label>
               <span>
                 <Icon name="check-sm-18" />
               </span>
             </div>
          : children
      }
      {
        columnSort &&
          <button type="button" className="pe-icon--btn">
            <Icon name="sortable-18" />
          </button>
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
  inputLabel: PropTypes.string,
  columnSort: PropTypes.bool
}

TableHeaderCell.defaultProps = {
  scope: 'col',
  columnSort: false
}

TableHeaderCell.contextTypes = {
  table: PropTypes.object,
  selectable: PropTypes.bool
}
