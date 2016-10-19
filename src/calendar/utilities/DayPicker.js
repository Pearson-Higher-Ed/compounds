import React, { PropTypes } from 'react';
import * as Helpers from './Helpers';
import * as DateUtils from './DateUtils';
import * as LocaleUtils from './LocaleUtils';
import uuid from 'uuid';

const keys = {
  LEFT: 37,
  RIGHT: 39,
  ENTER: 13,
  SPACE: 32
};

export default class DayPicker extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentMonth: Helpers.startOfMonth(props.initialMonth)
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.initialMonth !== nextProps.initialMonth) {
      this.setState({
        currentMonth: Helpers.startOfMonth(nextProps.initialMonth)
      });
    }
  }

  allowPreviousMonth() {
    const previousMonth = DateUtils.addMonths(this.state.currentMonth, -1)
    return this.allowMonth(previousMonth);
  }

  allowNextMonth() {
    const nextMonth = DateUtils.addMonths(this.state.currentMonth, this.props.numberOfMonths);
    return this.allowMonth(nextMonth);
  }

  allowMonth(d) {
    const { fromMonth, toMonth } = this.props;
    if ((fromMonth && Helpers.getMonthsDiff(fromMonth, d) < 0) ||
      (toMonth && Helpers.getMonthsDiff(toMonth, d) > 0)) {
      return false;
    }
    return true;
  }

  showMonth(d, callback) {
    if (!this.allowMonth(d)) {
      return;
    }

    this.setState({
      currentMonth: Helpers.startOfMonth(d)
    }, callback);
  }

  showMonthAndCallHandler(d, callback) {
    this.showMonth(d, () => {
      if (callback) {
        callback();
      }
      if (this.props.onMonthChange) {
        this.props.onMonthChange(this.state.currentMonth);
      }
    });
  }

  showNextMonth(callback) {
    if (this.allowNextMonth()) {
      const nextMonth = DateUtils.addMonths(this.state.currentMonth, 1);
      this.showMonthAndCallHandler(nextMonth, callback);
    }
  }

  showPreviousMonth(callback) {
    if (this.allowPreviousMonth()) {
      const previousMonth = DateUtils.addMonths(this.state.currentMonth, -1);
      this.showMonthAndCallHandler(previousMonth, callback);
    }
  }

  getDayNodes() {
    return this.refs.dayPicker.querySelectorAll('.pe-calendar-dates:not(.pe-calendar-dates--outside)');
  }

  focusFirstDayOfMonth() {
    this.getDayNodes()[0].focus();
  }

  focusLastDayOfMonth() {
    const dayNodes = this.getDayNodes();
    dayNodes[dayNodes.length - 1].focus();
  }

  focusPreviousDay(dayNode) {
    const dayNodes = this.getDayNodes();
    const dayNodeIndex = [...dayNodes].indexOf(dayNode);

    if (dayNodeIndex === 0) {
      this.showPreviousMonth(() => { this.focusLastDayOfMonth() })
    } else {
      dayNodes[dayNodeIndex - 1].focus();
    }
  }

  focusNextDay(dayNode) {
    const dayNodes = this.getDayNodes();
    const dayNodeIndex = [...dayNodes].indexOf(dayNode);

    if (dayNodeIndex === dayNodes.length - 1) {
      this.showNextMonth(() => { this.focusFirstDayOfMonth() });
    } else {
      dayNodes[dayNodeIndex + 1].focus();
    }
  }

  focusNextWeek(dayNode) {
    const dayNodes = this.getDayNodes();
    const dayNodeIndex = [...dayNodes].indexOf(dayNode);
    const isInLastWeekOfMonth = dayNodeIndex > dayNodes.length - 8;

    if (isInLastWeekOfMonth) {
      this.showNextMonth(() => {
        const daysAfterIndex = dayNodes.length - dayNodeIndex;
        const nextMonthDayNodeIndex = 7 - daysAfterIndex;
        this.getDayNodes()[nextMonthDayNodeIndex].focus();
      });
    } else {
      dayNodes[dayNodeIndex + 7].focus();
    }
  }

  focusPreviousWeek(dayNode) {
    const dayNodes = this.getDayNodes();
    const dayNodeIndex = [...dayNodes].indexOf(dayNode);
    const isInFirstWeekOfMonth = dayNodeIndex <= 6;

    if (isInFirstWeekOfMonth) {
      this.showPreviousMonth(() => {
        const previousMonthDayNodes = this.getDayNodes();
        const startOfLastWeekOfMonth = previousMonthDayNodes.length - 7;
        const previousMonthDayNodeIndex = startOfLastWeekOfMonth + dayNodeIndex;
        previousMonthDayNodes[previousMonthDayNodeIndex].focus();
      });
    } else {
      dayNodes[dayNodeIndex - 7].focus();
    }
  }

  // Event handlers

  handleKeyDown(e) {
    e.persist();
    const { canChangeMonth, onKeyDown } = this.props;

    if (!canChangeMonth && onKeyDown) {
      onKeyDown(e);
      return;
    }

    if (canChangeMonth) {
      switch (e.keyCode) {
      case keys.LEFT:
        this.showPreviousMonth(onKeyDown);
        break;
      case keys.RIGHT:
        this.showNextMonth(onKeyDown);
        break;
      default:
        if (onKeyDown) {
          onKeyDown(e);
        }
      }
    }
  }

  handleDayKeyDown(e, day, modifiers) {
    e.persist();
    switch (e.keyCode) {
    case keys.LEFT:
      Helpers.cancelEvent(e);
      this.focusPreviousDay(e.target);
      break;
    case keys.RIGHT:
      Helpers.cancelEvent(e);
      this.focusNextDay(e.target);
      break;
    case keys.UP:
      Helpers.cancelEvent(e);
      this.focusPreviousWeek(e.target);
      break;
    case keys.DOWN:
      Helpers.cancelEvent(e);
      this.focusNextWeek(e.target);
      break;
    case keys.ENTER:
    case keys.SPACE:
      Helpers.cancelEvent(e);
      if (this.props.onDayClick) {
        this.handleDayClick(e, day, modifiers);
      }
      break;
    }
  }

  handleDayClick(e, day, modifiers) {
    e.persist();
<<<<<<< HEAD:docs/src/app/components/containers/components/DayPicker.js

    let className = "pe-calendar-dates";
    className = modifiers.map(modifier => ` ${className}--${modifier}`).join("");

    if (className !==  ` pe-calendar-dates--disabled`) {

      if (className !==  ` pe-calendar-dates--outside pe-calendar-dates--disabled`)
      {
        this.props.onDayClick(e, day, modifiers);
      }
=======
    if (modifiers.indexOf('outside') > -1) {
      this.handleOutsideDayPress(day);
>>>>>>> v0:src/calendar/utilities/DayPicker.js
    }

    if (className === ` pe-calendar-dates--outside`) {
      this.handleOutsideDayPress(day);
    }
  }

  handleDayMouseEnter(e, day, modifiers) {
    e.persist();
    this.props.onDayMouseEnter(e, day, modifiers);
  }

  handleDayMouseLeave(e, day, modifiers) {
    e.persist();
    this.props.onDayMouseLeave(e, day, modifiers);
  }

  handleOutsideDayPress(day) {
    const { currentMonth } = this.state;
    const { numberOfMonths } = this.props;
    const diffInMonths = Helpers.getMonthsDiff(currentMonth, day);
    if (diffInMonths > 0 && diffInMonths >= numberOfMonths) {
      this.showNextMonth();
    } else if (diffInMonths < 0) {
      this.showPreviousMonth();
    }
  }

  renderNavBar() {
    const isRTL = this.props.dir === 'rtl';

    const leftButton = isRTL ? this.allowNextMonth() : this.allowPreviousMonth();
    const rightButton = isRTL ? this.allowPreviousMonth() : this.allowNextMonth();

    return (
      <div className="pe-calendar-buttons">
        {leftButton &&
          <button
            key="left"
            className={`pe-btn--inverse-link`}
            aria-label="Previous"
            title="Previous month"
            onClick={() => isRTL ? this.showNextMonth() : this.showPreviousMonth()}

          >
          <span className="pe-icon--chevron-left" aria-hidden="true"></span>
          </button>
        }&nbsp;
        {rightButton &&
          <button
            key="right"
            aria-label="Next"
            title="Next month"
            className={`pe-btn--inverse-link`}
            onClick={() => isRTL ? this.showPreviousMonth() : this.showNextMonth()}
            >
            <span className="pe-icon--chevron-right" aria-hidden="true"></span>
            </button>
        }
      </div>
    );
  }

  renderCaption(date) {
    const { locale, localeUtils } = this.props;

    return (
      <div className="pe-calendar-year">
      <h3 className="pe-calendar-month" role="heading" aria-live="assertive" aria-atomic="true">
        {localeUtils.formatMonthTitle(date, locale)}
      </h3>
      {this.renderNavBar()}
      </div>
    );
  }


  renderMonth(date, i) {

    return (

      <div

       key={i}>
        {this.renderCaption(date)}
         <table className="pe-calendar-dates" role="grid" aria-labelledby={'_'+uuid.v1()}>
         <thead>
           <tr>
             {this.renderWeekDays()}
           </tr>
         </thead>
        <tbody>
           {this.renderWeeksInMonth(date)}
        </tbody>

        </table>

        </div>

    );
  }

  renderWeekDays() {
    const { locale, localeUtils } = this.props;
    const days = [];
    for (let i = 0; i < 7; i++) {
      days.push(
        <th key={i}>
          <abbr title={localeUtils.formatWeekdayLong(i, locale)}>{localeUtils.formatWeekdayShort(i, locale).split('_')}
          </abbr>
        </th>
      );
    }
    return days;
  }

  renderWeeksInMonth(month) {
    const { locale, localeUtils } = this.props;
    const firstDayOfWeek = localeUtils.getFirstDayOfWeek(locale);
    return Helpers.getWeekArray(month, firstDayOfWeek).map((week, i) =>
      <tr key={i} role="row">
        {week.map(day => this.renderDay(month, day))}
      </tr>
    );
  }

  renderDay(month, day) {
    const { enableOutsideDays, modifiers: modifierFunctions } = this.props;

    let className = 'pe-calendar-dates';
    let modifiers = [];
    const key = `${day.getFullYear()}${day.getMonth()}${day.getDate()}`;

    const isOutside = day.getMonth() !== month.getMonth();
    if (isOutside) {
      modifiers.push('outside');
    }

    if (modifierFunctions) {
      const customModifiers = Helpers.getModifiersForDay(day, modifierFunctions);
      modifiers = [...modifiers, ...customModifiers];
    }

    className = modifiers.map(modifier => ` ${className}--${modifier}`).join('');


    if (className === ' pe-calendar-dates--selected_from pe-calendar-dates--highlighted') {
      modifiers.push('selected_from');

      className =  ` pe-calendar-dates--selected_from`;
    }
    if (className === ' pe-calendar-dates--selected_to pe-calendar-dates--highlighted') {
      modifiers.push('selected_to');

      className =  ` pe-calendar-dates--selected_to`;
    }
    if (className === ' pe-calendar-dates--selected_from pe-calendar-dates--selected_to pe-calendar-dates--highlighted') {
      modifiers.push('selected_from');

      className =  ` pe-calendar-dates--selected_from`;
    }
    if (className === ' pe-calendar-dates--outside pe-calendar-dates--selected_from pe-calendar-dates--highlighted') {
      modifiers.push('selected_from');

      className =  ` pe-calendar-dates--selected_from`;
    }
    if (className === ' pe-calendar-dates--outside pe-calendar-dates--highlighted') {
      modifiers.push('highlighted');

      className =  ` pe-calendar-dates--highlighted`;
    }

    if (className === ' pe-calendar-dates--outside pe-calendar-dates--selected_to pe-calendar-dates--highlighted') {
      modifiers.push('selected_to');

      className =  ` pe-calendar-dates--selected_to`;
    }
    if (className === ' pe-calendar-dates--outside pe-calendar-dates--selected_to pe-calendar-dates--highlighted') {
      modifiers.push('selected_to');

      className =  ` pe-calendar-dates--selected_to`;
    }
    if (className === ' pe-calendar-dates--outside pe-calendar-dates--disabled') {

      className =  ` pe-calendar-dates--disabled`;
    }


    if (isOutside && !enableOutsideDays) {
      return <div key={`outside-${key}`} className={className} />;
    }

    const { onDayMouseEnter, onDayMouseLeave, onDayClick }
      = this.props;

    const { localeUtils, locale } = this.props;
    const ariaLabel = localeUtils.formatDay(day, locale);
    const ariaDisabled = isOutside ? 'true' : 'false';

    let stateText = null;
    if (modifiers[modifiers.length-1]==='selected_from') {
      stateText='First selection';
    }
    if (modifiers[modifiers.length-1]==='selected_to') {
      stateText='Last selection';
    }
    if (modifiers[modifiers.length-1]==='highlighted') {
      stateText='Highlighted';
    }

    return (
      <td key={key} className={className}
        role="gridcell"
        aria-label={ariaLabel}
        aria-disabled={ariaDisabled}
        onKeyDown={
          (e) => this.handleDayKeyDown(e, day, modifiers)}
        onMouseEnter= {onDayMouseEnter ?
          (e) => this.handleDayMouseEnter(e, day, modifiers) : null}
        onMouseLeave= {onDayMouseLeave ?
          (e) => this.handleDayMouseLeave(e, day, modifiers) : null}
        onClick= {onDayClick ?
          (e) => this.handleDayClick(e, day, modifiers) : null}
        >
        <div className="pe-calendar-dates-div">
          {this.props.renderDay(day)}
          {stateText && <span className="pe-sr-only">{stateText}</span>}
        </div>
      </td>
    );
  }

  render() {
    const { numberOfMonths, locale, canChangeMonth, reverseMonths, ...attributes } = this.props;
    const { currentMonth } = this.state;
    let className = `pe-calendar`;

    if (attributes.className) {
      className = `${className} ${attributes.className}`;
    }

    const months = [];
    let month;
    for (let i = 0; i < numberOfMonths; i++) {
      month = DateUtils.addMonths(currentMonth, i);
      months.push(this.renderMonth(month, i));
    }

    if (reverseMonths) {
      months.reverse();
    }

    return (
      <div
        className={className}
        ref="dayPicker"
        onKeyDown={e => this.handleKeyDown(e)}>
        {months}
      </div>
    );
  }
}

DayPicker.propTypes = {
  initialMonth: PropTypes.instanceOf(Date),
  numberOfMonths: PropTypes.number,

  modifiers: PropTypes.object,

  locale: PropTypes.string,
  localeUtils: PropTypes.shape({
    formatMonthTitle: PropTypes.func,
    formatWeekdayShort: PropTypes.func,
    formatWeekdayLong: PropTypes.func,
    getFirstDayOfWeek: PropTypes.func
  }),

  enableOutsideDays: PropTypes.bool,
  canChangeMonth: PropTypes.bool,
  reverseMonths: PropTypes.bool,
  fromMonth: PropTypes.instanceOf(Date),
  toMonth: PropTypes.instanceOf(Date),

  onDayClick: PropTypes.func,
  onDayMouseEnter: PropTypes.func,
  onDayMouseLeave: PropTypes.func,
  onMonthChange: PropTypes.func,
  renderDay: PropTypes.func
};

DayPicker.defaultProps = {
  initialMonth: new Date(),
  numberOfMonths: 1,
  locale: 'en',
  localeUtils: LocaleUtils,
  enableOutsideDays: false,
  canChangeMonth: true,
  reverseMonths: false,
  renderDay: day => day.getDate()
};
