import React, { PropTypes } from 'react';


const MultiLineText = (props) => {

    const { id, labelText, placeholder, infoMessage, errorMessage, inputState } = props;

    let labelStyle = '';
    let inputStyle = '';
    let spanStyle  = '';

    switch (inputState) {
      case 'error':
        labelStyle = 'pe-textLabelInput__label--label_error';
        inputStyle = 'pe-multiLineText--error';
        break;
      case 'disabled':
        labelStyle = 'pe-textLabelInput__label--label-disabled';
        inputStyle = 'pe-multiLineText--disabled';
        break;
      case 'readOnly':
        labelStyle = 'pe-textLabelInput__label';
        inputStyle = 'pe-multiLineText--readOnly';
        break;
      default:
        labelStyle = 'pe-textLabelInput__label';
        inputStyle = 'pe-multiLineText';
    };

    return (
      <div>
        <label className={labelStyle} htmlFor={id}>{labelText}</label>
        <textarea className={inputStyle} id={id} cols="30" rows="5" placeholder={placeholder} disabled={inputState === 'disabled' || inputState === 'readOnly'}></textarea>
        {infoMessage  && <span className="pe-input--info_message">{infoMessage}</span>}
        {errorMessage && <span className="pe-input--error_message">{errorMessage}</span>}
      </div>
    )

};


export default MultiLineText;


MultiLineText.propTypes = {
  id           : PropTypes.string,
  labelText    : PropTypes.string,
  placeholder  : PropTypes.string,
  infoMessage  : PropTypes.string,
  errorMessage : PropTypes.string
};
