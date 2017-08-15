import React, { Component } from 'react';
import { injectIntl }       from 'react-intl';
import { messages }         from '../translations/defaultMessages';

import { DatePicker, Select } from '../../index';

import { DatePicker as DatePickerStart }  from "../../index";
import { DatePicker as DatePickerEnd }    from "../../index";
import { DatePicker as DatePickerStart2 } from "../../index";
import { DatePicker as DatePickerEnd2 }   from "../../index";


class TimePickerPage extends Component {

  constructor(props){
    super(props);
    this.state = {
      datepickerValue1 : null,
      datepickerValue2 : null,
      datepickerValue3 : null,
      datepickerValue4 : null,
      datepickerValue5 : null
    };
  }

  render() {

    const { intl } = this.props;
    const { inputState, datepickerValue1, datepickerValue2, datepickerValue3, datepickerValue4, datepickerValue5 } = this.state;


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
            id              = "someGiantId1"
            dateFormat      = "hh:mm"
            inputState      = {inputState}
            labelText       = "Select time"
            datepickerValue = {this.state.datepickerValue1}
            changeHandler   = {e => this.setState({datepickerValue1:this.state.datepickerValue})}
            infoMessage     = {text.textInputInfoMessage}
            errorMessage    = {text.textInputErrorMessage}
          />
          <p className="code">{`<DatePicker time = {true} id = "someGiantId" dateFormat = "hh:mm" inputState = "default" labelText = "Select time" datepickerValue = {this.state.datepickerValue3} changeHandler = {() => console.log("DatePicker-(basic)-changed!!")} infoMessage = "${text.textInputInfoMessage}" errorMessage = "${text.textInputErrorMessage}" />`}</p>

          <h2>TimePicker (basic time range): </h2>
          <DatePickerStart
            time            = {true}
            id              = "someGiantId2"
            dateFormat      = "hh:mm"
            inputState      = {inputState}
            labelText       = "Select time"
            datepickerValue = {this.state.datepickerValue2}
            changeHandler   = {e => this.setState({datepickerValue2:this.state.datepickerValue})}
            infoMessage     = {text.textInputInfoMessage}
            errorMessage    = {text.textInputErrorMessage}
          />
          <DatePickerEnd
            time            = {true}
            id              = "someGiantId3"
            dateFormat      = "hh:mm"
            inputState      = {inputState}
            labelText       = "Select time"
            datepickerValue = {this.state.datepickerValue3}
            changeHandler   = {e => this.setState({datepickerValue3:this.state.datepickerValue})}
            infoMessage     = {text.textInputInfoMessage}
            errorMessage    = {text.textInputErrorMessage}
          />
          <p className="code">{`<DatePicker time = {true} fancy = {true} id = "someGiantId" dateFormat = "hh:mm" inputState = "default" labelText = "Select time" datepickerValue = {this.state.datepickerValue4} changeHandler = {() => console.log("DatePicker-(basic)-changed!!")} infoMessage = "${text.textInputInfoMessage}" errorMessage = "${text.textInputErrorMessage}" />`}</p>

        </div>
      </div>
      )
  }


}



export default injectIntl(TimePickerPage);
