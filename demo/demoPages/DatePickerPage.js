import React, { Component } from 'react';
import { injectIntl }       from 'react-intl';
import { messages }         from '../translations/defaultMessages';

import { DatePicker, Select } from '../../index';


class DatePickerPage extends Component {

  constructor(props){
    super(props);
    this.state = {
      datepickerValue1 : null,
      datepickerValue2 : null,
      datepickerValue3 : null,
      datepickerValue4 : null,
      datepickerValue5 : null,
      datepickerValue6 : null
    };

  }

  render() {

    const { intl } = this.props;
    const { inputState, inputState1, inputState2, hourFormat, datepickerValue1, datepickerValue2, datepickerValue3, datepickerValue4, datepickerValue5, datepickerValue6 } = this.state;


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
        <h1><a href="http://pearson-higher-ed.github.io/design/c/date-picker/v2.0.0">DatePicker - current design (v2.0.0)</a></h1>

          <div className="elementContainer">

            <div className="code">
              <h2>DatePicker:</h2>
              <h3>Props:</h3>

              <ul>
                <li>time:Boolean  === "render datepicker as timepicker"</li>
                {/* <li>fancy:Boolean  === "render with fancy style"</li> */}
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


            {/* <h2>DatePicker (fancy): </h2>
            <DatePicker
              fancy           = {true}
              id              = "someGiantId1"
              dateFormat      = "mm/dd/yyyy"
              inputState      = {inputState}
              labelText       = "Select date"
              datepickerValue = {this.state.datepickerValue1}
              changeHandler   = {e => this.setState({datepickerValue1:e.target.value})}
              infoMessage     = {text.textInputInfoMessage}
              errorMessage    = {text.textInputErrorMessage}
            />
            <p className="code">{`<DatePicker fancy = {true} id = "someGiantId" associationId="range2" dateFormat = "mm/dd/yyyy" inputState = "${inputState}" labelText = "Select date" datepickerValue = {this.state.datepickerValue1} changeHandler = {() => console.log("DatePicker-(fancy)-changed!!")} infoMessage = ""${text.textInputInfoMessage}"" errorMessage = ""${text.textInputErrorMessage}"" />`}</p> */}


            <h2>DatePicker (basic): </h2>
            <DatePicker
              id              = "someGiantId2"
              dateFormat      = "mm/dd/yyyy"
              inputState      = {inputState}
              labelText       = "Select date"
              datepickerValue = {this.state.datepickerValue2}
              changeHandler   = {e => this.setState({datepickerValue2:e.target.value})}
              infoMessage     = {text.textInputInfoMessage}
              errorMessage    = {text.textInputErrorMessage}
            />
            <p className="code">{`<DatePicker id = "someGiantId" associationId="range2" dateFormat = "mm/dd/yyyy" inputState = "default" labelText = "Select date" datepickerValue = {this.state.datepickerValue2} changeHandler = {() => console.log("DatePicker-(basic)-changed!!")} infoMessage = "${text.textInputInfoMessage}" errorMessage = "${text.textInputErrorMessage}" />`}</p>

            <h2>DatePicker (basic range): </h2>
            <DatePicker
              id              = "someGiantId3"
              dateFormat      = "mm/dd/yyyy"
              inputState      = {inputState}
              associationId   = "range1"
              labelText       = "Select Start date"
              datepickerValue = {this.state.datepickerValue3}
              changeHandler   = {e => this.setState({datepickerValue3:e.target.value})}
              infoMessage     = {text.textInputInfoMessage}
              errorMessage    = {text.textInputErrorMessage}
            />
            <DatePicker
              id              = "someGiantId4"
              associationId   = "range1"
              dateFormat      = "mm/dd/yyyy"
              inputState      = {inputState}
              labelText       = "Select End date"
              datepickerValue = {this.state.datepickerValue4}
              changeHandler   = {e => this.setState({datepickerValue4:e.target.value})}
              infoMessage     = {text.textInputInfoMessage}
              errorMessage    = {text.textInputErrorMessage}
            />
            <p className="code">{`<DatePicker id = "someGiantId" associationId="range2" dateFormat = "mm/dd/yyyy" inputState = "default" labelText = "Select date" datepickerValue = {this.state.datepickerValue2} changeHandler = {() => console.log("DatePicker-(basic)-changed!!")} infoMessage = "${text.textInputInfoMessage}" errorMessage = "${text.textInputErrorMessage}" />`}</p>

            {/* <h2>DatePicker (fancy range): </h2>
            <DatePicker
              fancy           = {true}
              id              = "someGiantId5"
              associationId   = "range2"
              dateFormat      = "mm/dd/yyyy"
              inputState      = {inputState}
              labelText       = "Select Start date"
              datepickerValue = {this.state.datepickerValue5}
              changeHandler   = {e => this.setState({datepickerValue5:e.target.value})}
              infoMessage     = {text.textInputInfoMessage}
              errorMessage    = {text.textInputErrorMessage}
            />
            <DatePicker
              fancy           = {true}
              id              = "someGiantId6"
              associationId   = "range2"
              dateFormat      = "mm/dd/yyyy"
              inputState      = {inputState}
              labelText       = "Select End date"
              datepickerValue = {this.state.datepickerValue6}
              changeHandler   = {e => this.setState({datepickerValue6:e.target.value})}
              infoMessage     = {text.textInputInfoMessage}
              errorMessage    = {text.textInputErrorMessage}
            />
            <p className="code">{`<DatePicker id = "someGiantId" associationId="range2" dateFormat = "mm/dd/yyyy" inputState = "default" labelText = "Select date" datepickerValue = {this.state.datepickerValue2} changeHandler = {() => console.log("DatePicker-(basic)-changed!!")} infoMessage = "${text.textInputInfoMessage}" errorMessage = "${text.textInputErrorMessage}" />`}</p> */}


          </div>
        </div>
      )
    }

}


export default injectIntl(DatePickerPage);
