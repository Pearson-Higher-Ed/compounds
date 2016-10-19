import { shallow } from 'enzyme';
import React from 'react';
import expect from 'expect';

const DayPicker = require('../src/calendar/utilities/DayPicker').default;

describe('DayPicker', () => {

  beforeEach(function() {
    this.wrapper = shallow(<DayPicker>Test</DayPicker>);
  });

  it('has the default props properly set', () => {
    const dayPicker = <DayPicker />;
    const now = new Date();
    expect(dayPicker.props.initialMonth.getMonth()).toEqual(now.getMonth());
    expect(dayPicker.props.initialMonth.getYear()).toEqual(now.getYear());
    expect(dayPicker.props.numberOfMonths).toEqual(1);
    expect(dayPicker.props.enableOutsideDays).toEqual(false);
    expect(dayPicker.props.canChangeMonth).toEqual(true);
  });

  it('should use initialMonth as the current month', () => {
    const wrapper = shallow(<DayPicker />);
    const instance = wrapper.instance();
    expect(instance.props.initialMonth.getFullYear()).toEqual(instance.state.currentMonth.getFullYear());
    expect(instance.props.initialMonth.getMonth()).toEqual(instance.state.currentMonth.getMonth());
    expect(instance.state.currentMonth.getDate()).toEqual(1);
  });

  it('should update the current month when `initialMonth` is updated', () => {
    const wrapper = shallow(<DayPicker />);
    wrapper.setProps({ initialMonth: new Date(2016, 2, 15) });
    const instance = wrapper.instance();
    expect(instance.state.currentMonth.getFullYear()).toEqual(2016);
    expect(instance.state.currentMonth.getMonth()).toEqual(2);
    expect(instance.state.currentMonth.getDate()).toEqual(1);
  });

  it('should show the previous month', () => {
    const instance = shallow(
      <DayPicker initialMonth={new Date(2015, 7, 1)} />
    ).instance();
    instance.showPreviousMonth();
    expect(instance.state.currentMonth.getMonth()).toEqual(6);
    expect(instance.state.currentMonth.getDate()).toEqual(1);
    expect(instance.state.currentMonth.getFullYear()).toEqual(2015);
  });

  it('should show the next month', () => {
    const instance = shallow(
      <DayPicker initialMonth={new Date(2015, 7, 1)} />
    ).instance();
    instance.showNextMonth();
    expect(instance.state.currentMonth.getMonth()).toEqual(8);
    expect(instance.state.currentMonth.getDate()).toEqual(1);
    expect(instance.state.currentMonth.getFullYear()).toEqual(2015);
  });
})
