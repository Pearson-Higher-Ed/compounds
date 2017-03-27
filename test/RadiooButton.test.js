import React           from 'react';
import expect          from 'expect';
import { shallow }     from 'enzyme';
import { RadioButton } from '../index';

describe('RadioButton', () => {

  describe('Basic RadioButton Test', function() {

    it('should render the RadioButton as div element', function() {
      this.wrapper = shallow(<RadioButton  showText="show" hideText="hide" >Test RadioButton</RadioButton>);
      expect(this.wrapper.node.type).toEqual('div');
    });

  })
})
