import React, { Component } from 'react';

class PasswordInput extends Component {

  constructor(props) {
    super(props)

    this.state = {
      passwordStatusText : 'show',
      inputType          : 'password',
      defaultLabel       : 'Password'
    };

    this.togglePassword = _togglePassword.bind(this);
  };

  render() {
    const { passwordStatusText, inputType, defaultLabel } = this.state;
    const { id, label, placeholder, error } = this.props;

    const appliedLabelStyle = (error) ? 'pe-textLabelInput__label--label_error' : 'pe-textLabelInput__label';
    const appliedStyleLine  = (error) ? 'pe-inputError_underline' : 'pe-input_underline';
    const appliedInputStyle = (error) ? 'pe-textInput--input_error' : 'pe-textInput';
    const appliedLabel      = (label) ? label : defaultLabel;

    return(
      <div>
        <label className={appliedLabelStyle} htmlFor={`password-${id}`}>{appliedLabel}</label>
        <input type={inputType} className={appliedInputStyle} id={`password-${id}`} placeholder={placeholder} />
        <span className={appliedStyleLine}></span>
        <button id="showbutton" className="pe-textInput__showButton" onClick={this.togglePassword}>{passwordStatusText}</button>
      </div>
    )
  };
};

export default PasswordInput;

function _togglePassword() {
  const inputType = (this.state.inputType === 'password') ? 'text' : 'password';
  const passwordStatusText = (this.state.passwordStatusText === 'show') ? 'hide' : 'show';
  this.setState({inputType, passwordStatusText})
};
