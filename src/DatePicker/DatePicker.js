import React, { Component } from 'react';
import PropTypes            from 'prop-types';
import { Icon, Calendar }   from '../../index';
import moment               from 'moment';
import TimeList             from './TimeList';

import './DatePicker.scss';


export default class DatePicker extends Component {

  constructor(props) {
    super(props);

    this.state = {
      HOURS            : ["1:00 AM","2:00 AM","3:00 AM","4:00 AM","5:00 AM","6:00 AM","7:00 AM","8:00 AM","9:00 AM","10:00 AM","11:00 AM","12:00 PM","1:00 PM","2:00 PM","3:00 PM","4:00 PM","5:00 PM","6:00 PM","7:00 PM","8:00 PM","9:00 PM","10:00 PM","11:00 PM","12:00 AM"],
      TWENTYFOUR_HOURS : ["1:00","2:00","3:00","4:00","5:00","6:00","7:00","8:00","9:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00","20:00","21:00","22:00","23:00","24:00"]
    };

    this.applyDatePickerStyles = _applyDatePickerStyles.bind(this);
    this.datePickerFocus       = _datePickerFocus.bind(this);
    this.datePickerBlur        = _datePickerBlur.bind(this);
    this.timeListHandler       = _timeListHandler.bind(this);
    this.calendarHandler       = _calendarHandler.bind(this);
    this.changeHandler         = _changeHandler.bind(this);
    this.inputEvents           = _inputEvents.bind(this);
    this.validateDate          = _validateDate.bind(this);
    this.validateTime          = _validateTime.bind(this);
  }

  componentDidMount(){
    this.applyDatePickerStyles(this.props.inputState);
  }

  componentWillReceiveProps(nextProps){
    this.applyDatePickerStyles(nextProps.inputState);
  }

  render() {

    const { inputStyle, labelStyleTmp, labelStyle, displayOpen, datepickerValue, spanStyle, containerStyle, dateValidation, dateValidationErrorMsg, TWENTYFOUR_HOURS, HOURS, placeholder } = this.state;
    const { className, fancy, time, inputState, id, labelText, dateFormat, infoMessage, errorMessage, twentyFourHour, associationId } = this.props;

    const em = (inputState === 'error' && errorMessage) ? `errMsg-${id} ` : '';
    const ariaDescribedby = em + (infoMessage ? `infoMsg-${id}` : '');

    const mainContainerStyles = className ? `pe-datepicker-main ${className}`:`pe-datepicker-main`;

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
            className        = {inputStyle}
            aria-describedby = {ariaDescribedby}
            aria-invalid     = {inputState === 'error'}
            disabled         = {inputState === 'disabled' || inputState === 'readOnly'}
            readOnly         = {inputState === 'readOnly'}
            onFocus          = {this.datePickerFocus}
            onBlur           = {this.datePickerBlur}
            onKeyUp          = {this.inputEvents}
            onChange         = {this.changeHandler}
          />
          <Icon name={time ? "clock-18" : "calendar-18"} />
        </div>

        {fancy && inputState !== 'readOnly' && <span className={spanStyle} />}

        {infoMessage     && <span id={`infoMsg-${id}`} className="pe-input--info_message">{infoMessage}</span>}
        {errorMessage    && inputState === 'error' && <span id={`errMsg-${id}`} className="pe-input--error_message">{errorMessage}</span>}
        {!dateValidation && <span className="pe-input--error_message">{dateValidationErrorMsg}</span>}

        {displayOpen && <div className="pe-dropdownContainer">
          {!time && <Calendar disablePast={true} selectedDates={[]} onSelect={this.calendarHandler} />}
          { time && <TimeList id={`${id}-timelist`} hoursToList={twentyFourHour ? TWENTYFOUR_HOURS : HOURS} selectedHour={datepickerValue} timeToParent={this.timeListHandler} />}
        </div>}

      </div>
    );

  }

}



DatePicker.propTypes = {
  id             : PropTypes.string.isRequired,
  labelText      : PropTypes.string.isRequired,
  dateFormat    : PropTypes.string.isRequired,
  changeHandler  : PropTypes.func.isRequired,
  associationId  : PropTypes.string,
  infoMessage    : PropTypes.string,
  errorMessage   : PropTypes.string,
  inputState     : PropTypes.string,
  className      : PropTypes.string,
  twentyFourHour : PropTypes.bool,
  fancy          : PropTypes.bool,
  time           : PropTypes.bool
};



