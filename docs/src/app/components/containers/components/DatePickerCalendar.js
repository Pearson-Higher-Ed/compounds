import React from 'react';
import { DatePickerCalendar } from 'pearson-compounds';

import Demo from '../../Demo';
import ApiDocs from '../../ApiDocs';

const code = `
// all the datepicker code here??
/*
<div className="pe-input"><label htmlFor="i2">Choose a date</label>
<div className="pe-input-group pe-input-icon">
	<div className="pe-input" style={divStyle1}>
	<Onclickout onClickOut={this.handleOnClickOutside}>
		<input ref="input" type="text" id="i2" placeholder="mm/dd/yyyy"
			onClick={this.handleOnClick}  value={this.state.value}
			onChange={this.handleInputChange}
			onFocus={this.handleOnClick} />

		<span className="pe-btn pe-btn--medium">
			<i className="pe-icon--calendar" aria-hidden="true"></i>
				<span className="pe-sr-only"></span></span>
		{this.state.showComponent ? <div style={divStyle} >
		<DayPicker enableOutsideDays id="i1"
			modifiers={modifiers}
			onDayClick={this.handleDayClick}
			initialMonth={this.state.month} locale={this.props.locale} /></div> : null
		}
		</Onclickout>
	</div>
</div></div>;*/
`;

const apiData = [
  {
    title: 'State',
    items: [
      {
        title: 'value',
        propType: 'string',
        description: 'The date as a string'
      },
      {
        title: 'month',
        propType: 'date',
        description: 'The date'
      },
      {
        title: 'showComponent',
        propType: 'boolean',
        description: 'Whether the calendar part appears'
      },
      {
        title: 'selectedDays',
        propType: 'object',
        description: 'A list of days or null'
      }
    ]
  }
];

function DatePickerContainer(props) {
  return (
    <div>
      <Demo code={code}>
        <DatePickerCalendar />
      </Demo>
      <ApiDocs data={apiData} />
    </div>
  );
}

export default DatePickerContainer;
