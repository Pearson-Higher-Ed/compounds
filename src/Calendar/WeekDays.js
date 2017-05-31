import React, { Component } from 'react';

export default class WeekDays extends Component {
  render() {
    const that = this;
    const haystack = Array(...{ length: 7 }).map(Number.call, Number);
    return (
      <div className="r-row r-weekdays">
        {(() => {
          if (that.props.weekNumbers) {
            return <div className="r-cell r-weeknum" />;
          }
        })()}
        {haystack.map((item, i) => {
          return (
            <div className="r-cell">
              {that.props.dayNames[(that.props.startDay + i) % 7]}
            </div>
          );
        })}
      </div>
    );
  }
};
