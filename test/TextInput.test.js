import React         from 'react';
import expect        from 'expect';
import { shallow }   from 'enzyme';
import { TextInput } from '../index';

describe('TextInput', () => {

  describe('Basic TextInput Test', function() {
    it('should render the TextInput as div element', function() {
      this.wrapper = shallow(<TextInput id="b" />);
      expect(this.wrapper.node.type).toEqual('div');
    });

    it('should apply correct style for error type', function(){
      this.wrapper = shallow(<TextInput id="c" inputState='error' />);
      expect(this.wrapper.find('label').node.props.className).toEqual('pe-textLabelInput__label--label_error')
    });

    it('should apply correct style for disabled type', function(){
      this.wrapper = shallow(<TextInput id="d" inputState='disabled' />);
      expect(this.wrapper.find('label').node.props.className).toEqual('pe-textLabelInput__label--label-disabled')
    });

    it('should apply correct style for readOnly type', function(){
      this.wrapper = shallow(<TextInput id="e" inputState='readOnly' />);
      expect(this.wrapper.find('label').node.props.className).toEqual('pe-textLabelInput__label')
    });

    it('should apply correct style for no type', function(){
      this.wrapper = shallow(<TextInput id="f" />);
      expect(this.wrapper.find('label').node.props.className).toEqual('pe-textLabelInput__label')
    });

    it('should apply correct style for default type', function(){
      this.wrapper = shallow(<TextInput id="g" />);
      expect(this.wrapper.find('label').node.props.className).toEqual('pe-textLabelInput__label')
    });

  })
})
