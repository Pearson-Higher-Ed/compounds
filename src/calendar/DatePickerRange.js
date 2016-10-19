import React from 'react';
import ReactDOM from 'react-dom';
import DatePickerRange from '../../docs/src/app/components/containers/components/DatePickerRange';
import moment from 'moment';

function DatePickerRangeCalendar(props) {

  if (props.params.locale === undefined || moment.localeData(props.params.locale) === null) {
    props.params.locale = 'en';
  }

  return (
     <DatePickerRange locale={props.params.locale}/>
   );
}

export default DatePickerRangeCalendar;

if (typeof window !== "undefined") {
  document.body.addEventListener("o.initDatePickerRangeCalendar", e => ReactDOM.render(new DatePickerRangeCalendar(e.detail), document.getElementById("app")))
}
