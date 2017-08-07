import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Header from './components/Header';
import WeekDays from './components/WeekDays';
import Dates from './components/Dates';
import './Calendar.scss';

export default class Calendar extends Component {

  static propTypes = {
    disablePast: PropTypes.bool,
    minDate: PropTypes.object,
    secondaryDate: PropTypes.array,
    onSelect: PropTypes.func,
    contrast: PropTypes.bool,
    dayNamesFull: PropTypes.array,
    monthNamesFull: PropTypes.array,
    weekStartDay: PropTypes.number,
    dayNamesShort: PropTypes.array
  }

  static defaultProps = {
    disablePast: false,
    contrast: false,
    weekStartDay: 0
  }

  constructor(props) {
    super(props);

    const date = new Date();
    const { minDate, disablePast, contrast, dayNamesFull,
            monthNamesFull, weekStartDay, secondaryDate, dayNamesShort } = this.props;

    this.state = {
      year: date.getFullYear(),
      month: date.getMonth(),
      selectedYear: date.getFullYear(),
      selectedMonth: date.getMonth(),
      selectedDate: date.getDate(),
      selectedDt: new Date(date.getFullYear(), date.getMonth(), date.getDate()),
      startDay: weekStartDay,
      minDate: minDate ? minDate : null,
      secondaryDate: secondaryDate ? secondaryDate : [],
      disablePast: disablePast ? disablePast : false,
      contrast: contrast ? contrast : false,
      dayNames: dayNamesShort || ["S", "M", "T", "W", "T", "F", "S"],
      dayNamesFull: dayNamesFull || ["Sunday", "Monday", "Tuesday", "Wednesday",
        "Thursday", "Friday", "Saturday"],
      monthNamesFull: monthNamesFull || ["January", "February", "March", "April",
        "May", "June", "July", "August", "September", "October", "November", "December"],
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
  }

  componentDidMount() {
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

    switch (e.which) {
      case 13: this.enterSelect(); break;
      case 37: this.leftArrow(); break;
      case 38: this.upArrow(); break;
      case 39: this.rightArrow(); break;
      case 40: this.downArrow(); break;
      default: break;
    }
  }

  leftArrow = () => {
    if (this.state.selectedDate <= 1) {
      this.getPrev();
      this.setState({selectedDate: this.state.daysInMonth});
      document.getElementById(`day${this.state.daysInMonth}`).focus();
    } else {
      this.setState({selectedDate: this.state.selectedDate - 1});
      document.getElementById(`day${this.state.selectedDate}`).focus();
    }
  }

  rightArrow = () => {
    if (this.state.selectedDate >= this.state.daysInMonth) {
      this.getNext();
      this.setState({selectedDate: 1});
      document.getElementById('day1').focus();
    } else {
      this.setState({selectedDate: this.state.selectedDate + 1});
      document.getElementById(`day${this.state.selectedDate}`).focus();
    }
  }

  upArrow = () => {
    if (this.state.selectedDate - 7 < 1) {
      const dayDiff = this.state.selectedDate - 7;
      this.getPrev();
      this.setState({selectedDate: this.state.daysInMonth + dayDiff});
      document.getElementById(`day${this.state.selectedDate}`).focus();
    } else {
      this.setState({selectedDate: this.state.selectedDate - 7});
      document.getElementById(`day${this.state.selectedDate}`).focus();
    }
  }

  downArrow = () => {
    if (this.state.selectedDate + 7 > this.state.daysInMonth) {
      const diff = (this.state.selectedDate + 7) - this.state.daysInMonth;
      this.setState({selectedDate: diff});
      this.getNext();
      document.getElementById(`day${this.state.selectedDate}`).focus();
    } else {
      this.setState({selectedDate: this.state.selectedDate + 7});
      document.getElementById(`day${this.state.selectedDate}`).focus();
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
    const selectInverse = this.props.contrast ? '-inverse' :'';
    if (this.state.selectedElement) {
      this.state.selectedElement.classList.remove(`pe-cal-selected${selectInverse}`);
      this.state.selectedElement.removeAttribute('aria-selected');
    }
    element.target.classList.add(`pe-cal-selected${selectInverse}`);
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
    const selectInverse = this.props.contrast ? '-inverse' :'';
    const icons = document.querySelectorAll('button.pe-arrowIcons');
    const days = document.querySelectorAll('div.pe-cal-cell-square');
    if (this.state.selectedElement) {
      this.state.selectedElement.classList.remove(`pe-cal-selected${selectInverse}`);
      this.state.selectedElement.removeAttribute('aria-selected');
    }
    if (document.activeElement.hasAttribute('aria-disabled')) return;
    for (let i = 0; i < days.length; i++) {
      if (document.activeElement === days[i]) {
        document.activeElement.classList.add(`pe-cal-selected${selectInverse}`);
        document.activeElement.setAttribute('aria-selected', true);
        this.setState({
          selectedYear: this.state.year,
          selectedMonth: this.state.month,
          selectedDate: parseInt(document.activeElement.innerText),
          selectedDt: new Date(new Date().getFullYear(), new Date().getMonth(), parseInt(document.activeElement.innerText)),
          selectedElement: document.activeElement
        });
      }
    }
  }

  render() {
    const { monthNamesFull, month, year, dayNames, startDay, daysInMonth,
            firstOfMonth, selectedDate, disablePast, minDate, dayNamesFull,
            contrast, secondaryDate } = this.state;

    const colorSwap = contrast ? 'calendar-contrast' :'';

    return (
      <div className={`pe-calendar ${colorSwap}`}>
        <div className="pe-inner">
          <Header
            monthNames={monthNamesFull}
            month={month}
            contrast={contrast}
            year={year}
            onPrev={this.getPrev}
            onNext={this.getNext} />

          <WeekDays
            contrast={contrast}
            dayNames={dayNames}
            dayNamesFull={dayNamesFull}
            startDay={startDay} />

          <Dates
            month={month}
            year={year}
            contrast={contrast}
            selectedDate={selectedDate}
            daysInMonth={daysInMonth}
            firstOfMonth={firstOfMonth}
            startDay={startDay}
            onSelect={this.selectDate}
            disablePast={disablePast}
            minDate={minDate}
            secondaryDate={secondaryDate} />
        </div>
      </div>
    );
  }
};
