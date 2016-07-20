import React from 'react';
import SimpleCalendar from "../../docs/src/app/components/containers/components/SimpleCalendar";

function Calendar(props) {
  return (
     <SimpleCalendar locale={props.locale}/>
   );
}

export default Calendar;


document.body.addEventListener('o.initCalendar', e => new Calendar(e.detail))
