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
      dayNamesFull: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
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
    this.setState(this.calc.call(null, this.state.year, this.state.month));
    document.addEventListener('keydown', this.handleKeys);
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
    if (e.which === 37 || e.which === 38 || e.which === 39 || e.which === 40) {
      e.preventDefault();
    }
    const doc = document;
    const test = doc.querySelectorAll('div.pe-cal-cell-square');

    switch (e.which) {
      case 13: this.enterSelect(); break;
      case 37: doc.getElementById(`day${this.state.selectedDate - 1}`).focus();
               this.setState({selectedDate: this.state.selectedDate - 1});
        break;
      case 38: doc.getElementById(`day${this.state.selectedDate - 7}`).focus();
               this.setState({selectedDate: this.state.selectedDate - 7});
        break;
      case 39:
               doc.getElementById(`day${this.state.selectedDate + 1}`).focus();
               this.setState({selectedDate: this.state.selectedDate + 1});
        break;
      case 40: doc.getElementById(`day${this.state.selectedDate + 7}`).focus();
               this.setState({selectedDate: this.state.selectedDate + 7});
        break;
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
    console.log(document.querySelectorAll('div.pe-cal-cell-square')[1]);
    element.target.classList.add('pe-cal-selected');
    element.target.setAttribute('aria-selected', true);
    this.setState({
      selectedYear: year,
      selectedMonth: month,
      selectedDate: date,
      selectedDt: new Date(year, month, date),
      selectedElement: element.target
    });
  }

  enterSelect = () => {
    if (this.state.selectedElement) {
      this.state.selectedElement.classList.remove('pe-cal-selected');
      this.state.selectedElement.removeAttribute('aria-selected');
    }
    document.activeElement.classList.add('pe-cal-selected');
    document.activeElement.setAttribute('aria-selected', true);
    this.setState({
      selectedDate: document.activeElement.innerText,
      selectedDt: new Date(new Date().getFullYear(), new Date().getMonth(), document.activeElement.innerText),
      selectedElement: document.activeElement
    });
  }

  render() {
    const { monthNamesFull, month, year, dayNames, startDay, daysInMonth,
            firstOfMonth, selectedDate, disablePast, minDate, dayNamesFull
          } = this.state;

    return (
      <div className="pe-calendar">
        <div className="pe-inner">
          <Header
            monthNames={monthNamesFull}
            month={month}
            year={year}
            onPrev={this.getPrev}
            onNext={this.getNext} />

          <WeekDays
            dayNames={dayNames}
            dayNamesFull={dayNamesFull}
            startDay={startDay} />

          <Dates
            month={month}
            year={year}
            selectedDate={selectedDate}
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
