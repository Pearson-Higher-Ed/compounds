import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import { Calendar } from '../index';

describe('Calendar', () => {

  describe('Calendar', function () {

    it('sets the minDate properly', function() {
      const minDate= new Date(2017, 5, 5);
      const wrapper = shallow(<Calendar minDate={minDate} />);
      expect(wrapper.unrendered.props.minDate).toEqual(minDate);
    });


  });
});
