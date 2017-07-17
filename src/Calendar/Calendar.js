import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import Header from './Header';
import WeekDays from './WeekDays';
import Dates from './Dates';

import './Calendar.scss';

export default class Calendar extends Component {

  static propTypes = {
    disablePast: PropTypes.bool,
    minDate: PropTypes.object,
    onSelect: PropTypes.func
  }

  static defaultProps = {
    disablePast: false
  }

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
        this.state.selectedElement.classList.remove('pe-cal-selected');
      } else {
        this.state.selectedElement.classList.add('pe-cal-selected');
      }
    }
    return {
      firstOfMonth: new Date(year, month, 1),
      daysInMonth: new Date(year, month + 1, 0).getDate()
    };
  }

  componentWillMount() {
    document.addEventListener('keydown', this.handleKeys);
    this.setState(this.calc.call(null, this.state.year, this.state.month));
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeys);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.onSelect && prevState.selectedDt !== this.state.selectedDt) {
      this.props.onSelect.call(ReactDOM.findDOMNode(this), this.state);
    }
  }

  handleKeys = (e) => {
    if (e.which === 37 || e.which === 38 || e.which === 39 || e.which === 40 || e.which === 13) {
      e.preventDefault();
    }

    switch (e.which) {
      case 13: console.log(e.which); break; // enter
      case 37: console.log(e.which); break; // left
      case 38: console.log(e.which); break; // up
      case 39: console.log(e.which); break; // right
      case 40: console.log(e.which); break; // down
      default: break;
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
      this.state.selectedElement.classList.remove('pe-cal-selected');
      this.state.selectedElement.removeAttribute('aria-selected');
    }
    element.target.classList.add('pe-cal-selected' );
    element.target.setAttribute('aria-selected', true);
    this.setState({
      selectedYear: year,
      selectedMonth: month,
      selectedDate: date,
      selectedDt: new Date(year, month, date),
      selectedElement: element.target
    });
  }

  render() {
    const { monthNamesFull, month, year, dayNames, startDay, daysInMonth,
            firstOfMonth, selectedDate, disablePast, minDate
          } = this.state;

    return (
      <div className="pe-calendar" role="grid">
        <div className="pe-inner">
          <Header
            monthNames={monthNamesFull}
            month={month}
            year={year}
            onPrev={this.getPrev}
            onNext={this.getNext} />

          <WeekDays
            dayNames={dayNames}
            startDay={startDay} />

          <Dates
            month={month}
            year={year}
            daysInMonth={daysInMonth}
            firstOfMonth={firstOfMonth}
            startDay={startDay}
            onSelect={this.selectDate}
            disablePast={disablePast}
            minDate={minDate} />
        </div>
      </div>
    );
  }
};
