import React from 'react';
import SimpleCalendar from "../../docs/src/app/components/containers/components/SimpleCalendar";
import ReactDOM from 'react-dom';


function Calendar(props) {
  return (
     <SimpleCalendar locale={props.params.locale}/>
   );
}

export default Calendar;

if (typeof window !== "undefined") {
  document.body.addEventListener('o.initCalendar', e => ReactDOM.render(new Calendar(e.detail), document.getElementById('app')))
}
