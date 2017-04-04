import React         from 'react';
import expect        from 'expect';
import { shallow , mount}   from 'enzyme';
import { TextInput } from '../index';

describe('TextInput', () => {

  describe('Basic TextInput Test', function() {
    it('should render the TextInput as div element', function() {
      this.wrapper = shallow(<TextInput id="textInputTestId1" labelText="TextInput Label:" placeholder="place" changeHandler={() => {}} />);
      expect(this.wrapper.node.type).toEqual('div');
    });


    it('should apply correct style for error type', function(){
      this.wrapper = shallow(<TextInput id="textInputTestId2" labelText="TextInput Label:" placeholder="place" changeHandler={() => {}} inputState='error' />);
      this.wrapper.instance().applyTextInputStyles();
      expect(this.wrapper.find('label').node.props.className).toEqual('pe-textLabelInput__label--label_error')
    });

    it('should apply correct style for disabled type', function(){
      this.wrapper = shallow(<TextInput id="textInputTestId3" labelText="TextInput Label:" placeholder="place" changeHandler={() => {}} inputState='disabled' />);
      this.wrapper.instance().applyTextInputStyles();
      expect(this.wrapper.find('label').node.props.className).toEqual('pe-textLabelInput__label--label-disabled')
    });

    it('should apply correct style for readOnly type', function(){
      this.wrapper = shallow(<TextInput id="textInputTestId4" labelText="TextInput Label:" placeholder="place" changeHandler={() => {}} inputState='readOnly' />);
      this.wrapper.instance().componentDidMount();
      expect(this.wrapper.find('label').node.props.className).toEqual('pe-textLabelInput__label')
    });

    it('should apply correct style for no type', function(){
      this.wrapper = shallow(<TextInput id="textInputTestId5" labelText="TextInput Label:" placeholder="place" changeHandler={() => {}} />);
      this.wrapper.instance().componentDidMount();
      expect(this.wrapper.find('label').node.props.className).toEqual('pe-textLabelInput__label')
    });

    it('should apply correct style for default type', function(){
      this.wrapper = shallow(<TextInput id="textInputTestId6" labelText="TextInput Label:" placeholder="place" changeHandler={() => {}} />);
      this.wrapper.instance().componentDidMount();
      expect(this.wrapper.find('label').node.props.className).toEqual('pe-textLabelInput__label')
    });

    it('should toggle password', function(){
      this.wrapper = shallow(<TextInput password={true} id="textInputTestId6" labelText="TextInput Label:" placeholder="place" changeHandler={() => {}} />);
      this.wrapper.instance().componentDidMount();
      this.wrapper.instance().togglePassword();
      expect(this.wrapper.find('input').node.props.type).toEqual('text')
    });

    it('should render password', function(){
      this.wrapper = shallow(<TextInput password={true} id="textInputTestId6" labelText="TextInput Label:" placeholder="place" changeHandler={() => {}} />);
      this.wrapper.instance().componentDidMount();
      expect(this.wrapper.find('input').node.props.type).toEqual('password')
    });

  })
})
