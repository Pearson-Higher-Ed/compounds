import React, { PropTypes } from 'react';


const TextInput = (props) => {

  const { inputType, basic, id, labelText, placeholder, infoMessage, errorMessage } = props;

  let labelStyle = '';
  let inputStyle = '';
  let spanStyle  = '';


  switch (inputType) {
    case 'error':
      labelStyle = 'pe-textLabelInput__label--label_error';
      inputStyle = (!basic) ? 'pe-textInput--input_error' : 'pe-textInput--basic_error';
      spanStyle  = (!basic) ? 'pe-inputError_underline'   : '';
      break;
    case 'disabled':
      labelStyle = 'pe-textLabelInput__label--label-disabled';
      inputStyle = (!basic) ?'pe-textInput' : 'pe-textInput--basic';
      spanStyle  = (!basic) ? ''            : '';
      break;
    case 'readOnly':
      labelStyle = 'pe-textLabelInput__label';
      inputStyle = (!basic) ? 'pe-textInput--input_readonly' : '';
      spanStyle  = (!basic) ? ''                             : '';
      break;
    default:
      labelStyle = 'pe-textLabelInput__label';
      inputStyle = (!basic) ? 'pe-textInput'       : 'pe-textInput--basic';
      spanStyle  = (!basic) ? 'pe-input_underline' : '';
  };


  return (
    <div>
      <label className={labelStyle} htmlFor={id}>{labelText}</label>

      <input
        id          = {id}
        type        = "text"
        placeholder = {placeholder}
        className   = {inputStyle}
        disabled    = {inputType === 'disabled' ? 'disabled' : false}
        readOnly    = {inputType === 'readonly' ? 'readOnly' : false}
        />

      <span className={spanStyle} />
      {infoMessage && <span className="pe-input--error_message">{infoMessage}</span>}
      <br />
      {errorMessage && <span className="pe-input--error_message">{errorMessage}</span>}
    </div>
  );

};

export default TextInput;


TextInput.propTypes = {
  inputType    : PropTypes.string,
  id           : PropTypes.string,
  labelText    : PropTypes.string,
  placeholder  : PropTypes.string,
  infoMessage  : PropTypes.string,
  errorMessage : PropTypes.string,
  basic        : PropTypes.bool
};
