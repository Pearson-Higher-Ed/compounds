import React from 'react';
import Icon from '../Icon';

const Sortable = () => {
  return (
    <div>
      <h3 className="pe-table-caption">Sort Supervillains From Best To Worst</h3>
      <table className="pe-table pe-table--active-headers">
      <thead>
        <tr>
          <th scope="col" aria-sort="ascending">
            <span>Name</span>
            <button type="button" className="pe-icon--btn">
              <Icon name="sort-up-18">Sorted ascending</Icon>
            </button>
          </th>
          <th scope="col">
            Country
          </th>
          <th scope="col" className="pe-table__center" aria-sort="none">
            <span>Team</span>
            <button type="button" className="pe-icon--btn">
              <Icon name="sortable-18">Unsorted</Icon>
            </button>
          </th>
          <th scope="col" className="pe-table__right" aria-sort="descending">
            <span>Net Worth (in bazillions)</span>
            <button type="button" className="pe-icon--btn">
              <Icon name="sort-down-18">Sorted descending</Icon>
            </button>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">Mark Zuckerberg</th>
          <td>United States</td>
          <td className="pe-table__center">SpyFace</td>
          <td className="pe-table__right">62</td>
        </tr>
        <tr>
          <th scope="row">William Randall Hearst</th>
          <td>United States</td>
          <td className="pe-table__center">Yellow Journalists </td>
          <td className="pe-table__right">30</td>
        </tr>
        <tr>
          <th scope="row">(Keith) Rupert Murdoch</th>
          <td>Australia</td>
          <td className="pe-table__center">Foxxxy Foxes</td>
          <td className="pe-table__right">13</td>
        </tr>
        <tr>
          <th scope="row">Mao Zedong</th>
          <td>China</td>
          <td className="pe-table__center">LAMAO</td>
          <td className="pe-table__right">0</td>
        </tr>
      </tbody>
      </table>
    </div>
  )
}

export default Sortable;
