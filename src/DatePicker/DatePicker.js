import React, { Component } from 'react';
import PropTypes            from 'prop-types';
import { Icon, Calendar }   from '../../index';
import moment               from 'moment';

import './DatePicker.scss';


export default class DatePicker extends Component {

  constructor(props) {
    super(props);

    this.state = {
      datepickerValue : this.props.datePickerValue
    };

    this.applyDatePickerStyles = _applyDatePickerStyles.bind(this);
    this.datePickerFocus       = _datePickerFocus.bind(this);
    this.calendarHandler       = _calendarHandler.bind(this);
    this.changeHandler         = _changeHandler.bind(this);
  }

  componentDidMount(){
    this.applyDatePickerStyles(this.props.inputState);
  }

  componentWillReceiveProps(nextProps){
    this.applyDatePickerStyles(nextProps.inputState);
  }

  render() {

    const { inputStyle, labelStyleTmp, labelStyle, displayOpen, datepickerValue, spanStyle, dateObject, containerStyle, placeholder } = this.state;
    const { className, inputState, id, labelText, dateFormat, infoMessage, errorMessage } = this.props;

    const em                  = (inputState === 'error' && errorMessage) ? `errMsg-${id} ` : '';
    const ariaDescribedby     = em + (infoMessage ? `infoMsg-${id}` : '');
    const mainContainerStyles = className  ? `pe-datepicker-main ${className}`:`pe-datepicker-main`;
    const inputStyles         = inputStyle ? `pe-datepicker-input-styles ${inputStyle}`:`pe-datepicker-input-styles`;
console.log(dateObject)
    return (
      <div className={mainContainerStyles} onFocus={this.datePickerFocus}>
        <label className={labelStyleTmp} htmlFor={id}>{`${labelText} (${dateFormat})`}</label>

        <div className={containerStyle}>
          <input
            type             = "text"
            id               = {id}
            placeholder      = {placeholder}
            value            = {datepickerValue}
            className        = {inputStyles}
            aria-describedby = {ariaDescribedby}
            aria-invalid     = {inputState === 'error'}
            disabled         = {inputState === 'disabled'}
            readOnly         = {inputState === 'readOnly'}
            onChange         = {this.changeHandler}
          />
          <span className="pe-iconWrapper"><Icon name={"calendar-18"} /></span>
        </div>

        {infoMessage  && <span id={`infoMsg-${id}`} className="pe-input--info_message">{infoMessage}</span>}
        {errorMessage && inputState === 'error' && <span id={`errMsg-${id}`} className="pe-input--error_message">{errorMessage}</span>}

        {displayOpen  && inputState !== 'readOnly' && <div className="pe-dropdownContainer">
          <Calendar disablePast newSelectedDt={dateObject} onSelect={this.calendarHandler} />
        </div>}

      </div>
    );

  }

}


DatePicker.propTypes = {
  id            : PropTypes.string.isRequired,
  labelText     : PropTypes.string.isRequired,
  dateFormat    : PropTypes.string.isRequired,
  changeHandler : PropTypes.func.isRequired,
  infoMessage   : PropTypes.string,
  errorMessage  : PropTypes.string,
  inputState    : PropTypes.string,
  className     : PropTypes.string
};


function _datePickerFocus(){
  const { inputState, labelFocusStyle } = this.state;
  if(inputState !== 'readOnly' || inputState !== 'disabled'){
    this.setState({ labelStyleTmp:labelFocusStyle, displayOpen:true });
  }
};

function _changeHandler(e){

  const { dateFormat } = this.props;

  //validate date....
  console.log(e.target.value)
  console.log(dateFormat)



  // parse input and form date object...
  const month = 0;
  const day   = 0;
  const year  = 0;

  this.setState({ datepickerValue:e.target.value, dateObject:new Date(year, month, day), displayOpen:false, labelStyleTmp:this.state.labelStyle });
  this.props.changeHandler.call(this, e.target.value);
};

function _calendarHandler(date){
  this.setState({ datepickerValue:moment(date.selectedDt).format('L'), dateObject:date.selectedDt, displayOpen:false, labelStyleTmp:this.state.labelStyle });
};

function _applyDatePickerStyles(inputState) {
  let { labelStyle, inputStyle, labelFocusStyle, labelStyleTmp, containerStyle } = this.state;

  switch (inputState) {
    case 'error':
      labelStyle      = 'pe-textLabelInput__label--label_error';
      labelFocusStyle = 'pe-textLabelInput__label--label_error';
      inputStyle      = 'pe-textInput--basic_error';
      containerStyle  = 'pe-datepicker-container';
      break;
    case 'disabled':
      labelStyle      = 'pe-textLabelInput__label';
      labelFocusStyle = 'pe-textLabelInput__label';
      containerStyle  = 'pe-datepicker-container';
      inputStyle      = 'pe-textInput--basic';
      break;
    case 'readOnly':
      labelStyle      = 'pe-textLabelInput__label';
      labelFocusStyle = 'pe-textLabelInput__label';
      inputStyle      = 'pe-textInput--input_readonly';
      containerStyle  = 'pe-datepicker-container';
      break;
    default:
      labelStyle      = 'pe-textLabelInput__label';
      labelFocusStyle = 'pe-textLabelInput__label--label_focus';
      inputStyle      = 'pe-textInput--basic';
      containerStyle  = 'pe-datepicker-container';
  };

  this.setState({ labelStyle, labelStyleTmp:labelStyle, inputStyle, labelFocusStyle, containerStyle });

};
