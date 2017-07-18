import React, { Component } from 'react';

export default class WeekDays extends Component {

  render() {
    const that = this;
    const dayNumbers = Array(...{ length: 7 }).map(Number.call, Number);
    return (
      <div className="pe-cal-row pe-cal-weekdays">
        {dayNumbers.map((item, i) => {
          return (
            <div className="pe-cal-cell pe-label--small pe-cal-cell-dayNames">
              <abbr title={that.props.dayNamesFull[i]}>
                {that.props.dayNames[(that.props.startDay + i) % 7]}
              </abbr>
            </div>
          );
        })}
      </div>
    );
  }
};
