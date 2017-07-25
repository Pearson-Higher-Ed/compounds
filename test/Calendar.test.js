import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import { Calendar } from '../index';

describe('Calendar', () => {

  describe('Placeholder', function () {
    beforeEach(function () {
      const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      const months = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];
      this.wrapper = shallow(<Calendar dayNamesFull={days} monthNamesFull={months} />);
    });

    it('blah', function() {
      expect(this.wrapper.node.type.toEqual('div'));
    });


  });
});
