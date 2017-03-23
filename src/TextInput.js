import React from 'react';

const TextInput = (props) => {

  const { inputType, id, label, placeholder } = props;

  let labelStyle = '';
  let inputStyle = '';
  let spanStyle  = '';


  switch (inputType) {
  case 'default':
    labelStyle = 'pe-textLabelInput__label';
    inputStyle = 'pe-textInput';
    spanStyle  = 'pe-input_underline';
    break;
  case 'error':
    labelStyle = 'pe-textLabelInput__label--label_error';
    inputStyle = 'pe-textInput--input_error';
    spanStyle  = 'pe-inputError_underline';
    break;
  case 'disabled':
    labelStyle = 'pe-textLabelInput__label--label-disabled';
    inputStyle = 'pe-textInput';
    spanStyle  = '';
    break;
  case 'readOnly':
    labelStyle = 'pe-textLabelInput__label';
    inputStyle = 'pe-textInput--input_readonly';
    spanStyle  = '';
    break;
  default:
    labelStyle = 'pe-textLabelInput__label';
    inputStyle = 'pe-textInput';
    spanStyle  = '';
  }


  return(
  <div>
    <label className={`${labelStyle}`} htmlFor={id}>{label}</label>

    <input
      type        ="text"
      className   ={`${inputStyle}`}
      id          ={id}
      placeholder ={placeholder}
      disabled    ={inputType === 'disabled' ? 'disabled' : false}
      readOnly    ={inputType === 'readonly' ? 'readOnly' : false}
    />

    <span className={`${spanStyle}`} />
  </div>
)}

export default TextInput;
