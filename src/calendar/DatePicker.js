import React from 'react';
import DatePicker from '../../docs/src/app/components/containers/components/DatePicker';
import moment from 'moment';

function DatePickerCalendar(props) {

  if (moment.localeData(props.params.locale) === null) {
    props.params.locale = 'en';
  }

  return (
     <DatePicker locale={props.params.locale}/>
   );
}

export default DatePickerCalendar;
