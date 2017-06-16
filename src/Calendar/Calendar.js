import React, { Component } from 'react';
import Header from './Header';
import WeekDays from './WeekDays';
import Months from './Months';

import './Calendar.scss';

export default class Calendar extends Component {
  constructor(props) {
    super(props);

    const date = new Date();

    this.state = {
      year: date.getFullYear(),
      month: date.getMonth(),
      selectedYear: date.getFullYear(),
      selectedMonth: date.getMonth(),
      selectedDate: date.getDate(),
      selectedDt: new Date(date.getFullYear(), date.getMonth(), date.getDate()),
      startDay: 0,
      weekNumbers: false,
      minDate: this.props.minDate ? this.props.minDate : null,
      disablePast: this.props.disablePast ? this.props.disablePast : false,
      dayNames: ["S", "M", "T", "W", "T", "F", "S"],
      monthNamesFull: ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"],
      firstOfMonth: null,
      daysInMonth: null
    }
  }

  calc = (year, month) => {
    if (this.state.selectedElement) {
      if (this.state.selectedMonth !== month || this.state.selectedYear !== year) {
        this.state.selectedElement.classList.remove('r-selected');
      } else {
        this.state.selectedElement.classList.add('r-selected');
      }
    }
    return {
      firstOfMonth: new Date(year, month, 1),
      daysInMonth: new Date(year, month + 1, 0).getDate()
    };
  }

  componentWillMount() {
    this.setState(this.calc.call(null, this.state.year, this.state.month));
  }

  componentDidMount() {}

  componentDidUpdate(prevProps, prevState) {
    if (this.props.onSelect && prevState.selectedDt !== this.state.selectedDt) {
      this.props.onSelect.call(this.getDOMNode(), this.state);
    }
  }

  getPrev = () => {
    const state = {};
    if (this.state.month > 0) {
      state.month = this.state.month - 1;
      state.year = this.state.year;
    } else {
      state.month = 11;
      state.year = this.state.year - 1;
    }
    Object.assign(state, this.calc.call(null, state.year, state.month));
    this.setState(state);
  }

  getNext = () => {
    const state = {};
    if (this.state.month < 11) {
      state.month = this.state.month + 1;
      state.year = this.state.year;
    } else {
      state.month = 0;
      state.year = this.state.year + 1;
    }
    Object.assign(state, this.calc.call(null, state.year, state.month));
    this.setState(state);
  }

  selectDate = (year, month, date, element) => {
    if (this.state.selectedElement) {
      this.state.selectedElement.classList.remove('r-selected');
    }
    element.target.classList.add('r-selected');
    this.setState({
      selectedYear: year,
      selectedMonth: month,
      selectedDate: date,
      selectedDt: new Date(year, month, date),
      selectedElement: element.target
    });

    // ======pass date to the parent componenet=================================
    this.props.dateToParent.call(this, new Date(year, month, date));
    // =========================================================================
  }

  render() {
    return (
      <div className="r-calendar">
        <div className="r-inner">
          <Header
            monthNames={this.state.monthNamesFull}
            month={this.state.month}
            year={this.state.year}
            onPrev={this.getPrev}
            onNext={this.getNext} />

          <WeekDays
            dayNames={this.state.dayNames}
            startDay={this.state.startDay}
            weekNumbers={this.state.weekNumbers} />

          <Months
            month={this.state.month}
            year={this.state.year}
            daysInMonth={this.state.daysInMonth}
            firstOfMonth={this.state.firstOfMonth}
            startDay={this.state.startDay}
            onSelect={this.selectDate}
            weekNumbers={this.state.weekNumbers}
            disablePast={this.state.disablePast}
            minDate={this.state.minDate} />
        </div>
      </div>
    );
  }
};
