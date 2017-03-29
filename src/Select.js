import React, { PropTypes } from 'react';
import { Icon }             from '../index.js';


const Select = (props) => {

    const { id, fancy, labelText, inputType, options, infoMessage, errorMessage } = props;

    const containerStyle = fancy ? "pe-select-container--fancy" : "pe-select-container";

    let labelStyle    = '';
    let selectStyle   = '';
    let spanStyle     = '';
    let disabledStyle = '';

    switch (inputType) {
      case 'error':
        labelStyle  = 'pe-textLabelInput__label--label_error';
        selectStyle = (fancy) ? 'pe-textInput--input_error' : 'pe-textInput--basic_error';
        spanStyle   = (fancy) ? 'pe-inputError_underline'    : '';
        break;
      case 'disabled':
        labelStyle    = 'pe-textLabelInput__label--label-disabled';
        selectStyle   = (fancy) ? 'pe-textInput' : 'pe-selectInput--basic';
        spanStyle     = '';
        disabledStyle = 'disabled';
        break;
      case 'readOnly':
        labelStyle    = 'pe-textLabelInput__label';
        selectStyle   = 'pe-textInput--input_readonly';
        spanStyle     = '';
        disabledStyle = 'disabled';
        break;
      default:
        labelStyle  = 'pe-textLabelInput__label';
        selectStyle = (fancy) ? 'pe-textInput'       : 'pe-selectInput--basic';
        spanStyle   = (fancy) ? 'pe-input_underline' : '';
    };

    return (
      <div>
        <label className={labelStyle} htmlFor={id}>{labelText}</label>
        <div className={containerStyle}>
          <select className={selectStyle} id={id} disabled={disabledStyle}>
            {options.map((o, i) => <option key={i}>{o}</option>)}
          </select>
          <Icon name="dropdown-open-18" />
        </div>
        {fancy && <span className={spanStyle} />}
        {infoMessage  && <span className="pe-input--info_message">{infoMessage}</span>}
        {errorMessage && <span className="pe-input--error_message">{errorMessage}</span>}
      </div>
    );

};


export default Select;


Select.propTypes = {
  id           : PropTypes.string,
  fancy        : PropTypes.bool,
  labelText    : PropTypes.string,
  infoMessage  : PropTypes.string,
  errorMessage : PropTypes.string,
  options      : PropTypes.array
};