function _datePickerFocus(){

  const { inputState, labelFocusStyle, spanStyle } = this.state;

  if(inputState !== 'readOnly' || inputState !== 'disabled'){
    this.setState({labelStyleTmp:labelFocusStyle, displayOpen:true});
  }

};

function _datePickerBlur(){
  // this.setState({labelStyleTmp:this.state.labelStyle, displayOpen:false});
};

function _changeHandler(e){

  this.setState({datepickerValue:e.target.value, displayOpen:false});
  this.props.time ? this.validateTime(e) : this.validateDate(e);

  // this.props.changeHandler.call(this);

};

function _validateDate(e){

  const { dateFormat } = this.props;
  const { datepickerValue } = this.state;

  // when user is finished typing, validate input...
  if(datepickerValue.length === dateFormat.length){
    if(moment(datepickerValue, dateFormat.toUpperCase(), true).format() !== 'Invalid date'){
      document.getElementById('someGiantIdStart').style.backgroundColor = 'green';
      this.setState({dateValidation:true});
    }else{
      document.getElementById('someGiantIdStart').style.backgroundColor = 'red';
      this.setState({dateValidation:false, dateValidationErrorMsg:"Not Valid!!!"});
    }
  }

};

function _validateTime(e){

  const { dateFormat } = this.props;

  const { datepickerValue, twentyFourHour, HOURS, TWENTYFOUR_HOURS } = this.state;

  // compare datepickerValue or e.target.value to array of hours....
  const hourList = twentyFourHour ? TWENTYFOUR_HOURS : HOURS;
  const matchedValue = hourList.find(hour => hour.indexOf(datepickerValue) !== -1 );

console.log(datepickerValue)
console.log(matchedValue)


  this.setState({placeholder:matchedValue});

};

function _inputEvents(e){
  switch(e.which){
    case 9:
      console.log('hit tab')
      // this.setState({displayOpen:false, labelStyleTmp:this.state.labelStyle});
      break;
    default:
      console.log(`default case for ${e.key}`);
  }
}

function _timeListHandler(e){
 this.setState({
   datepickerValue : e.target.innerText,
   labelStyleTmp   : this.state.labelStyle,
   displayOpen     : false
 });
}

function _calendarHandler(date){
  this.setState({
    datepickerValue : moment(date.selectedDt).format('L'),
    labelStyleTmp   : this.state.labelStyle,
    displayOpen     : false
  });
}

function _applyDatePickerStyles(inputState) {
  let { labelStyle, inputStyle, spanStyle, labelFocusStyle, labelStyleTmp, containerStyle } = this.state;
  const { fancy } = this.props;

  switch (inputState) {
    case 'error':
      labelStyle      = 'pe-textLabelInput__label--label_error';
      labelFocusStyle = 'pe-textLabelInput__label--label_error';
      inputStyle      = fancy ? 'pe-textInput--input_error'     : 'pe-textInput--basic_error';
      spanStyle       = fancy ? 'pe-inputError_underline'       : '';
      containerStyle  = fancy ? 'pe-datepicker-container-fancy' : 'pe-datepicker-container';
      break;
    case 'disabled':
      spanStyle       = '';
      labelStyle      = 'pe-textLabelInput__label';
      labelFocusStyle = 'pe-textLabelInput__label';
      containerStyle  = fancy ? 'pe-datepicker-container-fancy' : 'pe-datepicker-container';
      inputStyle      = fancy ? 'pe-textInput'                  : 'pe-textInput--basic';
      break;
    case 'readOnly':
      spanStyle       = '';
      labelStyle      = 'pe-textLabelInput__label';
      labelFocusStyle = 'pe-textLabelInput__label';
      inputStyle      = 'pe-textInput--input_readonly';
      containerStyle  = fancy ? 'pe-datepicker-container-fancy' : 'pe-datepicker-container';
      break;
    default:
      labelStyle      = 'pe-textLabelInput__label';
      labelFocusStyle = 'pe-textLabelInput__label--label_focus';
      inputStyle      = fancy ? 'pe-textInput'                  : 'pe-textInput--basic';
      spanStyle       = fancy ? 'pe-input_underline'            : '';
      containerStyle  = fancy ? 'pe-datepicker-container-fancy' : 'pe-datepicker-container';
  };

  labelStyleTmp = labelStyle;

  this.setState({ labelStyle, labelStyleTmp, inputStyle, labelFocusStyle, spanStyle, containerStyle });

};
