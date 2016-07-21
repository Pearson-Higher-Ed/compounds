import React from 'react';
import DayPicker from './DayPicker';
import DateUtils from './DateUtils';


export default class SimpleCalendar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      from: null,
      to:null
    };
  }

  handleDayClick(e, day) {
    const range = DateUtils.addDayToRange(day, this.state);
    this.setState(range);
  }

  render() {
    // const {from, to} = this.state;
    // Add the `selected` modifier to the cell of the clicked day
    const modifiers = {

      selected_from: day => DateUtils.isSameDay(this.state.from, day),
      selected_to: day => DateUtils.isSameDay(this.state.to, day),
      highlighted:day => DateUtils.isDayInRange(day, this.state)

    };

    return <DayPicker enableOutsideDays modifiers={modifiers} onDayClick={this.handleDayClick.bind(this)} locale={this.props.locale}/>;
  }
}
