import React from 'react';
import { Table,
         TableHead,
         TableRow,
         TableHeaderCell,
         TableBody,
         TableRowCell } from '../../index';

const TablePage = () => (
  <div className="displaySection">
    <h2><a href="http://pearson-higher-ed.github.io/design/c/tables/" target="_blank">Table</a></h2>
    <Table selectable sortable>
      <TableHead>
        <TableRow>
          <TableHeaderCell
            inputId="comic_select_0"
            containerId="comic_select"
            inputLabel="Select"
          />
          <TableHeaderCell columnSort={() => console.log('woo')}>Comic</TableHeaderCell>
          <TableHeaderCell>Main characters</TableHeaderCell>
          <TableHeaderCell>Country</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableRowCell
            inputId="c1"
            containerId="comic_select"
            labelledbyId="sel_Spirou"
          />
          <TableRowCell cellId="sel_Spirou">Spirou</TableRowCell>
          <TableRowCell>Spirou, Fantasio</TableRowCell>
          <TableRowCell>Belgium</TableRowCell>
        </TableRow>
        <TableRow>
          <TableRowCell
            inputId="c2"
            containerId="comic_select"
            labelledbyId="sel_sew"
          />
          <TableRowCell cellId="sel_sew">Suske en Wiske</TableRowCell>
          <TableRowCell>Suske, Wiske, Tante Sidonia, Krimson</TableRowCell>
          <TableRowCell>Belgium</TableRowCell>
        </TableRow>
      </TableBody>
    </Table>
  </div>
);

export default TablePage;
