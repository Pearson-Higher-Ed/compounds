import React, { Component } from 'react';
import PropTypes            from 'prop-types';
import { Icon, Calendar }   from '../../index';
import DatePickerSingle     from './DatePickerSingle';

import './DatePicker.scss';


class DatePicker extends Component {

  constructor(props) {
    super(props);

    this.state = {};

  }


  render() {

    const { classNameContainer, classNameStart, classNameEnd, fancy, range, id, datepickerValue, placeholder, inputState, labelText, changeHandler, endId, endDatepickerValue, endPlaceholder, endInputState, endLabelText, endChangeHandler } = this.props;

    return (
      <div className='pe-range-container'>

        <DatePickerSingle
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
          <DatePickerSingle
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


export default DatePicker;


DatePicker.propTypes = {
  id            : PropTypes.string.isRequired,
  labelText     : PropTypes.string.isRequired,
  placeholder   : PropTypes.string.isRequired,
  changeHandler : PropTypes.func.isRequired,
  inputState    : PropTypes.string
};
