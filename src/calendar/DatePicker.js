import React from 'react';
import ReactDOM from 'react-dom';
import DatePicker from '../../docs/src/app/components/containers/components/DatePicker';

function DatePickerCalendar(props) {
  return (
     <DatePicker locale={props.params.locale}/>
   );
}

export default DatePickerCalendar;

if(typeof window !== 'undefined') {
  document.body.addEventListener('o.initDatePickerCalendar', e => ReactDOM.render(new DatePickerCalendar(e.detail), document.getElementById('app')))
}
