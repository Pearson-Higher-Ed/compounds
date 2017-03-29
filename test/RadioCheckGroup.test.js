import React               from 'react';
import expect              from 'expect';
import { shallow }         from 'enzyme';
import { RadioCheckGroup } from '../index';

describe('RadioCheckGroup', () => {

  describe('Basic RadioCheckGroup Test', function() {

    it('should render the RadioCheckGroup as div element', function() {
      this.wrapper = shallow(<RadioCheckGroup  options={["coffee", "tea"]} selectedOptions={["coffee"]}  showText="show" hideText="hide" />);
      expect(this.wrapper.node.type).toEqual('fieldset');
    });

  })
})
