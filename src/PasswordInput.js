import React, { Component } from 'react';

class PasswordInput extends Component {

  constructor(props) {
    super(props)

    this.state = {
      hidePassword : true,
      passwordStatusText:'show'
    };

    this.togglePassword = _togglePassword.bind(this);
  };

  render() {
    return(
      <div>

        <label class="pe-textLabelInput__label" for={this.props.id}>{this.props.label}</label>
        <input type="text" class="pe-textInput" id={this.props.id} placeholder={this.props.label} />
        <a id="showbutton" className="pe-textInput__showButton" onClick={this.togglePassword}>{this.state.passwordStatusText}</a>
        <span class="pe-input_underline"></span>

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
