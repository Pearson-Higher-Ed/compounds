import React, { Component } from 'react';

export default class Months extends Component{

  statics = {
    year: new Date().getFullYear(),
    month: new Date().getMonth(),
    date: new Date().getDate(),
    today: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate())
  }

  render() {
    let haystack;
    let day;
    let d;
    let current;
    let onClick;
    let isDate;
    let className;
    const weekStack = Array(...{ length: 7 }).map(Number.call, Number);
    const that = this;
    const startDay = this.props.firstOfMonth.getUTCDay();
    const first = this.props.firstOfMonth.getDay();
    const janOne = new Date(that.props.year, 0, 1);
    let rows = 5;

    if (startDay === 5 && this.props.daysInMonth === 31 || startDay === 6 && this.props.daysInMonth > 29) rows = 6;
    if (startDay === 0 && this.props.daysInMonth === 28) rows = 4;

    className = rows === 6 ? 'r-dates' : 'r-dates r-fix';
    haystack = Array(...{ length: rows }).map(Number.call, Number);
    day = this.props.startDay + 1 - first;
    while (day > 1) {
      day -= 7;
    }
    day -= 1;

    return (
      <div className={className}>
        {haystack.map((item, i) => {
          d = day + i * 7;
          return (
            <div className="r-row">
              {weekStack.map((item, i) => {
                d += 1;
                isDate = d > 0 && d <= that.props.daysInMonth;

                if (isDate) {
                  current = new Date(that.props.year, that.props.month, d);
                  className = current !== that.statics.today
                              ? "r-cell r-date" : "r-cell r-date r-today";
                  if (that.props.disablePast && current < that.statics.today) {
                       className += " r-past";
                  } else if (that.props.minDate !== null && current < that.props.minDate) {
                              className += " r-past";
                  }

                  if (/r-past/.test(className)) {
                    return (
                      <div className={`${className} pe-label`}>
                        {d}
                      </div>
                    );
                  }

                  return (
                    <div className={`${className} pe-label`}
                      onClick={that.props.onSelect.bind(that, that.props.year, that.props.month, d)}
                    >
                      <div className="inner-cell-square">
                        {d}
                      </div>
                    </div>
                  );
                }

                return <div className="r-cell" />;
              })}
            </div>
          );
        })}
      </div>
    );
  }
};
