import React from 'react';
import SimpleCalendar from "../../docs/src/app/components/containers/components/SimpleCalendar";

function Calendar(props) {
  eventHarness()
  return (
     <SimpleCalendar locale={props.params.locale}/>
   );
}

export default Calendar;

let eventHarness = () => document.body.addEventListener('o.initCalendar', e => new Calendar(e.detail))
