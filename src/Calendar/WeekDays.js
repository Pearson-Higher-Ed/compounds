import React, { Component } from 'react';

export default class WeekDays extends Component {
  render() {
    const that = this;
    const dayNumbers = Array(...{ length: 7 }).map(Number.call, Number);
    return (
      <div className="r-row r-weekdays">
        {dayNumbers.map((item, i) => {
          return (
            <div className="r-cell pe-label--small r-cell-dayNames">
              {that.props.dayNames[(that.props.startDay + i) % 7]}
            </div>
          );
        })}
      </div>
    );
  }
};
