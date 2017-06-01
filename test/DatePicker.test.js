import React          from 'react';
import expect         from 'expect';
import { shallow }    from 'enzyme';
import { DatePicker } from '../index';

describe('DatePicker', () => {

  describe('Basic DatePicker Test', function() {

    it('should render the DatePicker as div element', function() {
      this.wrapper = shallow(<DatePicker />);
      expect(this.wrapper.node.type).toEqual('div');
    });

  })
})
