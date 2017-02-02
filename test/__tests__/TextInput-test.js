import React         from 'react';
import expect        from 'expect';
import { shallow }   from 'enzyme';
import { TextInput } from '../../Compounds';
// import propagateToGlobal from '../utils/dom';

describe('TextInput', () => {

  describe('Basic TextInput Test', function() {
    it('should render the TextInput as div element', function() {
      this.wrapper = shallow(<TextInput id="b" type='error'>Test TextInput</TextInput>);
      expect(this.wrapper.node.type).toEqual('div');
    });

    it('should apply correct style for error type', function(){
      this.wrapper = shallow(<TextInput id="b" type='error'>Test TextInput</TextInput>);
      expect(this.wrapper.find('label').node.props.className).toEqual('pe-textLabelInput__label--label_error')
    });

    it('should apply correct style for disabled type', function(){
      this.wrapper = shallow(<TextInput id="b" type='disabled'>Test TextInput</TextInput>);
      expect(this.wrapper.find('label').node.props.className).toEqual('pe-textLabelInput__label--label-disabled')
    });

    it('should apply correct style for readOnly type', function(){
      this.wrapper = shallow(<TextInput id="b" type='readOnly'>Test TextInput</TextInput>);
      expect(this.wrapper.find('label').node.props.className).toEqual('pe-textLabelInput__label')
    });

    it('should apply correct style for no type', function(){
      this.wrapper = shallow(<TextInput id="b">Test TextInput</TextInput>);
      expect(this.wrapper.find('label').node.props.className).toEqual('pe-textLabelInput__label')
    });

    it('should apply correct style for default type', function(){
      this.wrapper = shallow(<TextInput id="b" type="default">Test TextInput</TextInput>);
      expect(this.wrapper.find('label').node.props.className).toEqual('pe-textLabelInput__label')
    });

  })
})
