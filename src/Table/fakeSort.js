// NOT A REAL FILE

import React from 'react';

const FakeSort = () => (
  <div>
  <h3 className="pe-table-caption">Sort Supervillains From Best To Worst</h3>
  <table className="pe-table pe-table--active-headers">
    <thead>
      <tr>
        <th scope="col" aria-sort="ascending">
          <span>Name</span>
          <button type="button" className="pe-icon--btn">
            <svg role="img"
                 focusable="false"
                 aria-labelledby="s1"
                 className="pe-icon--sort-up-18">
              <title id="s1">Sorted ascending</title>
              <use xlinkHref="#sort-up-18"></use>
            </svg>
          </button>
        </th>
        <th scope="col">
          Country
        </th>
        <th scope="col" className="pe-table__center" aria-sort="none">
          <span>Team</span>
          <button type="button" className="pe-icon--btn">
            <svg role="img"
                 focusable="false"
                 aria-labelledby="s2"
                 className="pe-icon--sortable-18">
              <title id="s2">Unsorted</title>
              <use xlinkHref="#sortable-18"></use>
            </svg>
          </button>
        </th>
        <th scope="col" className="pe-table__right" aria-sort="descending">
          <span>Net Worth (in bazillions)</span>
          <button type="button" className="pe-icon--btn">
            <svg role="img"
                 focusable="false"
                 aria-labelledby="s3"
                 className="pe-icon--sort-down-18">
              <title id="s3">Sorted Descending</title>
              <use xlinkHref="#sort-down-18"></use>
            </svg>
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

export default FakeSort;
