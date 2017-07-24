import React from 'react';
import { Calendar } from '../../index';

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];

const CalendarPage = () => (
  <div className="displaySection">
    <h2><a href="http://pearson-higher-ed.github.io/design/c/calendar/">Calendar</a></h2>
    <div className="elementContainer">
      <div className="code">
        <h3>Props</h3>
        <h4>Required:</h4>
          <ul>
            <li className="li-props">dayNamesFull:Array === {`['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', `}<br/>
              {`'Saturday', 'Sunday']`}</li>
            <li className="li-props">monthNamesFull:Array === {`["January", "February", "March", "April", "May", "June", `}<br/>
              {`"July", "August", "September", "October", "November", "December"]`}</li>
          </ul>
        <h4>Optional:</h4>
          <ul>
            <li className="li-props">disablePast:Boolean === {`<Calendar disablePast />`}</li>
            <li className="li-props"><i>disablePast</i> will disable all dates prior to the current date.</li>
            <li className="li-props">minDate:Object === {`<Calendar minDate={new Date(2017, 8, 13)}`}</li>
            <li className="li-props"><i>minDate</i> accepts a Date Object (year, month, date) and will disable everything prior to the <br/>
            specified date.</li>
            <li className="li-props">onSelect:Function === {`<Calendar onSelect={(date) => console.log(date)}`}</li>
            <li className="li-props">Callback fired on new date selection.  This will expose the state Object.</li>
            <li className="li-props">contrast:Boolean ==={`<Calendar contrast />`}</li>
            <li className="li-props"><i>contrast</i> will apply a blue background and make the text white.</li>
          </ul>
      </div>

      <h3 style={{marginTop: 4}}>Example Usage</h3>
        <p className="code">
          {`const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];`}<br/>
          {`const months = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", `}<br/>{`"October", "November", "December"];`} <br/>
          {`<Calendar dayNamesFull={days} monthNamesFull={months} />`}
        </p>

      <Calendar dayNamesFull={days} monthNamesFull={months}  />
    </div>

  </div>
);

export default CalendarPage;
