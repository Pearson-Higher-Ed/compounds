import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import { Dropdown } from '../index';

describe('Dropdown', () => {

  describe('Dropdown /w label', function () {
    beforeEach(function () {
      const items=['one', 'two', 'three'];
      this.wrapper = shallow(<Dropdown presentationType="label"
                                       presentationText="Label here"
                                       list={items}
                                       mobileTitle="My mobile title" />);
    });

    it('Has the correct label', function () {
      const labelText = this.wrapper.find('.dropdown-label-text');
      expect(labelText.text()).toBe('Label here');
    });
    it('Dropdown items are not checked when selected', function () {
      
    })

  })

})
