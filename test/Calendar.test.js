import React from 'react';
import expect from 'expect';
import { shallow, mount } from 'enzyme';
import { jsdom } from 'jsdom';
import { Calendar } from '../index';

describe('Calendar', () => {

  describe('Calendar', function () {

    it('sets the minDate properly', function() {
      const minDate= new Date(2017, 5, 5);
      const wrapper = shallow(<Calendar minDate={minDate} />);
      expect(wrapper.unrendered.props.minDate).toEqual(minDate);
    });

    it('passes intl months', function() {
      const monthsFR = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin',
        'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'];
      const wrapper = shallow(<Calendar monthNamesFull={monthsFR} />);
      expect(wrapper.node.props.children.props.children[0].props.monthNames).toEqual(monthsFR);
    });

    it('passes intl days', function() {
      const daysFR = ['dimanche', 'lundi', 'Mardi', 'Mercredi', 'Jeudi',
        'Vendredi', 'samedi'];
      const wrapper = shallow(<Calendar dayNamesFull={daysFR} />);
      expect(wrapper.node.props.children.props.children[1].props.dayNamesFull).toEqual(daysFR);
    });



  });
});
