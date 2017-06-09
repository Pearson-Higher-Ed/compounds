import React, { Component } from 'react';
import PropTypes            from 'prop-types';
import { Icon, Calendar }   from '../../index';

import './DatePickerSingle.scss';


class DatePickerSingle extends Component {

  constructor(props) {
    super(props);

    this.state = {};

    this.toggleCalandar              = _toggleCalandar.bind(this);
    this.applyDatePickerSingleStyles = _applyDatePickerSingleStyles.bind(this);
    this.datePickerFocus             = _datePickerFocus.bind(this);
    this.datePickerBlur              = _datePickerBlur.bind(this);
  }

  componentDidMount() {
    this.applyDatePickerSingleStyles();
  }

  render() {

    const { inputStyle, labelStyleTmp, calendarOpen, spanStyle, containerStyle }  = this.state;
    const { range, className, datepickerValue, fancy, inputState, id, labelText, placeholder, changeHandler, infoMessage, errorMessage } = this.props;

    return (
      <div className={className}>
        <label className={labelStyleTmp} htmlFor={id}>{labelText}</label>

        <div className={containerStyle}>
          <input
            id          = {id}
            type        = "text"
            value       = {datepickerValue}
            placeholder = {placeholder}
            className   = {inputStyle}
            disabled    = {inputState === 'disabled' || inputState === 'readOnly'}
            readOnly    = {inputState === 'readOnly'}
            onFocus     = {this.datePickerFocus}
            onBlur      = {this.datePickerBlur}
            onChange    = { changeHandler }
            />

          <Icon name="calendar-18" />
        </div>

        {fancy && inputState  !== 'readOnly' && <span className={spanStyle} />}

        {calendarOpen && <Calendar disablePast />}

        {infoMessage  && <span className="pe-input--info_message">{infoMessage}</span>}
        {errorMessage && <span className="pe-input--error_message">{errorMessage}</span>}

      </div>
    );

  }
}

export default DatePickerSingle;


DatePickerSingle.propTypes = {
  id            : PropTypes.string.isRequired,
  labelText     : PropTypes.string.isRequired,
  placeholder   : PropTypes.string.isRequired,
  changeHandler : PropTypes.func.isRequired,
  inputState    : PropTypes.string
};


function _toggleCalandar() {
  this.setState({calendarOpen:!this.state.calendarOpen});
};

function _datePickerFocus(){
  this.setState({labelStyleTmp:this.state.labelFocusStyle, calendarOpen:true});
};

function _datePickerBlur(){
  this.setState({labelStyleTmp:this.state.labelStyle, calendarOpen:false});
};

function _applyDatePickerSingleStyles() {
  let { labelStyle, inputStyle, spanStyle, labelFocusStyle, labelStyleTmp, containerStyle } = this.state;
  const { fancy, inputState } = this.props;

  switch (inputState) {
    case 'error':
      labelStyle      = 'pe-textLabelInput__label--label_error';
      inputStyle      = fancy ? 'pe-textInput--input_error' : 'pe-textInput--basic_error';
      spanStyle       = fancy ? 'pe-inputError_underline'   : '';
      labelFocusStyle = 'pe-textLabelInput__label--label_error';
      containerStyle  = fancy ? 'pe-datepicker-container-fancy' : 'pe-datepicker-container';
      break;
    case 'disabled':
      labelStyle      = 'pe-textLabelInput__label--label-disabled';
      inputStyle      = fancy ? 'pe-textInput' : 'pe-textInput--basic';
      spanStyle       = '';
      labelFocusStyle = 'pe-textLabelInput__label--label-disabled';
      containerStyle  = fancy ? 'pe-datepicker-container-fancy' : 'pe-datepicker-container';
      break;
    case 'readOnly':
      labelStyle      = 'pe-textLabelInput__label';
      inputStyle      = 'pe-textInput--input_readonly';
      spanStyle       = '';
      labelFocusStyle = 'pe-textLabelInput__label';
      containerStyle  = fancy ? 'pe-datepicker-container-fancy' : 'pe-datepicker-container';
      break;
    default:
      labelStyle      = 'pe-textLabelInput__label';
      inputStyle      = fancy ? 'pe-textInput'             : 'pe-textInput--basic';
      spanStyle       = fancy ? 'pe-input_underline'       : '';
      labelFocusStyle = 'pe-textLabelInput__label--label_focus';
      containerStyle  = fancy ? 'pe-datepicker-container-fancy' : 'pe-datepicker-container';
  };

  labelStyleTmp = labelStyle;

  this.setState({ labelStyle, labelStyleTmp, inputStyle, labelFocusStyle, spanStyle, containerStyle });

};
