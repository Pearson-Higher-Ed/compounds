import React, { Component } from 'react';
import PropTypes            from 'prop-types';
import { Icon, Calendar }   from '../../index';

import './DatePicker.scss';


class DatePicker extends Component {

  constructor(props) {
    super(props);

    this.state = {

    };

    this.toggleCalandar        = _toggleCalandar.bind(this);
    this.applyDatePickerStyles = _applyDatePickerStyles.bind(this);

  }

  componentDidMount() {
    this.applyDatePickerStyles();
  }

  shouldComponentUpdate(nextState, nextProps){
    if (nextProps && !nextProps.calendarOpen && this.props.calendarOpen){
      this.toggleCalandar();
    }
    return true;
  }

  render() {

    const { labelStyle, inputStyle, labelFocusStyle, labelStyleTmp, calendarOpen }  = this.state;
    const { inputState, id, labelText, placeholder, changeHandler, infoMessage, errorMessage } = this.props;

    return (
      <div>
        <label className={labelStyleTmp} htmlFor={id}>{labelText}</label>

        <div className="pe-datepicker-container">
          <input
            id          = {id}
            type        = "text"
            placeholder = {placeholder}
            className   = {inputStyle}
            disabled    = {inputState === 'disabled' || inputState === 'readOnly'}
            readOnly    = {inputState === 'readOnly'}
            onFocus     = {() => this.setState({labelStyleTmp:labelFocusStyle, calendarOpen:true})}
            onBlur      = {() => this.setState({labelStyleTmp:labelStyle, calendarOpen:false})}
            onChange    = { changeHandler }
            />

          <Icon name="calendar-18" />
        </div>

        {calendarOpen && <Calendar disablePast /> }

        {infoMessage  && <span className="pe-input--info_message">{infoMessage}</span>}
        {errorMessage && <span className="pe-input--error_message">{errorMessage}</span>}

      </div>
    );

  }
}

export default DatePicker;


DatePicker.propTypes = {
  id            : PropTypes.string.isRequired,
  labelText     : PropTypes.string.isRequired,
  placeholder   : PropTypes.string.isRequired,
  changeHandler : PropTypes.func.isRequired,
  inputState    : PropTypes.string
};


function _toggleCalandar() {

  this.setState({calendarOpen:!this.state.calendarOpen});
  // const { passwordTypeSelector, passwordStatusText } = this.state;
  // const { showText, hideText, inputState }           = this.props;
  //
  // const passwordTypeSelectorTmp = (passwordTypeSelector === 'password') ? 'text' : 'password';
  // const passwordStatusTextTmp   = (passwordStatusText === showText) ? hideText : showText;
  //
  // this.setState({passwordTypeSelector:passwordTypeSelectorTmp, passwordStatusText:passwordStatusTextTmp});

};

function _applyDatePickerStyles() {
  let { labelStyle, inputStyle, spanStyle, labelFocusStyle, labelStyleTmp } = this.state;
  const { inputState } = this.props;

  switch (inputState) {
    case 'error':
      labelStyle      = 'pe-textLabelInput__label--label_error';
      inputStyle      = 'pe-textInput--basic_error';
      labelFocusStyle = 'pe-textLabelInput__label--label_error';
      break;
    case 'disabled':
      labelStyle      = 'pe-textLabelInput__label--label-disabled';
      inputStyle      = 'pe-textInput--basic';
      labelFocusStyle = 'pe-textLabelInput__label--label-disabled';
      break;
    case 'readOnly':
      labelStyle      = 'pe-textLabelInput__label';
      inputStyle      = 'pe-textInput--input_readonly';
      labelFocusStyle = 'pe-textLabelInput__label';
      break;
    default:
      labelStyle      = 'pe-textLabelInput__label';
      inputStyle      = 'pe-textInput--basic';
      labelFocusStyle = 'pe-textLabelInput__label--label_focus';
  };

  labelStyleTmp = labelStyle;

  this.setState({labelStyle, labelStyleTmp, inputStyle, labelFocusStyle});

};
