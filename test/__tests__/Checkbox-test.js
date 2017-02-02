import React             from 'react';
import expect            from 'expect';
import { shallow }       from 'enzyme';
import { Checkbox } from '../../Compounds';

describe('Checkbox', () => {

  describe('Basic Checkbox Test', function() {
    beforeEach(function() {
      this.wrapper = shallow(<Checkbox label="Bacon" size="18" value="1" >Test Checkbox</Checkbox>);
    });

    it('should render the Checkbox as div element', function() {
      expect(this.wrapper.node.type).toEqual('div');
    });
  })
})
