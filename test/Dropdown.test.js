import React from 'react';
import expect from 'expect';
import { shallow, mount } from 'enzyme';
import { jsdom } from 'jsdom';
import { Dropdown } from '../index';

describe('Dropdown', () => {
  const items=['one', 'two', 'three'];

  describe('Dropdown /w label', function () {
    beforeEach(function () {
      this.wrapper = shallow(<Dropdown presentationType="label"
                                       presentationText="Label here"
                                       list={items}
                                       mobileTitle="My mobile title" />);
    });

    it('has the correct label', function () {
      expect(this.wrapper.find('.dropdown-label-text').text()).toBe('Label here');
    });

    it('has the correct Icon', function () {
      expect(this.wrapper.find('button').node.props.children.props.name).toEqual('dropdown-open-sm-18')
    });

    it('has the correct mobile title', function () {
      expect(this.wrapper.find('li-wrapper').root.renderer._instance.
      _currentElement.props.mobileTitle).toBe('My mobile title');
    });

  });

  describe('Dropdown in button', function () {
    beforeEach(function () {
      this.wrapper = shallow(<Dropdown presentationType="button"
                                       presentationText="Button"
                                       list={items}
                                       mobileTitle="Mobile Title" />);
    });

    it('has the correct text', function () {
      expect(this.wrapper.find('pe-btn__primary').root.renderer._instance.
      _currentElement.props.presentationText).toBe('Button');
    });

    it('has the correct Icon', function () {
      expect(this.wrapper.find('button').node.props.children.props.className).toEqual('pe-icon--dropdown-open-sm-18');
    });


  });

  describe('Dropdown - Icon only', function () {

    it('has the correct Icon', function () {
      this.wrapper = shallow(<Dropdown presentationType="icon"
                                       list={items}
                                       mobileTitle="Title" />);
      expect(this.wrapper.find('button').node.props.children.props.name).toEqual('dropdown-open-sm-24');
    });

    it('has correct state', function () {
      const document = jsdom('');
      const window = document.defaultView;
      Object.keys(document.defaultView).forEach((property) => {
        if (typeof global[property] === 'undefined') {
          global[property] = document.defaultView[property];
        }
      });

      const wrap = mount(<Dropdown presentationType="icon"
                                   list={items}
                                   mobileTitle="Title" />);
      wrap.find('div').simulate('click');
      wrap.update();
      expect(wrap.find('.li-wrapper')).toExist(true);
    });

  });

});
