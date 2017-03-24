import React, { Component, PropTypes } from 'react';

class PasswordInput extends Component {

  constructor(props) {
    super(props)

    this.state = {
      passwordStatusText : props.showText,
      inputType          : 'password'
    };

    this.togglePassword = _togglePassword.bind(this);
  };

  render() {
    const { passwordStatusText, inputType, defaultLabel } = this.state;
    const { id, label, placeholder, error } = this.props;

    const appliedLabelStyle = (error) ? 'pe-textLabelInput__label--label_error' : 'pe-textLabelInput__label';
    const appliedStyleLine  = (error) ? 'pe-inputError_underline' : 'pe-input_underline';
    const appliedInputStyle = (error) ? 'pe-textInput--input_error' : 'pe-textInput';

    return(
      <div>
        <label className={appliedLabelStyle} htmlFor={`password-${id}`}>{label}</label>
        <input type={inputType} className={appliedInputStyle} id={`password-${id}`} placeholder={placeholder} />
        <span className={appliedStyleLine}></span>
        <button id="showbutton" className="pe-textInput__showButton" onClick={this.togglePassword}>{passwordStatusText}</button>
      </div>
    )
  };
};


export default PasswordInput;


PasswordInput.propTypes = {
  error       : PropTypes.bool,
  id          : PropTypes.string,
  label       : PropTypes.string,
  placeholder : PropTypes.string,
  showText    : PropTypes.string,
  hideText    : PropTypes.string
};


function _togglePassword() {
  const { showText, hideText } = this.props;
  const inputType = (this.state.inputType === 'password') ? 'text' : 'password';
  const passwordStatusText = (this.state.passwordStatusText === showText) ? hideText : showText;
  this.setState({inputType, passwordStatusText})
};
