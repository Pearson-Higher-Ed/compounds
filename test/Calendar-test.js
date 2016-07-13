import { shallow } from 'enzyme';
import React from 'react';
import {expect} from "chai";

const DayPicker = require("../docs/src/app/components/containers/components/DayPicker").default;

describe("DayPicker", () => {

  beforeEach(function() {
    this.wrapper = shallow(<DayPicker>Test</DayPicker>);
  });

  it("has the default props properly set", () => {
    const dayPicker = <DayPicker />;
    const now = new Date();
    expect(dayPicker.props.initialMonth.getMonth()).to.equal(now.getMonth());
    expect(dayPicker.props.initialMonth.getYear()).to.equal(now.getYear());
    expect(dayPicker.props.numberOfMonths).to.equal(1);
    expect(dayPicker.props.enableOutsideDays).to.equal(false);
    expect(dayPicker.props.canChangeMonth).to.equal(true);
    // expect(dayPicker.props.style).to.be.undefined;
    // expect(dayPicker.props.className).to.be.undefined;
  });

  it('should use initialMonth as the current month', () => {
    const wrapper = shallow(<DayPicker />);
    const instance = wrapper.instance();
    expect(instance.props.initialMonth.getFullYear()).to.equal(instance.state.currentMonth.getFullYear());
    expect(instance.props.initialMonth.getMonth()).to.equal(instance.state.currentMonth.getMonth());
    expect(instance.state.currentMonth.getDate()).to.equal(1);
  });

  it('should update the current month when `initialMonth` is updated', () => {
    const wrapper = shallow(<DayPicker />);
    wrapper.setProps({ initialMonth: new Date(2016, 2, 15) });
    const instance = wrapper.instance();
    expect(instance.state.currentMonth.getFullYear()).to.equal(2016);
    expect(instance.state.currentMonth.getMonth()).to.equal(2);
    expect(instance.state.currentMonth.getDate()).to.equal(1);
  });

  it('should show the previous month', () => {
    const instance = shallow(
      <DayPicker initialMonth={new Date(2015, 7, 1)} />
    ).instance();
    instance.showPreviousMonth();
    expect(instance.state.currentMonth.getMonth()).to.equal(6);
    expect(instance.state.currentMonth.getDate()).to.equal(1);
    expect(instance.state.currentMonth.getFullYear()).to.equal(2015);
  });

  it('should show the next month', () => {
    const instance = shallow(
      <DayPicker initialMonth={new Date(2015, 7, 1)} />
    ).instance();
    instance.showNextMonth();
    expect(instance.state.currentMonth.getMonth()).to.equal(8);
    expect(instance.state.currentMonth.getDate()).to.equal(1);
    expect(instance.state.currentMonth.getFullYear()).to.equal(2015);
  });
})
