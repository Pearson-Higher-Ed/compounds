import React, { Component } from 'react';
import PropTypes            from 'prop-types';
import { Icon, Calendar }   from '../../index';
import DatePicker           from './DatePicker';

import './DatePickerRange.scss';


class DatePickerRange extends Component {

  constructor(props) {
    super(props);

    this.state = {};

  }


  render() {

    const { classNameContainer, time, classNameStart, classNameEnd, fancy, range, id, datepickerValue, placeholder, inputState, labelText, changeHandler, endId, endDatepickerValue, endPlaceholder, endInputState, endLabelText, endChangeHandler } = this.props;

    return (
      <div className='pe-range-container'>

        <DatePicker
          time            = {time}
          fancy           = {fancy}
          id              = {id}
          className       = {classNameStart}
          datepickerValue = {datepickerValue}
          placeholder     = {placeholder}
          inputState      = {inputState}
          labelText       = {labelText}
          changeHandler   = {changeHandler}
        />

        {range &&
          <DatePicker
            time            = {time}
            fancy           = {fancy}
            id              = {endId}
            className       = {classNameEnd}
            datepickerValue = {endDatepickerValue}
            placeholder     = {endPlaceholder}
            inputState      = {endInputState}
            labelText       = {endLabelText}
            changeHandler   = {endChangeHandler}
          />
        }

      </div>
    );

  }
}


export default DatePickerRange;


DatePickerRange.propTypes = {
  id            : PropTypes.string.isRequired,
  labelText     : PropTypes.string.isRequired,
  placeholder   : PropTypes.string.isRequired,
  changeHandler : PropTypes.func.isRequired,
  inputState    : PropTypes.string
};
