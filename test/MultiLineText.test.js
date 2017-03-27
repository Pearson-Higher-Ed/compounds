import React             from 'react';
import expect            from 'expect';
import { shallow }       from 'enzyme';
import { MultiLineText } from '../index';

describe('MultiLineText', () => {

  describe('Basic MultiLineText Test', function() {

    it('should render the MultiLineText as div element', function() {
      this.wrapper = shallow(<MultiLineText  showText="show" hideText="hide" >Test MultiLineText</MultiLineText>);
      expect(this.wrapper.node.type).toEqual('div');
    });

  })
})
