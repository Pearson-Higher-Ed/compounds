import React     from 'react';
import expect    from 'expect';

import { mount, shallow } from 'enzyme';

import { DatePicker } from '../index';

describe('DatePicker', () => {

  describe('Basic DatePicker Test', function() {

    it('should render the DatePicker as div element', function() {
      this.wrapper = shallow(<DatePicker />);
      expect(this.wrapper.node.type).toEqual('div');
    });

    it('should render the DatePicker in error state', function() {
      this.wrapper = mount(<DatePicker inputState='error' />);
      expect(this.wrapper.instance().state.inputStyle).toEqual('pe-textInput--basic_error');
    });

    it('should render the DatePicker in default state', function() {
      this.wrapper = mount(<DatePicker />);
      expect(this.wrapper.instance().state.inputStyle).toEqual('pe-textInput--basic');
    });

    it('should render the DatePicker in readOnly state', function() {
      this.wrapper = mount(<DatePicker inputState='readOnly' />);
      expect(this.wrapper.instance().state.inputStyle).toEqual('pe-textInput--input_readonly');
    });

    it('should render the DatePicker in disabled state', function() {
      this.wrapper = mount(<DatePicker inputState='disabled' />);
      expect(this.wrapper.instance().state.inputStyle).toEqual('pe-textInput--basic');
    });

    it('should close the dropdown', function() {
      this.wrapper = mount(<DatePicker time />);
      this.wrapper.find('input').simulate('click');
      this.wrapper.instance().closeDropdown();
      expect(this.wrapper.find('ul').exists()).toEqual(false);
    });

    it('should handle the calendar', function() {
      this.wrapper = mount(<DatePicker />);
      this.wrapper.find('input').simulate('click');
      const date ='Thu May 04 2017 00:00:00 GMT-0600 (MDT)';
      this.wrapper.instance().calendarHandler(date);
      expect(this.wrapper.instance().state.datepickerValue).toEqual('08/04/2017');
    });

    it('should handle the timelist', function() {
      this.wrapper = mount(<DatePicker time/>);
      this.wrapper.find('input').simulate('click');
      const e = {"target":{"innerText":"Hi There"}};
      this.wrapper.instance().timeListHandler(e);
      expect(this.wrapper.instance().state.datepickerValue).toEqual("Hi There");
    });

    it('should handle the inputKeyEvents esc key', function() {
      this.wrapper = mount(<DatePicker time/>);
      this.wrapper.find('input').simulate('click');
      const e = {"target":{"innerText":"Hi There"},"which":27,"preventDefault":() => {}};
      this.wrapper.instance().inputEvents(e);
      expect(this.wrapper.find('ul').exists()).toEqual(false);
    });

    it('should handle the inputKeyEvents tab key', function() {
      this.wrapper = mount(<DatePicker time/>);
      this.wrapper.find('input').simulate('click');
      const e = {"target":{"innerText":"Hi There"},"which":9,"preventDefault":() => {}};
      this.wrapper.instance().inputEvents(e);
      expect(this.wrapper.find('ul').exists()).toEqual(false);
    });

    // it('should handle the inputKeyEvents down key', function() {
    //   this.wrapper = mount(<DatePicker time/>);
    //   this.wrapper.find('input').simulate('click');
    //   const e = {"target":{"innerText":"Hi There"},"which":40,"preventDefault":() => {}};
    //   this.wrapper.instance().inputEvents(e);
    //   expect(this.wrapper.find('ul').exists()).toEqual(false);
    // });

    it('should handle the inputKeyEvents default case', function() {
      this.wrapper = mount(<DatePicker time/>);
      this.wrapper.find('input').simulate('click');
      const e = {"target":{"innerText":"Hi There"},"which":1000,"preventDefault":() => {}};
      this.wrapper.instance().inputEvents(e);
      expect(this.wrapper.find('ul').exists()).toEqual(false);
    });

    it('should call the changehandler', function() {
      this.wrapper = mount(<DatePicker time changeHandler={() => {}} />);
      this.wrapper.find('input').simulate('click');
      const e = {"target":{"value":"Hi There"},"preventDefault":() => {}};
      this.wrapper.instance().changeHandler(e);
      expect(this.wrapper.instance().state.datepickerValue).toEqual("Hi There");
    });

  })
})
