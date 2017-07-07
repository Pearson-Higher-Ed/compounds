import React, { Component } from 'react';
import PropTypes            from 'prop-types';
import DatePicker           from './DatePicker';
import { Icon, Calendar }   from '../../index';

import './DatePickerRange.scss';


export const DatePickerRange = (props) => {

    const { classNameContainer, time, endTime, className, classNameEnd, fancy, range, id, datepickerValue, placeholder, inputState, labelText, changeHandler, endId, endDatepickerValue, endPlaceholder, endInputState, endLabelText, endChangeHandler, infoMessage, errorMessage, endInfoMessage, endErrorMessage } = props;

    return (
      <div className={`pe-range-container ${classNameContainer || ''}`}>

        <DatePicker
          time            = {time}
          fancy           = {fancy}
          id              = {id}
          className       = {className}
          datepickerValue = {datepickerValue}
          placeholder     = {placeholder}
          inputState      = {inputState}
          labelText       = {labelText}
          changeHandler   = {changeHandler}
          infoMessage     = {infoMessage}
          errorMessage    = {errorMessage}
        />

        {range &&
          <DatePicker
            time            = {endTime}
            fancy           = {fancy}
            id              = {endId}
            className       = {classNameEnd}
            datepickerValue = {endDatepickerValue}
            placeholder     = {endPlaceholder}
            inputState      = {endInputState}
            labelText       = {endLabelText}
            changeHandler   = {endChangeHandler}
            infoMessage     = {endInfoMessage}
            errorMessage    = {endErrorMessage}
          />
        }

      </div>
    );

}


export default DatePickerRange;


DatePickerRange.propTypes = {
  range            : PropTypes.bool,
  id               : PropTypes.string.isRequired,
  labelText        : PropTypes.string.isRequired,
  placeholder      : PropTypes.string.isRequired,
  changeHandler    : PropTypes.func.isRequired,
  infoMessage      : PropTypes.string,
  errorMessage     : PropTypes.string,
  inputState       : PropTypes.string,
  fancy            : PropTypes.bool,
  time             : PropTypes.bool,
  endId            : PropTypes.string.isRequired,
  endLabelText     : PropTypes.string.isRequired,
  endPlaceholder   : PropTypes.string.isRequired,
  endChangeHandler : PropTypes.func.isRequired,
  endInfoMessage   : PropTypes.string,
  endErrorMessage  : PropTypes.string,
  endInputState    : PropTypes.string,
  endFancy         : PropTypes.bool,
  endTime          : PropTypes.bool
};
