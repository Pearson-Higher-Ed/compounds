import React, { Component } from 'react';
import { injectIntl }       from 'react-intl';
import { messages }         from '../translations/defaultMessages';

import { DatePicker, Select } from '../../index';


class TimePickerPage extends Component {

  constructor(props){
    super(props);
    this.state = {};
  }

  render() {

    const { intl } = this.props;
    const { inputState, inputState1, inputState2 } = this.state;


    // ======================Internationalization Example=========================
    // intl prop is injected by the injectIntl() at the bottom of the page...
    // Provider Context wraps the root element in demo.js.

    // do the intl string replacement...
    const text =  {
      textInputInfoMessage  : intl.formatMessage(messages.textInputInfoMessage),
      textInputErrorMessage : intl.formatMessage(messages.textInputErrorMessage)
    };

    return (
      <div className="displaySection">
        <h1><a href="http://pearson-higher-ed.github.io/design/c/time-picker/v1.0.0">TimePicker - current design (v1.0.0)</a></h1>

        <div className="elementContainer">


          <div className="code">
            <h2>TimePicker:</h2>
            <h3>Props:</h3>

            <ul>
              <li>time:Boolean  === "render datepicker as timepicker"</li>
              <li>className:String  === "styles to pass to datepicker"</li>
              <li>id:String === "A unique name for the datepicker"</li>
              <li>associationId:String === "A unique name to associate 2 picker elemets, used for range"</li>
              <li>twentyFourHour:Boolean  === "render timepicker in 24 hour format"</li>
              <li>dateFormat:String === "format for date/time entry"</li>
              <li>inputState:String === "styles for input state, one of 'error','disabled','readOnly','default'"</li>
              <li>labelText:String === "unique lable for the input field"</li>
              <li>datepickerValue:Date/Time === "value to be displayed by the datepicker/timepicker"</li>
              <li>changeHandler:Function === "function to pass values on change"</li>
              <li>infoMessage:String === "an optional info message displayed below the input"</li>
              <li>errorMessage:String === "an optional error message displayed below the input"</li>
            </ul>

            <h3>Configure Props:</h3>
            <Select id="select" changeHandler={e => this.setState({inputState:`${e.target.value}`}) } selectedOption={inputState} labelText="Select An inputState:" options={["default", "error", "readOnly", "disabled"]} />

          </div>


          <h2>TimePicker (basic time): </h2>
          <DatePicker
            time            = {true}
            id              = "someGiantId3"
            dateFormat      = "hh:mm"
            inputState      = {inputState}
            labelText       = "Select time"
            datepickerValue = {this.state.datepickerValue3}
            changeHandler   = {() => console.log('DatePicker-(basic)-changed!!')}
            infoMessage     = {text.textInputInfoMessage}
            errorMessage    = {text.textInputErrorMessage}
          />
          <p className="code">{`<DatePicker time = {true} id = "someGiantId" dateFormat = "hh:mm" inputState = "default" labelText = "Select time" datepickerValue = {this.state.datepickerValue3} changeHandler = {() => console.log("DatePicker-(basic)-changed!!")} infoMessage = "${text.textInputInfoMessage}" errorMessage = "${text.textInputErrorMessage}" />`}</p>

          <h2>TimePicker (basic time range): </h2>
          <DatePicker
            time            = {true}
            associationId   = "range2"
            id              = "someGiantId4"
            dateFormat      = "hh:mm"
            inputState      = {inputState}
            labelText       = "Select time"
            datepickerValue = {this.state.datepickerValue4}
            changeHandler   = {() => console.log('DatePicker-(basic)-changed!!')}
            infoMessage     = {text.textInputInfoMessage}
            errorMessage    = {text.textInputErrorMessage}
          />
          <DatePicker
            time            = {true}
            associationId   = "range2"
            id              = "someGiantId4"
            dateFormat      = "hh:mm"
            inputState      = {inputState}
            labelText       = "Select time"
            datepickerValue = {this.state.datepickerValue4}
            changeHandler   = {() => console.log('DatePicker-(basic)-changed!!')}
            infoMessage     = {text.textInputInfoMessage}
            errorMessage    = {text.textInputErrorMessage}
          />
          <p className="code">{`<DatePicker time = {true} fancy = {true} id = "someGiantId" dateFormat = "hh:mm" inputState = "default" labelText = "Select time" datepickerValue = {this.state.datepickerValue4} changeHandler = {() => console.log("DatePicker-(basic)-changed!!")} infoMessage = "${text.textInputInfoMessage}" errorMessage = "${text.textInputErrorMessage}" />`}</p>

          <h2>TimePicker positioned side by side: </h2>
          <div className="sidebyside">
            <DatePicker
              time            = {true}
              associationId   = "range3"
              id              = "someGiantId5"
              dateFormat      = "hh:mm"
              inputState      = {inputState}
              labelText       = "Select time"
              datepickerValue = {this.state.datepickerValue6}
              changeHandler   = {() => console.log('DatePicker-(basic)-changed!!')}
              infoMessage     = {text.textInputInfoMessage}
              errorMessage    = {text.textInputErrorMessage}
            />
            <DatePicker
              time            = {true}
              associationId   = "range3"
              id              = "someGiantId5"
              dateFormat      = "hh:mm"
              inputState      = {inputState}
              labelText       = "Select time"
              datepickerValue = {this.state.datepickerValue6}
              changeHandler   = {() => console.log('DatePicker-(basic)-changed!!')}
              infoMessage     = {text.textInputInfoMessage}
              errorMessage    = {text.textInputErrorMessage}
            />
            <p className="code">{`<DatePicker time = {true} fancy = {true} id = "someGiantId" dateFormat = "hh:mm" inputState = "default" labelText = "Select time" datepickerValue = {this.state.datepickerValue4} changeHandler = {() => console.log("DatePicker-(basic)-changed!!")} infoMessage = "${text.textInputInfoMessage}" errorMessage = "${text.textInputErrorMessage}" />`}</p>
          </div>

        </div>
      </div>
      )
  }


}



export default injectIntl(TimePickerPage);
