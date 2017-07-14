import React, { Component } from 'react';
import PropTypes            from 'prop-types';
import { Icon, Calendar }   from '../../index';
import moment               from 'moment';
import { TimeList }         from './TimeList';

import './DatePicker.scss';


export default class DatePicker extends Component {

  constructor(props) {
    super(props);

    this.state = {};

    this.applyDatePickerStyles = _applyDatePickerStyles.bind(this);
    this.datePickerFocus       = _datePickerFocus.bind(this);
    this.datePickerBlur        = _datePickerBlur.bind(this);
    this.changeHandler         = _changeHandler.bind(this);
    this.validateDate          = _validateDate.bind(this);
    this.validateTime          = _validateTime.bind(this);
    this.arrowIntoDropdown     = _arrowIntoDropdown.bind(this);
  }

  componentDidMount(){
    this.applyDatePickerStyles(this.props.inputState);
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.inputState){
      this.applyDatePickerStyles(nextProps.inputState);
    }
  }

  componentDidUpdate(nextProps,nextState){

    const { selectedDate, selectedHour, labelStyle } = this.state;

    if(nextState.selectedDate !== selectedDate || nextState.selectedHour !== selectedHour){
      this.setState({
        datepickerValue : selectedDate ? moment(selectedDate).format('L') : selectedHour,
        labelStyleTmp   : labelStyle,
        displayOpen     : false
      });
    }

  }

  render() {

    const { inputStyle, labelStyleTmp, labelStyle, displayOpen, datepickerValue, spanStyle, containerStyle, dateValidation, dateValidationErrorMsg } = this.state;
    const { className, fancy, time, inputState, id, labelText, placeholder, infoMessage, errorMessage, twentyFourHour } = this.props;

    const em = (inputState === 'error' && errorMessage) ? `errMsg-${id} ` : '';
    const ariaDescribedby = em + (infoMessage ? `infoMsg-${id}` : '');

    return (
      <div className={`pe-datepicker-main ${className || ''}`}>
        <label className={labelStyleTmp} htmlFor={id}>{`${labelText} (${placeholder})`}</label>

        <div className={containerStyle}>
          <input
            type             = "text"
            tabIndex         = "0"
            id               = {id}
            value            = {datepickerValue}
            placeholder      = {placeholder}
            className        = {inputStyle}
            aria-describedby = {ariaDescribedby}
            aria-invalid     = {inputState === 'error'}
            disabled         = {inputState === 'disabled'}
            readOnly         = {inputState === 'readOnly'}
            onFocus          = {this.datePickerFocus}
            onBlur           = {this.datePickerBlur}
            onChange         = {this.changeHandler}
          />

          <Icon name={time ? "clock-18" : "calendar-18"} />
        </div>

        {fancy && inputState !== 'readOnly' && <span className={spanStyle} />}

        {infoMessage     && <span id={`infoMsg-${id}`} className="pe-input--info_message">{infoMessage}</span>}
        {errorMessage    && inputState === 'error' && <span id={`errMsg-${id}`} className="pe-input--error_message">{errorMessage}</span>}
        {!dateValidation && <span className="pe-input--error_message">{dateValidationErrorMsg}</span>}

        {displayOpen && !time && <Calendar disablePast={true} selectedDates={[]} onSelect={date => this.setState({selectedDate:date.selectedDt}) } />}
        {displayOpen &&  time && <TimeList id={`${id}-timelist`} selectedHour={datepickerValue} twentyFourHour={twentyFourHour} timeToParent={hour => this.setState({selectedHour:hour}) } />}

      </div>
    );

  }

}



DatePicker.propTypes = {
  id             : PropTypes.string.isRequired,
  labelText      : PropTypes.string.isRequired,
  placeholder    : PropTypes.string.isRequired,
  changeHandler  : PropTypes.func.isRequired,
  infoMessage    : PropTypes.string,
  errorMessage   : PropTypes.string,
  inputState     : PropTypes.string,
  className      : PropTypes.string,
  twentyFourHour : PropTypes.bool,
  fancy          : PropTypes.bool,
  time           : PropTypes.bool
};



function _datePickerFocus(){

  const { inputState, labelFocusStyle } = this.state;

  if(inputState !== 'readOnly'){
    this.setState({labelStyleTmp:labelFocusStyle, displayOpen:true});
  }

};

function _datePickerBlur(){
  // this.setState({labelStyleTmp:this.state.labelStyle, displayOpen:false});
};

function _changeHandler(e){

  this.setState({datepickerValue:e.target.value});
  this.props.time ? this.validateTime(e) : this.validateDate(e);

  // this.props.changeHandler.call(this);

};

function _validateDate(e){

  const { placeholder } = this.props;
  const { datepickerValue } = this.state;

  // when user is finished typing, validate input...
  if(datepickerValue.length === placeholder.length){
    if(moment(datepickerValue, placeholder.toUpperCase(), true).format() !== 'Invalid date'){
      document.getElementById('someGiantIdStart').style.backgroundColor = 'green';
      this.setState({dateValidation:true});
    }else{
      document.getElementById('someGiantIdStart').style.backgroundColor = 'red';
      this.setState({dateValidation:false, dateValidationErrorMsg:"Not Valid!!!"});
    }
  }

};

function _validateTime(e){

  const { placeholder } = this.props;
  const { datepickerValue } = this.state;

  // while user is finished typing, validate input...
  // if(datepickerValue.length === placeholder.length){
  //
  // }

};



function _arrowIntoDropdown(e){
  const { displayOpen } = this.state;

  if(displayOpen && e.keycode === "40"){
    document.getElementsByClassName('')[0].focus()
  }


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
