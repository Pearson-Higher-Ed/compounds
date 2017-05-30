import React from 'react';
import expect from 'expect';
import { shallow, mount } from 'enzyme';
import { spy } from 'sinon';
import { assert } from 'chai';
import { jsdom } from 'jsdom';
import { StaticAlert } from '../index';

describe('StaticAlert', () => {
  const document = jsdom('');
  Object.keys(document.defaultView).forEach((property) => {
    if (typeof global[property] === 'undefined') {
      global[property] = document.defaultView[property];
    }
  });

  describe('StaticAlert tests', function () {
    beforeEach(function () {
      this.wrapper = shallow(<StaticAlert type="Success" title="Woo!" message="Successful message" />);
    });

    it('correctly passes the type prop', function() {
      expect(this.wrapper.unrendered.props.type).toBe('Success');
    });

    it('correctly passes the title prop', function() {
      expect(this.wrapper.unrendered.props.title).toBe('Woo!');
    });

    it('correctly passes the message prop', function() {
      expect(this.wrapper.unrendered.props.message).toBe('Successful message');
    });

    it('toggles state when close button is clicked', function() {
      const wrapper = mount(<StaticAlert type="Error" title="Test title" message="Test message" />);
      expect(wrapper.node.state.isOpen).toEqual(true);

      wrapper.find('.close-title').simulate('click');
      wrapper.update();
      expect(wrapper.node.state.isOpen).toEqual(false);
    });

    it('calls componentDidMount()', function() {
      const componentDidMountSpy = spy(StaticAlert.prototype, 'componentDidMount');
      const wrapper = mount(<StaticAlert type="Information" title="Test title" message="Test message" />);

      assert.ok(StaticAlert.prototype.componentDidMount.calledOnce);

      componentDidMountSpy.restore();
    });

  });
});
