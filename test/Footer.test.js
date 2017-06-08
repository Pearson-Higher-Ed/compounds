import React from 'react';
import expect from 'expect';
import { shallow, mount } from 'enzyme';
import { spy } from 'sinon';
import { assert } from 'chai';
import { jsdom } from 'jsdom';
import { Footer } from '../index';

describe('Footer', () => {
  const moreLinks = [{ text: 'One', href: 'one'}, { text: 'Two', href: 'two'}];

  describe('Footer tests', function () {
    beforeEach(function () {
      const testLinks = [{ text: 'First', href: 'first'}, { text: 'Second', href: 'second'}];
      this.wrapper = shallow(<Footer links={testLinks} copyrightText="CR text"  />);
    });

    it('should render the Footer', function () {
      expect(this.wrapper.node.type).toEqual('footer');
    });

    it('has the correct Copyright text + year', function () {
      const year = new Date().getFullYear();
      expect(this.wrapper.node.props.children[1].props.children)
      .toEqual(['Copyright © ',year,' ', 'CR text']);
    });

    it('correctly passes the light prop', function () {
      const lightProp = shallow(<Footer links={moreLinks} light />);
      expect(this.wrapper.instance().props.light).toEqual(false);
      expect(lightProp.instance().props.light).toEqual(true);
    });

    it('calls componentDidMount()', function () {
      const document = jsdom('');
      Object.keys(document.defaultView).forEach((property) => {
        if (typeof global[property] === 'undefined') {
          global[property] = document.defaultView[property];
        }
      });
      const componentDidMountSpy = spy(Footer.prototype, 'componentDidMount');
      const wrapper = mount(<Footer links={moreLinks} />);

      assert.ok(Footer.prototype.componentDidMount.calledOnce);

      componentDidMountSpy.restore();
    });

  });
});
