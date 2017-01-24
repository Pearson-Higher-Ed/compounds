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

        <label class="pe-textLabelInput__label" for="a">First Name</label>
        <input type="text" class="pe-textInput" id="a" placeholder="First Name" />
        <button id="showbutton" className="pe-btn--link showbutton" onClick={this.togglePassword}>{this.state.passwordStatusText}</button>
        <span class="pe-input_underline"></span>

      </div>
    )
  };
};

export default PasswordInput;

function _togglePassword(e) {

  e.preventDefault();

  if (this.state.hidePassword) {
    document.getElementById('password').setAttribute('type', 'text');
    this.setState({passwordStatusText:'hide', hidePassword:false})
  };

  if (!this.state.hidePassword) {
    document.getElementById('password').setAttribute('type', 'password');
    this.setState({passwordStatusText:'show', hidePassword:true})
  };

};
