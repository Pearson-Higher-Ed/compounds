import React             from 'react';
import expect            from 'expect';
import { shallow }       from 'enzyme';
import { PasswordInput } from '../../Compounds';

describe('PasswordInput', () => {

  describe('Basic PasswordInput Test', function() {
    beforeEach(function() {
      this.wrapper = shallow(<PasswordInput>Test PasswordInput</PasswordInput>);
    });

    it('should render the PasswordInput as div element', function() {
      expect(this.wrapper.node.type).toEqual('div');
    });
  })
})
