import React, { Component } from 'react';
import uuid from 'uuid';

export default class WeekDays extends Component {

  render() {
    const { dayNamesFull, dayNames, startDay, contrast } = this.props;
    const dayNumbers = Array(...{ length: 7 }).map(Number.call, Number);
    const inverseColor = contrast ? 'inverse-dayNames' :'';
    const day_id = '_'+uuid.v1();
    

    return (
      <div className="pe-cal-row pe-cal-weekdays">
        {dayNumbers.map((item, i) => {
          return (
            <div className={`pe-cal-cell pe-label--small pe-cal-cell-dayNames ${inverseColor}`}
                 key={i}
            >
              <abbr id={day_id} title={dayNamesFull[i]}>
                {dayNames[(startDay + i) % 7]}
              </abbr>
            </div>
          );
        })}
      </div>
    );
  }
};
