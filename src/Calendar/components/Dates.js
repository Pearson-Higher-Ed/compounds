import React, { Component } from 'react';

export default class Dates extends Component {

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
    let secondaryDateClass='';
    const weekStack = Array(...{ length: 7 }).map(Number.call, Number);
    const { contrast, daysInMonth, firstOfMonth, year, month, selectedDate,
            disablePast, minDate, onSelect, secondaryDate } = this.props;
    const dayContrast = contrast ? 'date-inverse' :'';
    const disabledContrast = contrast ? '-inverse' :'';
    const that = this;
    const startDay = firstOfMonth.getUTCDay();
    const first = firstOfMonth.getDay();
    const janOne = new Date(year, 0, 1);
    let rows = 5;

    if (startDay === 5 && daysInMonth === 31 || startDay === 6 && daysInMonth > 29) rows = 6;
    if (startDay === 0 && daysInMonth === 28) rows = 4;

    className = rows === 6 ? 'pe-cal-dates' : 'pe-cal-dates pe-cal-fix';
    haystack = Array(...{ length: rows }).map(Number.call, Number);
    day = this.props.startDay + 1 - first;
    while (day > 1) {
      day -= 7;
    }
    day -= 1;

    return (
      <div className={className}
           role="grid"
           aria-activedescendant={`day${selectedDate}`}
           aria-labelledby="pe-cal-month"
      >
        {haystack.map((item, i) => {
          d = day + i * 7;
          return (
            <div className="pe-cal-row">
              {weekStack.map((item, i) => {
                d += 1;
                isDate = d > 0 && d <= daysInMonth;

                if (isDate) {
                  current = new Date(year, month, d);
                  className = "pe-cal-cell pe-cal-date";
                  if (disablePast && current < that.statics.today) {
                       className += " pe-cal-past";
                  } else if (minDate !== null && current < minDate) {
                              className += " pe-cal-past";
                  }

                  if (/pe-cal-past/.test(className)) {
                    return (
                      <div className={`${className}${disabledContrast} pe-label`}
                           aria-disabled={true}
                           id={`day${d}`}
                           tabIndex="0"
                      >
                        {d}
                      </div>
                    );
                  }

                  return (
                    <div className={`${className} pe-label ${dayContrast}`}>
                      {current.getDate().toString().split(' ') == that.statics.date &&
                       firstOfMonth.getMonth().toString().split(' ') == that.statics.month
                         ? <div className="currentDate-box">
                             <div className={`pe-cal-cell-square ${secondaryDate.map((i) => {
                                      i.getTime() == current.getTime()
                                      ? secondaryDateClass = 'secondary-date' : secondaryDateClass='';
                                  })} ${secondaryDateClass}`}
                                  id={`day${d}`}
                                  role="gridcell"
                                  tabIndex="0"
                                  onClick={onSelect.bind(that, year, month, d)}
                             >
                               {d}
                               <span className="pe-sr-only">Current date</span>
                             </div>
                           </div>
                         : <div className={`pe-cal-cell-square ${secondaryDate.map((i) => {
                                    i.getTime() == current.getTime()
                                    ? secondaryDateClass = 'secondary-date' : secondaryDateClass='';
                                })} ${secondaryDateClass}`}
                                id={`day${d}`}
                                role="gridcell"
                                tabIndex="0"
                                onClick={onSelect.bind(that, year, month, d)}
                           >
                             {d}
                           </div>
                      }
                    </div>
                  );
                }

                return <div className="pe-cal-cell" />;
              })}
            </div>
          );
        })}
      </div>
    );
  }
};
