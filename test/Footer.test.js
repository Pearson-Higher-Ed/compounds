import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import { Footer } from '../index';

describe('Footer', () => {

  describe('Basic Footer test', function () {

    it('should render the Footer', function () {
      const testLinks = [{ text: 'First', href: 'first'}, { text: 'Second', href: 'second'}];
      const wrapper = shallow(<Footer links={testLinks} />);
      expect(wrapper.node.type).toEqual('footer');
    })
  });
});
