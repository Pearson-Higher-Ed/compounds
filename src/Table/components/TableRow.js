import React from 'react';
import PropTypes from 'prop-types';

const TableRow = (props, context) => {
  const className = null;
  const { children } = props;
  const { table } = context;

  const onChange = () => {
    const tables = document.querySelectorAll('.pe-table--selectable');
    for (let i=0; i< tables.length; i++) {
      let table = tables[i];
      let tbody = table.getElementsByTagName('tbody')[0];
      let trs = [].slice.call(tbody.getElementsByTagName('TR'));

      trs.forEach((tr) => {
        let thisTR = tr;
        let input = tr.getElementsByTagName('INPUT')[0];
        if (input && input.type === 'checkbox') {
          if (input.checked) {
            tr.classList.add('selected');
           } else {
            tr.classList.remove('selected');
          }
        }
      });
    }
}

  return (
    <tr className={className} onChange={onChange}>
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
