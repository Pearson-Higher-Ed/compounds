import React             from 'react';
import expect            from 'expect';
import { shallow }       from 'enzyme';
import { PasswordInput } from '../index';

describe('PasswordInput', () => {

  describe('Basic PasswordInput Test', function() {

    it('should render the PasswordInput as div element', function() {
      this.wrapper = shallow(<PasswordInput  showText="show" hideText="hide" >Test PasswordInput</PasswordInput>);
      expect(this.wrapper.node.type).toEqual('div');
    });

    it('should toggle Password text', function() {
      this.wrapper = shallow(<PasswordInput  showText="show" hideText="hide" >Test PasswordInput</PasswordInput>);
      this.wrapper.find('button').simulate('click');
      this.wrapper.update();
      expect(this.wrapper.state('passwordStatusText')).toEqual('hide');
    });
  })
})
