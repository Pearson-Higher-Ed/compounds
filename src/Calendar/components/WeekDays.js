import React, { Component } from 'react';

export default class WeekDays extends Component {

  render() {
    const { dayNamesFull, dayNames, startDay, contrast } = this.props;
    const dayNumbers = Array(...{ length: 7 }).map(Number.call, Number);
    const inverseColor = contrast ? 'inverse-dayNames' :'';

    return (
      <div className="pe-cal-row pe-cal-weekdays">
        {dayNumbers.map((item, i) => {
          return (
            <div className={`pe-cal-cell pe-label--small pe-cal-cell-dayNames ${inverseColor}`}
                 key={i}
            >
              <abbr title={dayNamesFull[i]}>
                {dayNames[(startDay + i) % 7]}
              </abbr>
            </div>
          );
        })}
      </div>
    );
  }
};