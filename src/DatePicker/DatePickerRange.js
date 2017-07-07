import React, { Component } from 'react';
import PropTypes            from 'prop-types';
import { Icon, Calendar }   from '../../index';
import DatePicker           from './DatePicker';

import './DatePickerRange.scss';


const DatePickerRange = (props) => {

    const { classNameContainer, time, className, classNameEnd, fancy, range, id, datepickerValue, placeholder, inputState, labelText, changeHandler, endId, endDatepickerValue, endPlaceholder, endInputState, endLabelText, endChangeHandler, endTime, infoMessage, errorMessage, endInfoMessage, endErrorMessage } = props;

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
  id            : PropTypes.string.isRequired,
  labelText     : PropTypes.string.isRequired,
  placeholder   : PropTypes.string.isRequired,
  changeHandler : PropTypes.func.isRequired,
  inputState    : PropTypes.string
};
