import React, { PropTypes } from 'react';
import { Icon }             from '../index.js';


const Select = (props) => {

    const { id, fancy, labelText, inputState, options, infoMessage, errorMessage } = props;

    let containerStyle = '';
    let labelStyle     = '';
    let selectStyle    = '';
    let spanStyle      = '';
    let disabledStyle  = '';

    switch (inputState) {
      case 'error':
        labelStyle     = 'pe-textLabelInput__label--label_error';
        selectStyle    = fancy ? 'pe-selectInput-fancy-input_error' : 'pe-select--basic_error';
        spanStyle      = fancy ? 'pe-inputError_underline'          : '';
        containerStyle = fancy ? "pe-select-container--fancy"       : 'pe-select-container-error';
        break;
      case 'disabled':
        labelStyle     = 'pe-textLabelInput__label--label-disabled';
        selectStyle    = fancy ? 'pe-selectInput--fancy'      : 'pe-selectInput--disabled';
        spanStyle      = '';
        disabledStyle  = 'disabled';
        containerStyle = fancy ? 'pe-select-container--fancy' : 'pe-select-container';
        break;
      case 'readOnly':
        labelStyle     = 'pe-textLabelInput__label';
        selectStyle    = fancy ?'pe-selectInput--fancy' : 'pe-selectInput--disabled';
        spanStyle      = '';
        disabledStyle  = 'disabled';
        containerStyle = fancy ? 'pe-select-container-disabled--fancy' : 'pe-select-container';
        break;
      default:
        labelStyle     = 'pe-textLabelInput__label';
        selectStyle    = fancy ? 'pe-selectInput--fancy'      : 'pe-selectInput--basic';
        spanStyle      = fancy ? 'pe-input_underline'         : '';
        containerStyle = fancy ? 'pe-select-container--fancy' : 'pe-select-container';
    };

    return (
      <div>
        <label className={labelStyle} htmlFor={id}>{labelText}</label>
        <div className={containerStyle}>
          <select className={selectStyle} id={id} disabled={disabledStyle}>
            {options.map((o, i) => <option key={i}>{o}</option>)}
          </select>
          {fancy && <span className={spanStyle} />}
          <Icon name="dropdown-open-18" />
        </div>
        {infoMessage  && <span className='pe-input--info_message'>{infoMessage}</span>}
        {errorMessage && <span className='pe-input--error_message'>{errorMessage}</span>}
      </div>
    );

};


export default Select;


Select.propTypes = {
  id           : PropTypes.string,
  labelText    : PropTypes.string,
  infoMessage  : PropTypes.string,
  errorMessage : PropTypes.string,
  options      : PropTypes.array,
  fancy        : PropTypes.bool
};
