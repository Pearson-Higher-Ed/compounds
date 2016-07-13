import React from 'react';
import SimpleCalendar from "../../docs/src/app/components/containers/components/SimpleCalendar";

// jsdom for eventharness**
import jsdom from 'jsdom';
global.document = jsdom.jsdom('');
global.window = document.defaultView;
document.body.addEventListener('o.initCalendar', e => new Calendar(e.detail))
// *************************

function Calendar(props) {
  return (
     <SimpleCalendar locale={props.params.locale}/>
   );
}

export default Calendar;
