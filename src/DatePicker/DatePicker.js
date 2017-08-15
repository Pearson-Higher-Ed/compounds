import React, { Component } from 'react';
import PropTypes            from 'prop-types';
import { Icon, Calendar }   from '../../index';
import { TimeList }         from './components/TimeList';
import moment               from 'moment';

import './DatePicker.scss';


export default class DatePicker extends Component {

  constructor(props) {
    super(props);

    this.state = { focusStartIndex : 0 };

    this.applyDatePickerStyles = _applyDatePickerStyles.bind(this);
    this.datePickerFocus       = _datePickerFocus.bind(this);
    this.datePickerBlur        = _datePickerBlur.bind(this);
    this.timeListHandler       = _timeListHandler.bind(this);
    this.calendarHandler       = _calendarHandler.bind(this);
    this.changeHandler         = _changeHandler.bind(this);
    this.inputEvents           = _inputEvents.bind(this);
    this.listEventInterface    = _listEventInterface.bind(this);

  }

  componentDidMount(){
    this.applyDatePickerStyles(this.props.inputState);
  }

  componentWillReceiveProps(nextProps){
    this.applyDatePickerStyles(nextProps.inputState);
  }

  render() {

    const { inputStyle, markToClose, labelStyleTmp, labelStyle, displayOpen, datepickerValue, spanStyle, containerStyle, dateValidation, dateValidationErrorMsg, placeholder } = this.state;
    const { className, time, inputState, id, labelText, dateFormat, infoMessage, errorMessage, twentyFourHour, TWENTYFOUR_HOURS, HOURS } = this.props;

    const em                  = (inputState === 'error' && errorMessage) ? `errMsg-${id} ` : '';
    const ariaDescribedby     = em + (infoMessage ? `infoMsg-${id}` : '');
    const mainContainerStyles = className  ? `pe-datepicker-main ${className}`:`pe-datepicker-main`;
    const inputStyles         = inputStyle ? `pe-datepicker-input-styles ${inputStyle}`:`pe-datepicker-input-styles`;
    const hoursToList         = twentyFourHour ? TWENTYFOUR_HOURS : HOURS;

    return (
      <div className={mainContainerStyles} onBlur={this.datePickerBlur} onKeyUp={this.inputEvents} onFocus={this.datePickerFocus}>
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
          <Icon name={time ? "clock-18" : "calendar-18"} />
        </div>

        {infoMessage  && <span id={`infoMsg-${id}`} className="pe-input--info_message">{infoMessage}</span>}
        {errorMessage && inputState === 'error' && <span id={`errMsg-${id}`} className="pe-input--error_message">{errorMessage}</span>}

        {displayOpen  && inputState !== 'readOnly' && <div className="pe-dropdownContainer">
          {!time && <Calendar disablePast={true} selectedDates={[]} onSelect={this.calendarHandler} />}
          { time && <TimeList id={`${id}-timelist`} timeListRef={ul => this.list = ul} listEvents={this.listEventInterface} hoursToList={hoursToList} selectedHour={datepickerValue} timeToParent={this.timeListHandler}/>}
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
  changeHandler    : PropTypes.func.isRequired,
  infoMessage      : PropTypes.string,
  errorMessage     : PropTypes.string,
  inputState       : PropTypes.string,
  className        : PropTypes.string,
  HOURS            : PropTypes.array,
  TWENTYFOUR_HOURS : PropTypes.array,
  twentyFourHour   : PropTypes.bool,
  time             : PropTypes.bool
};


function _datePickerFocus(){
  const { inputState, labelFocusStyle } = this.state;
  if(inputState !== 'readOnly' || inputState !== 'disabled'){
    this.setState({ labelStyleTmp:labelFocusStyle, displayOpen:true });
  }
};

function _datePickerBlur(e){
  this.setState({ labelStyleTmp:this.state.labelStyle, displayOpen:false});
};

function _changeHandler(e){
  //validate time....
  this.setState({ datepickerValue:e.target.value, displayOpen:false, labelStyleTmp:this.state.labelStyle });
  this.props.changeHandler.call(this, e.target.value);
};

function _timeListHandler(e){
  this.setState({ datepickerValue:e.target.innerText, displayOpen:false, labelStyleTmp:this.state.labelStyle });
};

function _calendarHandler(date){
  this.setState({ datepickerValue:moment(date.selectedDt).format('L'), displayOpen:false, labelStyleTmp:this.state.labelStyle });
};

function _inputEvents(e){
  switch(e.which){
    case 40:  //keypress: down arrow
    time ? this.list.children[0].focus():null;
    break;
    case 27:  //keypress: esc
    this.setState({ displayOpen:false, labelStyleTmp:this.state.labelStyle });
    break;
  };
};

function _listEventInterface(e) {
  let { focusStartIndex } = this.state;

  switch(e.which){
    case 40:  //keypress: down arrow
      e.stopPropagation();
      console.log(focusStartIndex)
      if(focusStartIndex >= 0 && focusStartIndex < this.list.children.length - 1){
        focusStartIndex++;
        this.setState({focusStartIndex});
        this.list.children[focusStartIndex].focus();
        this.list.setAttribute("aria-activedescendant", this.list.children[focusStartIndex].id);
      }
      break;
    case 38:  //keypress: up arrow
      if(focusStartIndex > 0 && focusStartIndex < this.list.children.length){
        focusStartIndex--;
        this.setState({focusStartIndex});
        this.list.children[focusStartIndex].focus();
        this.list.setAttribute("aria-activedescendant", this.list.children[focusStartIndex].id);
      }
      break;
    case 13:  //keypress: enter
      this.timeListHandler(e);
      break;
  };
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
