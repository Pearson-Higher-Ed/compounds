import React, { Component } from 'react';
import PropTypes            from 'prop-types';


class TextInput extends Component {

  constructor(props) {
    super(props);

    const { showText, password } = this.props;

    this.state = {
      passwordStatusText   : showText || '',
      passwordTypeSelector : password ? 'password' : 'text',
    };

    this.togglePassword       = _togglePassword.bind(this);
    this.applyTextInputStyles = _applyTextInputStyles.bind(this);

  }

  componentDidMount() {
    this.applyTextInputStyles();
  }

  render() {

    const { labelStyle, inputStyle, spanStyle, passwordStatusText, passwordTypeSelector, butttonStyle, labelFocusStyle, labelStyleTmp  }  = this.state;
    const { inputState, fancy, id, labelText, password, placeholder, infoMessage, errorMessage, changeHandler } = this.props;

    return (
      <div>
        <label className={labelStyleTmp} htmlFor={id}>{labelText}</label>

        <input
          id          = {id}
          type        = {passwordTypeSelector}
          placeholder = {placeholder}
          className   = {inputStyle}
          disabled    = {inputState === 'disabled' || inputState === 'readOnly'}
          readOnly    = {inputState === 'readOnly'}
          onFocus     = {() => this.setState({labelStyleTmp:labelFocusStyle})}
          onBlur      = {() => this.setState({labelStyleTmp:labelStyle})}
          onChange    = { changeHandler }
          />

        {inputState  !== 'readOnly' && <span className={spanStyle} />}
        {password     && <button className={butttonStyle} id={`showbutton-${id}`} onClick={this.togglePassword} disabled={inputState === 'disabled'}>{passwordStatusText}</button>}
        {infoMessage  && <span className="pe-input--info_message">{infoMessage}</span>}
        {errorMessage && <span className="pe-input--error_message">{errorMessage}</span>}
      </div>
    );

  }
}

export default TextInput;


TextInput.propTypes = {
  id            : PropTypes.string.isRequired,
  labelText     : PropTypes.string.isRequired,
  placeholder   : PropTypes.string.isRequired,
  changeHandler : PropTypes.func.isRequired,
  inputState    : PropTypes.string,
  infoMessage   : PropTypes.string,
  errorMessage  : PropTypes.string,
  fancy         : PropTypes.bool,
  password      : PropTypes.bool
};


function _togglePassword() {
  const { passwordTypeSelector, passwordStatusText } = this.state;
  const { showText, hideText, inputState }           = this.props;

  const passwordTypeSelectorTmp = (passwordTypeSelector === 'password') ? 'text' : 'password';
  const passwordStatusTextTmp   = (passwordStatusText === showText) ? hideText : showText;

  this.setState({passwordTypeSelector:passwordTypeSelectorTmp, passwordStatusText:passwordStatusTextTmp});

};

function _applyTextInputStyles() {
  let { labelStyle, inputStyle, spanStyle, butttonStyle, labelFocusStyle, labelStyleTmp } = this.state;
  const { fancy, inputState } = this.props;

  switch (inputState) {
    case 'error':
      labelStyle      = 'pe-textLabelInput__label--label_error';
      inputStyle      = fancy ? 'pe-textInput--input_error' : 'pe-textInput--basic_error';
      spanStyle       = fancy ? 'pe-inputError_underline'   : '';
      butttonStyle    = fancy ? 'pe-textInput__showButton--error'  : 'pe-textInput__showButton-basic'
      labelFocusStyle = 'pe-textLabelInput__label--label_error';
      break;
    case 'disabled':
      labelStyle      = 'pe-textLabelInput__label--label-disabled';
      inputStyle      = fancy ? 'pe-textInput' : 'pe-textInput--basic';
      spanStyle       = '';
      butttonStyle    = fancy ? 'pe-textInput__showButton--disabled' : 'pe-textInput__showButton-basic--disabled';
      labelFocusStyle = 'pe-textLabelInput__label--label-disabled';
      break;
    case 'readOnly':
      labelStyle      = 'pe-textLabelInput__label';
      inputStyle      = 'pe-textInput--input_readonly';
      spanStyle       = '';
      butttonStyle    = 'pe-textInput__showButton';
      labelFocusStyle = 'pe-textLabelInput__label';
      break;
    default:
      labelStyle      = 'pe-textLabelInput__label';
      inputStyle      = fancy ? 'pe-textInput'             : 'pe-textInput--basic';
      spanStyle       = fancy ? 'pe-input_underline'       : '';
      butttonStyle    = fancy ? 'pe-textInput__showButton' : 'pe-textInput__showButton-basic';
      labelFocusStyle = 'pe-textLabelInput__label--label_focus';
  };

  labelStyleTmp = labelStyle;

  this.setState({labelStyle, labelStyleTmp, inputStyle, spanStyle, butttonStyle, labelFocusStyle});

};
