import React, { Component } from 'react';
import { DatePicker }       from '../../index';


class DatePickerPage extends Component {

  constructor(props){
    super(props);
    this.state = {};
  }

  render() {
    return (
        <div className="displaySection">
          <h1><a href="http://pearson-higher-ed.github.io/design/c/date-picker/">DatePicker</a></h1>

          <div className="elementContainer">

            <div className="code">
              <h2>Props:</h2>
              <ul>
                <li>No Props</li>
              </ul>
            </div>

            <h2>DatePicker (fancy): </h2>
            <br />
            <DatePicker
              fancy           = {true}
              id              = "someGiantId"
              placeholder     = "mm/dd/yyyy"
              inputState      = "default"
              labelText       = "Select date"
              datepickerValue = {this.state.datepickerValue1}
              changeHandler   = {() => console.log('DatePicker-(fancy)-changed!!')}
            />
            <br />
            <p className="code">{'<DatePicker fancy={true} />'}</p>

            <br />

            <h2>DatePicker (basic): </h2>
            <br />
            <DatePicker
              id              = "someGiantId"
              placeholder     = "mm/dd/yyyy"
              inputState      = "default"
              labelText       = "Select date"
              datepickerValue = {this.state.datepickerValue2}
              changeHandler   = {() => console.log('DatePicker-(basic)-changed!!')}
            />
            <br />
            <p className="code">{'<DatePicker fancy={false} />'}</p>

            <br />

            <h2>DatePickers (basic range):</h2>
            <br />

            <div>
              <DatePicker
                range              = {true}
                className          = ""
                endClassName       = ""
                id                 = "someGiantIdStart"
                endId              = "someGiantIdEnd"
                placeholder        = "mm/dd/yyyy"
                endPlaceholder     = "mm/dd/yyyy"
                inputState         = "default"
                endInputState      = "default"
                labelText          = "Start date"
                endLabelText       = "End date"
                datepickerValue    = {this.state.datepickerValue3}
                endDatepickerValue = {this.state.datepickerValue4}
                changeHandler      = {() => console.log('¡¡¡start-basic')}
                endChangeHandler   = {() => console.log('end-basic!!!')}
              />
            </div>

            <p className="code">{'<DatePicker />'}</p>

            <h2>DatePickers (fancy range):</h2>
            <br />

            <div>
              <DatePicker
                fancy              = {true}
                range              = {true}
                className          = ""
                endClassName       = ""
                id                 = "someGiantIdStart"
                endId              = "someGiantIdEnd"
                placeholder        = "mm/dd/yyyy"
                endPlaceholder     = "mm/dd/yyyy"
                inputState         = "default"
                endInputState      = "default"
                labelText          = "Start date"
                endLabelText       = "End date"
                datepickerValue    = {this.state.datepickerValue3}
                endDatepickerValue = {this.state.datepickerValue4}
                changeHandler      = {() => console.log('¡¡¡start-fancy')}
                endChangeHandler   = {() => console.log('end-fancy!!!')}
              />


            </div>

            <p className="code">{'<DatePicker />'}</p>

          </div>

        </div>
      )
    }

}


export default DatePickerPage;
