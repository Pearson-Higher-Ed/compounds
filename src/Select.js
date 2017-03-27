import React, { Component, PropTypes } from 'react';
import { Icon }                        from '../index.js'


const Select = (props) => {

    const { id, labelText, options } = props;

    let optionsList = [];

    for (let o in options) {
      optionsList.push(<option key={optionsList.length} value={options[o]}>{o}</option>);
    }


    return (
      <div>
        <label className="pe-textLabelInput__label" htmlFor={id}>{labelText}</label>
        <div className="pe-select-container">
          <select className="pe-selectInput--basic" id={id}>
            {optionsList}
          </select>
          <Icon name="dropdown-open-18" />
        </div>
      </div>
    )

}


export default Select;


Select.propTypes = {
  id       : PropTypes.string,
  label    : PropTypes.string,
  options  : PropTypes.object
};
