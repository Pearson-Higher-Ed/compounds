import React, { Component } from 'react';
import PropTypes            from 'prop-types';
import { Icon, Calendar }   from '../../index';
import moment               from 'moment';

import './DatePickerSingle.scss';


class DatePickerSingle extends Component {

  constructor(props) {
    super(props);

    this.state = {};

    this.applyDatePickerSingleStyles = _applyDatePickerSingleStyles.bind(this);
    this.datePickerFocus             = _datePickerFocus.bind(this);
    this.datePickerBlur              = _datePickerBlur.bind(this);
    this.changeHandler               = _changeHandler.bind(this);
    this.validateDate                = _validateDate.bind(this);
  }

  componentDidMount() {
    this.applyDatePickerSingleStyles();
  }

  componentDidUpdate(){
    if(this.state.selectedDate){
      // console.log(this.state.selectedDate)
      // console.log(nextState.selectedDate)
      this.setState({
        datepickerSingleValue : moment(this.state.selectedDate).format('L'),
        calendarOpen          : false,
        labelStyleTmp         : this.state.labelStyle
      });
    }
  }

  render() {

    const { inputStyle, labelStyleTmp, idValue, datepickerSingleValue, calendarOpen, spanStyle, containerStyle, dateValidation, dateValidationErrorMsg }  = this.state;
    const { range, className, fancy, datepickerValue, inputState, id, labelText, placeholder, infoMessage, errorMessage } = this.props;

    return (
      <div className={`pe-datepicker-main ${className}`}>
        <label className={labelStyleTmp} htmlFor={id}>{labelText}</label>

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
            // onBlur      = {this.datePickerBlur}
            onChange    = {this.changeHandler}
          />

          <Icon name="calendar-18" />
        </div>

        {fancy && inputState  !== 'readOnly' && <span className={spanStyle} />}

        {infoMessage     && <span className="pe-input--info_message">{infoMessage}</span>}
        {errorMessage    && <span className="pe-input--error_message">{errorMessage}</span>}
        {!dateValidation && <span className="pe-input--error_message">{dateValidationErrorMsg}</span>}

        {calendarOpen && <Calendar disablePast={true} dateToParent={(date) => { this.setState({selectedDate:date}) }} />}

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


function _datePickerFocus(){
  this.setState({labelStyleTmp:this.state.labelFocusStyle, calendarOpen:true});
};

function _datePickerBlur(){
  this.setState({labelStyleTmp:this.state.labelStyle, calendarOpen:false});
};



function _changeHandler(e){
  const { changeHandler } = this.props;

  this.setState({idValue : e.target.value, datepickerSingleValue:null});

  // Do the Date Validation...
  this.validateDate(e);

  //========= allow consumer to pass in callback================================
  // changeHandler.call(this); // TODO: uncomment to allow callback...
  //============================================================================

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
