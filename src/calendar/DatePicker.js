import React from 'react';
import DatePicker from '../../docs/src/app/components/containers/components/DatePicker';

function DatePickerCalendar(props) {
  return (
     <DatePicker locale={props.params.locale}/>
   );
}

export default DatePickerCalendar;
