import React       from 'react';
import expect      from 'expect';
import { shallow } from 'enzyme';
import { Select }  from '../index';

describe('Select', () => {

  describe('Basic Select Test', function() {

    it('should render the Select as div element', function() {
      this.wrapper = shallow(<Select >Test Select</Select>);
      expect(this.wrapper.node.type).toEqual('div');
    });

  })
})
