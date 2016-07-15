import React from 'react';
import SimpleCalendar from '../../docs/src/app/components/containers/components/SimpleCalendar';

function Calendar(props) {
  return (
     <SimpleCalendar locale={props.params.locale}/>
   );
}

export default Calendar;
