import React, { Component, PropTypes } from 'react';


class TextInput extends Component {

  constructor(props) {
    super(props);
    this.state = {
      passwordStatusText : this.props.showText || '',
      typeSelector       : this.props.password ? 'password' : 'text'
    };

    this.togglePassword = _togglePassword.bind(this);
    this.applyStyles    = _applyStyles.bind(this);

  }

  componentWillMount() {
    this.applyStyles();
  }

  render() {
   
    const { inputType, fancy, id, labelText, password, placeholder, infoMessage, errorMessage } = this.props;
    const { labelStyle, inputStyle, spanStyle, passwordStatusText, typeSelector } = this.state;

    return (
      <div>
        <label className={labelStyle} htmlFor={id}>{labelText}</label>

        <input
          id          = {id}
          type        = {typeSelector}
          placeholder = {placeholder}
          className   = {inputStyle}
          disabled    = {(inputType === 'disabled' || inputType === 'readOnly') ? 'disabled' : false}
          readOnly    = {inputType === 'readonly' ? 'readOnly' : false}
          />

        <span className={spanStyle} />
        {password && <button className={fancy ? "pe-textInput__showButton":'pe-textInput__showButton-basic'} id={`showbutton-${id}`} onClick={this.togglePassword} >{passwordStatusText}</button>}
        {infoMessage  && <span className="pe-input--info_message">{infoMessage}</span>}
        {errorMessage && <span className="pe-input--error_message">{errorMessage}</span>}
      </div>
    );

  }
}

export default TextInput;


TextInput.propTypes = {
  inputType    : PropTypes.string,
  id           : PropTypes.string,
  labelText    : PropTypes.string,
  placeholder  : PropTypes.string,
  infoMessage  : PropTypes.string,
  errorMessage : PropTypes.string,
  fancy        : PropTypes.bool
};


function _togglePassword() {
  const { showText, hideText }               = this.props;
  const { typeSelector, passwordStatusText } = this.state;

  const typeSelectorTmp       = (typeSelector === 'password')     ? 'text'   : 'password';
  const passwordStatusTextTmp = (passwordStatusText === showText) ? hideText : showText;

  this.setState({typeSelector:typeSelectorTmp, passwordStatusText:passwordStatusTextTmp});

};

function _applyStyles() {
  let { labelStyle, inputStyle, spanStyle } = this.state;
  const { fancy, inputType } = this.props;

  switch (inputType) {
    case 'error':
      labelStyle = 'pe-textLabelInput__label--label_error';
      inputStyle = (fancy) ? 'pe-textInput--input_error' : 'pe-textInput--basic_error';
      spanStyle  = (fancy) ? 'pe-inputError_underline'   : '';
      break;
    case 'disabled':
      labelStyle = 'pe-textLabelInput__label--label-disabled';
      inputStyle = (fancy) ? 'pe-textInput' : 'pe-textInput--basic';
      spanStyle  = '';
      break;
    case 'readOnly':
      labelStyle = 'pe-textLabelInput__label';
      inputStyle = 'pe-textInput--input_readonly';
      spanStyle  = '';
      break;
    default:
      labelStyle = 'pe-textLabelInput__label';
      inputStyle = (fancy) ? 'pe-textInput'       : 'pe-textInput--basic';
      spanStyle  = (fancy) ? 'pe-input_underline' : '';
  };

  this.setState({labelStyle, inputStyle, spanStyle});

};
