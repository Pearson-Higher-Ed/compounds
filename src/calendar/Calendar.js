import React from 'react';
import SimpleCalendar from "../../docs/src/app/components/containers/components/SimpleCalendar";
import ReactDOM from 'react-dom';

function Calendar(props) {
  return (
     <SimpleCalendar locale={props.locale}/>
   );
}

export default Calendar;


document.body.addEventListener('o.initCalendar', e => ReactDOM.render(new Calendar(e.detail),document.getElementById('app')))
