import React     from 'react';
import expect    from 'expect';
import moment    from 'moment';

import { mount, shallow } from 'enzyme';

import { DatePicker } from '../index';

describe('DatePicker', () => {

  describe('Basic DatePicker Test', function() {

    it('should render the DatePicker as div element', function() {
      this.wrapper = shallow(<DatePicker id="test" labelText="test" dateFormat="hh:mm" changeHandler={() => {}} />);
      expect(this.wrapper.node.type).toEqual('div');
    });

    it('should render the DatePicker in error state', function() {
      this.wrapper = mount(<DatePicker id="test" labelText="test" dateFormat="hh:mm" changeHandler={() => {}} inputState='error' />);
      expect(this.wrapper.instance().state.inputStyle).toEqual('pe-textInput--basic_error');
    });

    it('should render the DatePicker in default state', function() {
      this.wrapper = mount(<DatePicker id="test" labelText="test" dateFormat="hh:mm" changeHandler={() => {}} />);
      expect(this.wrapper.instance().state.inputStyle).toEqual('pe-textInput--basic');
    });

    it('should render the DatePicker in readOnly state', function() {
      this.wrapper = mount(<DatePicker id="test" labelText="test" dateFormat="hh:mm" changeHandler={() => {}} inputState='readOnly' />);
      expect(this.wrapper.instance().state.inputStyle).toEqual('pe-textInput--input_readonly');
    });

    it('should render the DatePicker in disabled state', function() {
      this.wrapper = mount(<DatePicker id="test" labelText="test" dateFormat="hh:mm" changeHandler={() => {}} inputState='disabled' />);
      expect(this.wrapper.instance().state.inputStyle).toEqual('pe-textInput--basic');
    });

    it('should handle the calendar', function() {
      this.wrapper = mount(<DatePicker id="test" labelText="test" dateFormat="hh:mm" changeHandler={() => {}} />);
      this.wrapper.find('input').simulate('click');
      const date ='Thu May 04 2017 00:00:00 GMT-0600 (MDT)';
      const testdate = new Date();
      this.wrapper.instance().calendarHandler(date);
      expect(this.wrapper.instance().state.datepickerValue).toEqual(moment(testdate).format('L'));
    });

    it('should check classes on the main container', function() {
      this.wrapper = mount(<DatePicker id="test" labelText="test" dateFormat="hh:mm" changeHandler={() => {}} id='errorInput' className="hithere" inputState='error' errorMessage='error message' />);
      expect(this.wrapper.find('.hithere').exists()).toEqual(true);
    });

    it('should check inputState error message', function() {
      this.wrapper = mount(<DatePicker id="test" labelText="test" dateFormat="hh:mm" changeHandler={() => {}} id='errorInput' inputState='error' errorMessage='error message' />);
      expect(this.wrapper.find('.pe-input--error_message').exists()).toEqual(true);
    });

    it('should check info message', function() {
      this.wrapper = mount(<DatePicker id="test" labelText="test" dateFormat="hh:mm" changeHandler={() => {}} id='infoInput' infoMessage='info message' />);
      expect(this.wrapper.find('.pe-input--info_message').exists()).toEqual(true);
    });

    it('should call the changehandler', function() {
      this.wrapper = mount(<DatePicker id="test" labelText="test" dateFormat="hh:mm" changeHandler={() => {}} time changeHandler={() => {}} />);
      this.wrapper.find('input').simulate('click');
      const e = {"target":{"value":"Hi There"}};
      this.wrapper.instance().changeHandler(e);
      expect(this.wrapper.instance().state.datepickerValue).toEqual("Hi There");
    });

  })
})
