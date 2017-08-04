import React, { Component } from 'react';
import PropTypes            from 'prop-types';
import { Icon, Calendar }   from '../../index';
import moment               from 'moment';
import TimeList             from './components/TimeList';

import './DatePicker.scss';


export default class DatePicker extends Component {

  constructor(props) {
    super(props);

    this.state = {};

    this.applyDatePickerStyles = _applyDatePickerStyles.bind(this);
    this.datePickerFocus       = _datePickerFocus.bind(this);
    this.datePickerBlur        = _datePickerBlur.bind(this);
    this.timeListHandler       = _timeListHandler.bind(this);
    this.calendarHandler       = _calendarHandler.bind(this);
    this.changeHandler         = _changeHandler.bind(this);
    this.inputEvents           = _inputEvents.bind(this);
    this.closeDropdown         = _closeDropdown.bind(this);
  }

  componentDidMount(){
    this.applyDatePickerStyles(this.props.inputState);
  }

  componentWillReceiveProps(nextProps){
    this.applyDatePickerStyles(nextProps.inputState);
  }

  render() {

    const { inputStyle, labelStyleTmp, labelStyle, displayOpen, datepickerValue, spanStyle, containerStyle, dateValidation, dateValidationErrorMsg, placeholder } = this.state;
    const { className, time, inputState, id, labelText, dateFormat, infoMessage, errorMessage, twentyFourHour, TWENTYFOUR_HOURS, HOURS } = this.props;

    const em = (inputState === 'error' && errorMessage) ? `errMsg-${id} ` : '';
    const ariaDescribedby = em + (infoMessage ? `infoMsg-${id}` : '');

    const mainContainerStyles = className ? `pe-datepicker-main ${className}`:`pe-datepicker-main`;
    const inputStyles = inputStyle ? `pe-datepicker-input-styles ${inputStyle}`:`pe-datepicker-input-styles`;

    return (
      <div className={mainContainerStyles}>
        <label className={labelStyleTmp} htmlFor={id}>{`${labelText} (${dateFormat})`}</label>

        <div className={containerStyle}>
          <input
            type             = "text"
            tabIndex         = "0"
            id               = {id}
            placeholder      = {placeholder}
            value            = {datepickerValue}
            className        = {inputStyles}
            aria-describedby = {ariaDescribedby}
            aria-invalid     = {inputState === 'error'}
            disabled         = {inputState === 'disabled'}
            readOnly         = {inputState === 'readOnly'}
            onFocus          = {this.datePickerFocus}
            onBlur           = {this.datePickerBlur}
            onKeyUp          = {this.inputEvents}
            onChange         = {this.changeHandler}
          />
          <Icon name={time ? "clock-18" : "calendar-18"} />
        </div>

        {infoMessage     && <span id={`infoMsg-${id}`} className="pe-input--info_message">{infoMessage}</span>}
        {errorMessage    && inputState === 'error' && <span id={`errMsg-${id}`} className="pe-input--error_message">{errorMessage}</span>}
        {!dateValidation && <span className="pe-input--error_message">{dateValidationErrorMsg}</span>}

        {displayOpen && inputState !== 'readOnly' && <div className="pe-dropdownContainer">
          {!time && <Calendar disablePast={true} selectedDates={[]} onSelect={this.calendarHandler} />}
          { time && <TimeList id={`${id}-timelist`} hoursToList={twentyFourHour ? TWENTYFOUR_HOURS : HOURS} selectedHour={datepickerValue} timeToParent={this.timeListHandler} closeDropdown={this.closeDropdown} />}
        </div>}

      </div>
    );

  }

}


DatePicker.defaultProps = {
  HOURS            : ["1:00 AM","2:00 AM","3:00 AM","4:00 AM","5:00 AM","6:00 AM","7:00 AM","8:00 AM","9:00 AM","10:00 AM","11:00 AM","12:00 PM","1:00 PM","2:00 PM","3:00 PM","4:00 PM","5:00 PM","6:00 PM","7:00 PM","8:00 PM","9:00 PM","10:00 PM","11:00 PM","12:00 AM"],
  TWENTYFOUR_HOURS : ["1:00","2:00","3:00","4:00","5:00","6:00","7:00","8:00","9:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00","20:00","21:00","22:00","23:00","24:00"]
};


DatePicker.propTypes = {
  id               : PropTypes.string.isRequired,
  labelText        : PropTypes.string.isRequired,
  dateFormat       : PropTypes.string.isRequired,
  HOURS            : PropTypes.array.isRequired,
  TWENTYFOUR_HOURS : PropTypes.array.isRequired,
  changeHandler    : PropTypes.func.isRequired,
  associationId    : PropTypes.string,
  infoMessage      : PropTypes.string,
  errorMessage     : PropTypes.string,
  inputState       : PropTypes.string,
  className        : PropTypes.string,
  twentyFourHour   : PropTypes.bool,
  time             : PropTypes.bool
};


function _datePickerFocus(){

  const { inputState, labelFocusStyle } = this.state;

  if(inputState !== 'readOnly' || inputState !== 'disabled'){
    this.setState({labelStyleTmp:labelFocusStyle, displayOpen:true});
  }

};

function _datePickerBlur(e){
  // console.log(e.target.value)
  // this.setState({labelStyleTmp:this.state.labelStyle, displayOpen:false});
};

function _changeHandler(e){

  this.setState({datepickerValue:e.target.value});
  this.closeDropdown();

  this.props.changeHandler.call(this);

};

function _inputEvents(e){

  let { focusStartIndex } = this.state;
  const listOfItems       = document.getElementsByClassName('pe-timepicker-list-item-hour');
  const list              = document.getElementById('list');

  switch(e.which){
    case 40:
      console.log('hit down')
      e.preventDefault();
      listOfItems[0].focus();
      break;
    case 27:
      e.preventDefault();
      console.log('hit esc')
      this.closeDropdown();
      break;
    case 9:
      console.log('hit tab')
      // this.closeDropdown();
      break;
    // case 13:
    //   e.preventDefault();
    //   console.log('hit enter')
    //   this.timeListHandler(e);
    //   break;
    default:
      console.log(`default case for ${e.key}`);
  }
};

function _timeListHandler(e){
 this.setState({ datepickerValue : e.target.innerText });
 this.closeDropdown();
};

function _calendarHandler(date){
  this.setState({ datepickerValue : moment(date.selectedDt).format('L') });
  this.closeDropdown();
};

function _closeDropdown(){
  this.setState({displayOpen:false, labelStyleTmp:this.state.labelStyle});
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

  labelStyleTmp = labelStyle;

  this.setState({ labelStyle, labelStyleTmp, inputStyle, labelFocusStyle, containerStyle });

};
