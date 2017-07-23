import React          from 'react';
import expect         from 'expect';
import { shallow }    from 'enzyme';

import { TimePicker, TimePickerRange } from '../index';

describe('TimePicker', () => {

  describe('Basic TimePicker Test', function() {

    it('should render the TimePicker as div element', function() {
      this.wrapper = shallow(<TimePicker />);
      expect(this.wrapper.node.type).toEqual('div');
    });

    it('should render the TimePickerRange as div element', function() {
      this.wrapper = shallow(<TimePickerRange />);
      expect(this.wrapper.node.type).toEqual('div');
    });

  })
})
