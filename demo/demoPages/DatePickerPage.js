import React          from 'react';
import { DatePicker } from '../../index';


const DatePickerPage = () => (
      <div className="displaySection">
        <h1><a href="http://pearson-higher-ed.github.io/design/c/date-picker/beta/">DatePicker</a></h1>

        <div className="elementContainer">

          <div className="code">
            <h2>Props:</h2>
            <ul>
              <li>No Props</li>
            </ul>
          </div>

          <h2>DatePicker</h2>
          <br />
          <DatePicker id="someGiantId" placeholder="mm/dd/yyyy" inputState="default" labelText="Select date" changeHandler={() => console.log('hi')}/>
          <br />
          <p className="code">{'<DatePicker />'}</p>


          <h2>DatePickers</h2>
          <br />
            <div className="pe-col-4">
              <DatePicker id="someGiantId" placeholder="mm/dd/yyyy" inputState="default" labelText="Select date" changeHandler={() => console.log('hi')} infoMessage="this is an infoMessage" errorMessage="this is an errorMessage" />
            </div>
            <div className="pe-col-2"></div>
            <div className="pe-col-4">
              <DatePicker id="someGiantId" placeholder="mm/dd/yyyy" inputState="default" labelText="Select date" changeHandler={() => console.log('hi')} infoMessage="this is an infoMessage" errorMessage="this is an errorMessage" />
            </div>
          <br />
          <p className="code">{'<DatePicker />'}</p>

        </div>

      </div>
    )


export default DatePickerPage;
