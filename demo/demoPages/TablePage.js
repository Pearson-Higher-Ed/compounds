import React from 'react';
import { Table, TableHead, TableRow, TableHeaderCell, TableBody, TableRowCell } from '../../index';

const TablePage = () => (
  <div style={{padding: 16}}>
    <Table>
      <TableHead>
        <TableRow>
          <TableHeaderCell>
            <div className="pe-checkbox" id="comic_select">
              <input type="checkbox" id="comic_select_0" />
              <label htmlFor="comic_select_0">Select</label>
              <span> &#8211; </span>
            </div>
          </TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableRowCell>
            <div className="pe-checkbox">
              <input type="checkbox" id="c1" aria-labelledby="comic_select sel_Spirou" />
              <label htmlFor="c1"> </label>
              <span>
                <svg aria-hidden="true"
                     focusable="false"
                     className="pe-icon--check-sm-18">
                  <use xlinkHref="#check-sm-18"></use>
                </svg>
              </span>
            </div>
          </TableRowCell>
        </TableRow>
      </TableBody>
    </Table>
  </div>
);

export default TablePage;
