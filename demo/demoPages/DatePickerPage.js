import React, { Component } from 'react';
import { injectIntl }       from 'react-intl';
import { messages }         from '../translations/defaultMessages';

import { DatePicker, DatePickerRange, Select } from '../../index';


class DatePickerPage extends Component {

  constructor(props){
    super(props);
    this.state = {};
  }

  render() {

    const { intl } = this.props;
    const { inputState } = this.state;


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
          <h1><a href="http://pearson-higher-ed.github.io/design/c/date-picker/beta">DatePicker</a></h1>

          <div className="elementContainer">

            <div className="code">
              <h2>Props:</h2>
              <ul>
                <li>time:Boolean  === "render left datepicker as timepicker"</li>
                <li>endTime:Boolean  === "render right datepicker as timepicker"</li>
                <li>fancy:Boolean  === "render with fancy style"</li>
                <li>range:Boolean  === "true renders start and end datepicker, false renders single datepicker"</li>
                <li>className:String  === "styles to pass to left datepicker"</li>
                <li>endClassName:String  === "styles to pass to right datepicker"</li>
                <li>id:String === "A unique name for the left datepicker"</li>
                <li>endId:String === "A unique name for the right datepicker"              </li>
                <li>placeholder:String === "format for date/time entry"</li>
                <li>endPlaceholder:String === "format for date/time entry"</li>
                <li>inputState:String === "styles for input state, one of 'error','disabled','readOnly','default'"</li>
                <li>endInputState:String === "styles for input state, one of 'error','disabled','readOnly','default'"</li>
                <li>labelText:String === "unique lable for the input field"</li>
                <li>endLabelText:String === "unique lable for the input field"</li>
                <li>datepickerValue:Date/Time === "value to be displayed by the datepicker/timepicker"</li>
                <li>endDatepickerValue:Date/Time === "value to be displayed by the datepicker/timepicker"</li>
                <li>changeHandler:Function === "function to pass values on change"</li>
                <li>endChangeHandler:Function === "function to pass values on change"</li>
                <li>infoMessage:String === "an optional info message displayed below the input"</li>
                <li>errorMessage:String === "an optional error message displayed below the input"</li>
              </ul>

              <Select id="select" changeHandler={e => this.setState({inputState:`${e.target.value}`}) } selectedOption={inputState} labelText="Select A State:" options={["default", "error", "readOnly", "disabled"]} />

            </div>



            <h2>DatePicker (fancy): </h2>

            <DatePicker
              fancy           = {true}
              id              = "someGiantId"
              placeholder     = "mm/dd/yyyy"
              inputState      = {inputState}
              labelText       = "Select date"
              datepickerValue = {this.state.datepickerValue1}
              changeHandler   = {() => console.log('DatePicker-(fancy)-changed!!')}
              infoMessage     = {text.textInputInfoMessage}
              errorMessage    = {text.textInputErrorMessage}
            />
            <p className="code">{'<DatePicker fancy = {true} id = "someGiantId" placeholder = "mm/dd/yyyy" inputState = {inputState} labelText = "Select date" datepickerValue = {this.state.datepickerValue1} changeHandler = {() => console.log("DatePicker-(fancy)-changed!!")} infoMessage = {text.textInputInfoMessage} errorMessage = {text.textInputErrorMessage} />'}</p>


            <h2>DatePicker (basic): </h2>
            <DatePicker
              id              = "someGiantId"
              placeholder     = "mm/dd/yyyy"
              inputState      = {inputState}
              labelText       = "Select date"
              datepickerValue = {this.state.datepickerValue2}
              changeHandler   = {() => console.log('DatePicker-(basic)-changed!!')}
              infoMessage     = {text.textInputInfoMessage}
              errorMessage    = {text.textInputErrorMessage}
            />
            <p className="code">{'<DatePicker id = "someGiantId" placeholder = "mm/dd/yyyy" inputState = "default" labelText = "Select date" datepickerValue = {this.state.datepickerValue2} changeHandler = {() => console.log("DatePicker-(basic)-changed!!")} infoMessage = {text.textInputInfoMessage} errorMessage = {text.textInputErrorMessage} />'}</p>


            <h2>DatePicker (basic time): </h2>
            <DatePicker
              time            = {true}
              id              = "someGiantId"
              placeholder     = "hh:mm"
              inputState      = {inputState}
              labelText       = "Select time"
              datepickerValue = {this.state.datepickerValue3}
              changeHandler   = {() => console.log('DatePicker-(basic)-changed!!')}
              infoMessage     = {text.textInputInfoMessage}
              errorMessage    = {text.textInputErrorMessage}
            />
            <p className="code">{'<DatePicker time = {true} id = "someGiantId" placeholder = "hh:mm" inputState = "default" labelText = "Select time" datepickerValue = {this.state.datepickerValue3} changeHandler = {() => console.log("DatePicker-(basic)-changed!!")} infoMessage = {text.textInputInfoMessage} errorMessage = {text.textInputErrorMessage} />'}</p>


            <h2>DatePicker (fancy time): </h2>
            <DatePicker
              time            = {true}
              fancy           = {true}
              id              = "someGiantId"
              placeholder     = "hh:mm"
              inputState      = {inputState}
              labelText       = "Select time"
              datepickerValue = {this.state.datepickerValue4}
              changeHandler   = {() => console.log('DatePicker-(basic)-changed!!')}
              infoMessage     = {text.textInputInfoMessage}
              errorMessage    = {text.textInputErrorMessage}
            />
            <p className="code">{'<DatePicker time = {true} fancy = {true} id = "someGiantId" placeholder = "hh:mm" inputState = "default" labelText = "Select time" datepickerValue = {this.state.datepickerValue4} changeHandler = {() => console.log("DatePicker-(basic)-changed!!")} infoMessage = {text.textInputInfoMessage} errorMessage = {text.textInputErrorMessage} />'}</p>


            <h2>DatePickerRange (basic range single):</h2>

            <div>
              <DatePickerRange
                className       = ""
                id              = "someGiantIdStart"
                placeholder     = "mm/dd/yyyy"
                inputState      = {inputState}
                labelText       = "Start date"
                datepickerValue = {this.state.datepickerValue5}
                changeHandler   = {() => console.log('¡¡¡start-basic')}
                infoMessage     = {text.textInputInfoMessage}
                errorMessage    = {text.textInputErrorMessage}
              />
            </div>

            <p className="code">{'<DatePickerRange className = "" id = "someGiantIdStart" placeholder = "mm/dd/yyyy" inputState= "default" labelText = "Start date" datepickerValue = {this.state.datepickerValue5} changeHandler = {() => console.log("¡¡¡start-basic" )}  infoMessage = {text.textInputInfoMessage} errorMessage = {text.textInputErrorMessage}/>'}</p>


            <h2>DatePickerRange (basic range):</h2>

            <div>
              <DatePickerRange
                range              = {true}
                className          = ""
                endClassName       = ""
                id                 = "someGiantIdStart"
                endId              = "someGiantIdEnd"
                placeholder        = "mm/dd/yyyy"
                endPlaceholder     = "mm/dd/yyyy"
                inputState         = {inputState}
                endInputState      = {inputState}
                labelText          = "Start date"
                endLabelText       = "End date"
                infoMessage        = {text.textInputInfoMessage}
                errorMessage       = {text.textInputErrorMessage}
                endInfoMessage     = {text.textInputInfoMessage}
                endErrorMessage    = {text.textInputErrorMessage}
                datepickerValue    = {this.state.datepickerValue5}
                endDatepickerValue = {this.state.datepickerValue6}
                changeHandler      = {() => console.log('¡¡¡start-basic')}
                endChangeHandler   = {() => console.log('end-basic!!!')}
              />
            </div>

            <p className="code">{'<DatePicker range = {true} className = "" endClassName = "" id = "someGiantIdStart" endId = "someGiantIdEnd" placeholder = "mm/dd/yyyy" endPlaceholder = "mm/dd/yyyy" inputState = "default" endInputState = "default" labelText = "Start date" endLabelText = "End date" datepickerValue = {this.state.datepickerValue5} endDatepickerValue = {this.state.datepickerValue6} changeHandler = {() => console.log("¡¡¡start-basic")} endChangeHandler = {() => console.log("end-basic!!!")}/>  infoMessage = {text.textInputInfoMessage} errorMessage = {text.textInputErrorMessage}  endInfoMessage = {text.textInputInfoMessage} endErrorMessage = {text.textInputErrorMessage}'}</p>


            <h2>DatePickerRange (fancy range):</h2>

            <div>
              <DatePickerRange
                fancy              = {true}
                range              = {true}
                className          = ""
                endClassName       = ""
                id                 = "someGiantIdStart"
                endId              = "someGiantIdEnd"
                placeholder        = "mm/dd/yyyy"
                endPlaceholder     = "mm/dd/yyyy"
                inputState         = {inputState}
                endInputState      = {inputState}
                labelText          = "Start date"
                endLabelText       = "End date"
                infoMessage        = {text.textInputInfoMessage}
                errorMessage       = {text.textInputErrorMessage}
                endInfoMessage     = {text.textInputInfoMessage}
                endErrorMessage    = {text.textInputErrorMessage}
                datepickerValue    = {this.state.datepickerValue7}
                endDatepickerValue = {this.state.datepickerValue8}
                changeHandler      = {() => console.log('¡¡¡start-fancy')}
                endChangeHandler   = {() => console.log('end-fancy!!!')}
              />
            </div>

            <p className="code">{'<DatePicker fancy = {true} range = {true} className  = "" endClassName = "" id = "someGiantIdStart" endId = "someGiantIdEnd" placeholder = "mm/dd/yyyy" endPlaceholder = "mm/dd/yyyy" inputState = "default" endInputState = "default" labelText = "Start date" endLabelText = "End date" infoMessage = {text.textInputInfoMessage} errorMessage = {text.textInputErrorMessage} endInfoMessage = {text.textInputInfoMessage} endErrorMessage = {text.textInputErrorMessage} datepickerValue = {this.state.datepickerValue7} endDatepickerValue = {this.state.datepickerValue8} changeHandler = {() => console.log("¡¡¡start-fancy")} endChangeHandler = {() => console.log("end-fancy!!!")}/>'}</p>

            </div>


            <h2>DatePickerRange (basic range time):</h2>

            <div>
              <DatePickerRange
                time               = {true}
                endTime            = {true}
                range              = {true}
                className          = ""
                endClassName       = ""
                id                 = "someGiantIdStart"
                endId              = "someGiantIdEnd"
                placeholder        = "hh:mm"
                endPlaceholder     = "hh:mm"
                inputState         = {inputState}
                endInputState      = {inputState}
                labelText          = "Start time"
                endLabelText       = "End time"
                infoMessage        = {text.textInputInfoMessage}
                errorMessage       = {text.textInputErrorMessage}
                endInfoMessage     = {text.textInputInfoMessage}
                endErrorMessage    = {text.textInputErrorMessage}
                datepickerValue    = {this.state.datepickerValue9}
                endDatepickerValue = {this.state.datepickerValue10}
                changeHandler      = {() => console.log('¡¡¡start-fancy')}
                endChangeHandler   = {() => console.log('end-fancy!!!')}
              />

            <p className="code">{'<DatePicker time = {true} endTime = {true} range = {true} className = "" endClassName = "" id = "someGiantIdStart" endId = "someGiantIdEnd" placeholder = "hh:mm" endPlaceholder = "hh:mm" inputState = "default" endInputState = "default" labelText = "Start time" endLabelText = "End time" infoMessage = {text.textInputInfoMessage} errorMessage = {text.textInputErrorMessage} endInfoMessage = {text.textInputInfoMessage} endErrorMessage = {text.textInputErrorMessage} datepickerValue = {this.state.datepickerValue9} endDatepickerValue = {this.state.datepickerValue10} changeHandler = {() => console.log("¡¡¡start-fancy")} endChangeHandler = {() => console.log("end-fancy!!!")}/>'}</p>

          </div>

          <h2>DatePickerRange (fancy range time):</h2>

          <div>
            <DatePickerRange
              time               = {true}
              endTime            = {true}
              fancy              = {true}
              range              = {true}
              className          = ""
              endClassName       = ""
              id                 = "someGiantIdStart"
              endId              = "someGiantIdEnd"
              placeholder        = "hh:mm"
              endPlaceholder     = "hh:mm"
              inputState         = {inputState}
              endInputState      = {inputState}
              labelText          = "Start time"
              endLabelText       = "End time"
              infoMessage        = {text.textInputInfoMessage}
              errorMessage       = {text.textInputErrorMessage}
              endInfoMessage     = {text.textInputInfoMessage}
              endErrorMessage    = {text.textInputErrorMessage}
              datepickerValue    = {this.state.datepickerValue11}
              endDatepickerValue = {this.state.datepickerValue12}
              changeHandler      = {() => console.log('¡¡¡start-fancy')}
              endChangeHandler   = {() => console.log('end-fancy!!!')}
            />

          <p className="code">{'<DatePicker time = {true} endTime = {true} fancy = {true} range = {true} className = "" endClassName = "" id = "someGiantIdStart" endId = "someGiantIdEnd" placeholder = "hh:mm" endPlaceholder = "hh:mm" inputState = "default" endInputState = "default" labelText = "Start time" endLabelText = "End time" infoMessage = {text.textInputInfoMessage} errorMessage = {text.textInputErrorMessage} endInfoMessage = {text.textInputInfoMessage} endErrorMessage = {text.textInputErrorMessage} datepickerValue = {this.state.datepickerValue11} endDatepickerValue = {this.state.datepickerValue12} changeHandler = {() => console.log("¡¡¡start-fancy")} endChangeHandler = {() => console.log("end-fancy!!!")}/>'}</p>

        </div>

        <h2>DatePickerRange (fancy range date time):</h2>

        <div>
          <DatePickerRange
            time               = {true}
            fancy              = {true}
            range              = {true}
            className          = ""
            endClassName       = ""
            id                 = "someGiantIdStart"
            endId              = "someGiantIdEnd"
            placeholder        = "hh:mm"
            endPlaceholder     = "mm/dd/yyyy"
            inputState         = {inputState}
            endInputState      = {inputState}
            labelText          = "Enter time"
            endLabelText       = "Enter date"
            infoMessage        = {text.textInputInfoMessage}
            errorMessage       = {text.textInputErrorMessage}
            endInfoMessage     = {text.textInputInfoMessage}
            endErrorMessage    = {text.textInputErrorMessage}
            datepickerValue    = {this.state.datepickerValue11}
            endDatepickerValue = {this.state.datepickerValue12}
            changeHandler      = {() => console.log('¡¡¡start-fancy')}
            endChangeHandler   = {() => console.log('end-fancy!!!')}
          />

        <p className="code">{'<DatePicker time = {true} fancy = {true} range = {true} className = "" endClassName = "" id = "someGiantIdStart" endId = "someGiantIdEnd" placeholder = "hh:mm" endPlaceholder = "mm/dd/yyyy" inputState = "default" endInputState = "default" labelText = "Enter time" endLabelText = "Enter date" infoMessage = {text.textInputInfoMessage} errorMessage = {text.textInputErrorMessage} endInfoMessage = {text.textInputInfoMessage} endErrorMessage = {text.textInputErrorMessage} datepickerValue = {this.state.datepickerValue11} endDatepickerValue = {this.state.datepickerValue12} changeHandler = {() => console.log("¡¡¡start-fancy")} endChangeHandler = {() => console.log("end-fancy!!!")}/>'}</p>

      </div>

      <h2>DatePickerRange (basic range date time):</h2>

      <div>
        <DatePickerRange
          endTime            = {true}
          range              = {true}
          className          = ""
          endClassName       = ""
          id                 = "someGiantIdStart"
          endId              = "someGiantIdEnd"
          placeholder        = "mm/dd/yyyy"
          endPlaceholder     = "hh:mm"
          inputState         = {inputState}
          endInputState      = {inputState}
          labelText          = "Enter Date"
          endLabelText       = "Enter Time"
          infoMessage        = {text.textInputInfoMessage}
          errorMessage       = {text.textInputErrorMessage}
          endInfoMessage     = {text.textInputInfoMessage}
          endErrorMessage    = {text.textInputErrorMessage}
          datepickerValue    = {this.state.datepickerValue11}
          endDatepickerValue = {this.state.datepickerValue12}
          changeHandler      = {() => console.log('¡¡¡start-fancy')}
          endChangeHandler   = {() => console.log('end-fancy!!!')}
        />

      <p className="code">{'<DatePicker endTime = {true} range = {true} className = "" endClassName = "" id = "someGiantIdStart" endId = "someGiantIdEnd" placeholder = "mm/dd/yyyy" endPlaceholder = "hh:mm" inputState = "default" endInputState = "default" labelText = "Enter Date" endLabelText = "Enter Time" infoMessage = {text.textInputInfoMessage} errorMessage = {text.textInputErrorMessage} endInfoMessage = {text.textInputInfoMessage} endErrorMessage = {text.textInputErrorMessage} datepickerValue = {this.state.datepickerValue11} endDatepickerValue = {this.state.datepickerValue12} changeHandler = {() => console.log("¡¡¡start-fancy")} endChangeHandler = {() => console.log("end-fancy!!!")}/>'}</p>

    </div>

      </div>
      )
    }

}


export default injectIntl(DatePickerPage);
