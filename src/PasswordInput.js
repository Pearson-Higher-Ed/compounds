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
    return(
      <div>
        <label className={`pe-textLabelInput__label${this.state.errorStateModifier}`} htmlFor={`password${this.props.id}`}>{this.props.label}</label>
        <input type={this.state.inputType} className="pe-textInput" id={`password${this.props.id}`} placeholder={this.props.placeholder} />
        <a id="showbutton" className="pe-textInput__showButton" onClick={this.togglePassword}>{this.state.passwordStatusText}</a>
        <span className="pe-input_underline"></span>
      </div>
    )
  };
};

export default PasswordInput;

function _togglePassword() {

  if (this.state.hidePassword) {
    document.getElementById('password').setAttribute('type', 'text');
    this.setState({passwordStatusText:'hide', hidePassword:false})
  };

  if (!this.state.hidePassword) {
    document.getElementById('password').setAttribute('type', 'password');
    this.setState({passwordStatusText:'show', hidePassword:true})
  };

};
