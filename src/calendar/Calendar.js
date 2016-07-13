import React from 'react';
import SimpleCalendar from "../../docs/src/app/components/containers/components/SimpleCalendar";

document.body.addEventListener('o.initCalendar', e => new Calendar(e.detail))

function Calendar(props) {
  return (
     <SimpleCalendar locale={props.params.locale}/>
   );
}


export default Calendar;
