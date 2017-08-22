import React from 'react';
import Icon from '../Icon';

const Selectable = () => {

  return (
    <div>
    <table className="pe-table pe-table--selectable">
    <caption className="pe-table__left">The Best Comics (sorry no Smurfs)</caption>
    <thead>
      <tr>
        <th scope="col">
          <div classNameName="pe-checkbox" id="comic_select">
            <input type="checkbox" id="comic_select_0" />
            <label htmlFor="comic_select_0">Select</label>
            <span> &#8211; </span>
          </div>
        </th>
        <th scope="col">Comic</th>
        <th scope="col">Main characters</th>
        <th scope="col">Country of Origin</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <div className="pe-checkbox">
            <input type="checkbox" id="c1" aria-labelledby="comic_select sel_Spirou" />
            <label htmlFor="c1"> </label>
            <span>
              <Icon name="check-sm-18" />
            </span>
          </div>
        </td>
        <td id="sel_Spirou">Spirou</td>
        <td><p>Spirou, Fantasio</p>
            <p>(Robbedoes, Kwabbernoot)</p>
        </td>
        <td>Belgium</td>
      </tr>
      <tr>
        <td>
          <div className="pe-checkbox">
            <input type="checkbox" id="c2" aria-labelledby="comic_select sel_sew" />
            <label htmlFor="c2"> </label>
            <span>
              <Icon name="check-sm-18" />
            </span>
          </div>
        </td>
        <td id="sel_sew">Suske en Wiske</td>
        <td><p>Suske, Wiske, Tante Sidonia, Krimson</p>
            <p>(Bob, Bobette, Tante Sido, Crimson)</p>
        </td>
        <td>Belgium</td>
      </tr>
      <tr>
        <td>
          <div className="pe-checkbox">
            <input type="checkbox" id="c3" aria-labelledby="comic_select sel_ll" />
            <label htmlFor="c3"> </label>
            <span>
              <Icon name="check-sm-18" />
            </span>
          </div>
        </td>
        <td id="sel_ll">Lucky Luke</td>
        <td>Lucky Luke, Jolly Jumper, Rantanplan</td>
        <td>Belgium</td>
      </tr>
      <tr>
        <td>
          <div className="pe-checkbox">
            <input type="checkbox" id="c4" aria-labelledby="comic_select sel_ch" checked />
            <label htmlFor="c4"> </label>
            <span>
              <Icon name="check-sm-18" />
            </span>
          </div>
        </td>
        <td id="sel_ch">Calvin and Hobbes</td>
        <td><p>Calvin, Hobbes, Suzy</p>
            <p>(Casper, Hobbes, Inge)</p>
        </td>
        <td>United States</td>
      </tr>
      <tr>
        <td>
          <div className="pe-checkbox">
            <input type="checkbox" id="c5" aria-labelledby="comic_select sel_ax" />
            <label htmlFor="c5"> </label>
            <span>
              <Icon name="check-sm-18" />
            </span>
          </div>
        </td>
        <td id="sel_ax">Asterix</td>
        <td>Asterix, Obelix, Panoramix</td>
        <td>France</td>
      </tr>
      <tr>
        <td>
          <div className="pe-checkbox">
            <input type="checkbox" id="c6" aria-labelledby="comic_select sel_guus" />
            <label htmlFor="c6"> </label>
            <span>
              <Icon name="check-sm-18" />
            </span>
          </div>
        </td>
        <td id="sel_guus">Gaston</td>
        <td><p>Gaston Lagaffe, Fantasio, Jules-de-chez-Smith-en-face</p>
            <p>(Guust Flater, Kwabbernoot, Joost-van-Smith-aan-de-overkant)</p>
        </td>
        <td>Belgium</td>
      </tr>
    </tbody>
    </table>
    </div>
  )
}

export default Selectable;
