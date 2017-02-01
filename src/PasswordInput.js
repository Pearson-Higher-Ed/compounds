import React, { Component } from 'react';

class PasswordInput extends Component {

  constructor(props) {
    super(props)

    this.state = {
      hidePassword       : true,
      passwordStatusText : 'show',
      errorStateModifier : '--label_error',
      inputType          : 'password'
    };

    this.togglePassword = _togglePassword.bind(this);
  };

  // add error prop and move toggle to state...

  render() {
    const { errorStateModifier, passwordStatusText, inputType } = this.state;
    const { id, label, placeholder } = this.props;

    return(
      <div>
        <label className={`pe-textLabelInput__label${errorStateModifier}`} htmlFor={`password${id}`}>{label}</label>
        <input type={inputType} className="pe-textInput" id={`password${id}`} placeholder={placeholder} />
        <button id="showbutton" className="pe-textInput__showButton" onClick={this.togglePassword}>{passwordStatusText}</button>
        <span className="pe-input_underline"></span>
      </div>
    )
  };
};

export default PasswordInput;

function _togglePassword() {

  const { hidePassword, id } = this.state;

  if (hidePassword) {
    document.getElementById(`password${id}`).setAttribute('type', 'text');
    this.setState({passwordStatusText:'hide', hidePassword:false})
  };

  if (!hidePassword) {
    document.getElementById(`password${id}`).setAttribute('type', 'password');
    this.setState({passwordStatusText:'show', hidePassword:true})
  };

};
