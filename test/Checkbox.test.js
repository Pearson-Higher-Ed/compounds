import React        from 'react';
import expect       from 'expect';
import { shallow }  from 'enzyme';
import { Checkbox } from '../index';

describe('Checkbox', () => {

  describe('Basic Checkbox Test', function() {

    it('should render the Checkbox as div element', function() {
      this.wrapper = shallow(<Checkbox  showText="show" hideText="hide" >Test Checkbox</Checkbox>);
      expect(this.wrapper.node.type).toEqual('div');
    });
    
  })
})
