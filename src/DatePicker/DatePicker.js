import React, { Component } from 'react';
import PropTypes            from 'prop-types';
import { Icon, Calendar }   from '../../index';
import moment               from 'moment';
import TimeList             from './TimeList';

import './DatePicker.scss';


class DatePicker extends Component {

  constructor(props) {
    super(props);

    this.state = {};

    this.applyDatePickerStyles = _applyDatePickerStyles.bind(this);
    this.datePickerFocus       = _datePickerFocus.bind(this);
    this.datePickerBlur        = _datePickerBlur.bind(this);
    this.changeHandler         = _changeHandler.bind(this);
    this.validateDate          = _validateDate.bind(this);
  }

  componentDidMount() {
    this.applyDatePickerStyles();
  }

  componentDidUpdate(){
    if(this.state.selectedDate){
      this.setState({
        datepickerSingleValue : moment(this.state.selectedDate).format('L'),
        labelStyleTmp         : this.state.labelStyle,
        displayOpen           : false
      });
    }
  }

  render() {

    const { inputStyle, labelStyleTmp, displayOpen, idValue, datepickerSingleValue, timepickerSingleValue, selectedHour, spanStyle, containerStyle, dateValidation, dateValidationErrorMsg }  = this.state;
    const { className, fancy, time, datepickerValue, inputState, id, labelText, placeholder, infoMessage, errorMessage } = this.props;

    return (
      <div className={`pe-datepicker-main ${className}`}>
        <label className={labelStyleTmp} htmlFor={id}>{`${labelText} (${placeholder})`}</label>

        <div className={containerStyle}>
          <input
            id          = {id}
            type        = "text"
            value       = {datepickerSingleValue || idValue}
            placeholder = {placeholder}
            className   = {inputStyle}
            disabled    = {inputState === 'disabled' || inputState === 'readOnly'}
            readOnly    = {inputState === 'readOnly'}
            onFocus     = {this.datePickerFocus}
            onBlur      = {this.datePickerBlur}
            onChange    = {this.changeHandler}
          />

          <Icon name={time ? "clock-18" : "calendar-18"} />
        </div>

        {fancy && inputState !== 'readOnly' && <span className={spanStyle} />}

        {infoMessage     && <span className="pe-input--info_message">{infoMessage}</span>}
        {errorMessage    && <span className="pe-input--error_message">{errorMessage}</span>}
        {!dateValidation && <span className="pe-input--error_message">{dateValidationErrorMsg}</span>}

        {displayOpen && !time && <Calendar disablePast={true} dateToParent={(date) => this.setState({selectedDate:date}) } />}
        {displayOpen &&  time && <TimeList id={id} showHours={true} selectedHour={selectedHour} twentyFourHour={true} timeToParent={(hour) => this.setState({selectedHour:hour}) } />}

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





function _datePickerFocus(){
  this.setState({labelStyleTmp:this.state.labelFocusStyle, displayOpen:true});
};

function _datePickerBlur(){
  // this.setState({labelStyleTmp:this.state.labelStyle, displayOpen:false});
};

function _changeHandler(e){

  this.setState({idValue:e.target.value, datepickerSingleValue:null});

  this.validateDate(e);

  // this.props.changeHandler.call(this);

};

function _validateDate(e){

  const { placeholder } = this.props;
  const { idValue } = this.state;

  // when user is finished typing, validate input...
  if(idValue.length === placeholder.length){
    if(moment(idValue, placeholder.toUpperCase(), true).format() !== 'Invalid date'){
      document.getElementById('someGiantIdStart').style.backgroundColor = 'green';
      this.setState({dateValidation:true});
    }else{
      document.getElementById('someGiantIdStart').style.backgroundColor = 'red';
      this.setState({dateValidation:false, dateValidationErrorMsg:"Not Valid!!!"});
    }
  }

};








function _applyDatePickerStyles() {
  let { labelStyle, inputStyle, spanStyle, labelFocusStyle, labelStyleTmp, containerStyle } = this.state;
  const { fancy, inputState } = this.props;

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
      labelStyle      = 'pe-textLabelInput__label--label-disabled';
      labelFocusStyle = 'pe-textLabelInput__label--label-disabled';
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
