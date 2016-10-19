import React from 'react';
import { Calendar } from 'pearson-compounds';
import Demo from '../../Demo';
import ApiDocs from '../../ApiDocs';


const code = `
// all the calendar code here??
`;

const apiData = [
  {
    title: 'Props',
    items: [
      {
        title: 'enableOutsideDays',
        propType: 'boolean',
        description: 'Days outside of the month which may be rendered. Default false'
      },
      {
        title: 'canChangeMonth',
        propType: 'boolean',
        description: 'Next/Previous buttons can change months. Default true'
      },
      {
        title: 'numberOfMonths',
        propType: 'number',
        description: 'Number of months visible at any given time (should be 1)'
      },
      {
        title: 'initialMonth',
        propType: 'date',
        description: 'Actually contains a month-year pair'
      },
      {
        title: 'modifiers',
        proptype: 'object',
        description: 'Properties of a day such as whether it is selected or highlighted'
      },
      {
        title: 'onDayClick',
        propType: 'function',
        description: 'a function for clicking'
      },
      {
        title: 'locale',
        propType: 'string',
        description: 'Language/time locale. Default "en" but can be "en-gb" for example.'
      }
    ]
  },
  {
    title: 'State',
    items: [
      {
        title: 'from',
        propType: 'date',
        description: 'begin date'
      },
      {
        title: 'to',
        propType: 'date',
        description: 'end date'
      }
    ]
  }
];

function CalendarContainer(props) {
  return (
    <div>
      <Demo code={code}>
        <Calendar/>
      </Demo>
      <ApiDocs data={apiData} />
    </div>
  );
}

export default CalendarContainer;
