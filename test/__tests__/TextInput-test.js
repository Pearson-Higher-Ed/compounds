import React         from 'react';
import expect        from 'expect';
import { shallow }   from 'enzyme';
import { TextInput } from '../../Compounds';

describe('TextInput', () => {

  describe('Basic TextInput Test', function() {
    beforeEach(function() {
      this.wrapper = shallow(<TextInput>Test TextInput</TextInput>);
    });

    it('should render the TextInput as div element', function() {
      expect(this.wrapper.node.type).toEqual('div');
    });
  })
})
