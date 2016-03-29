import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import { Label } from '../';

describe('Label', () => {

  describe('Basic Tests', function(){
    beforeEach(function(){
      this.wrapper = shallow(<Label>Test Label</Label>);
    });

    it('should render the label as span', function(){
      expect(this.wrapper.node.type).toEqual('span');
    });

    it('should have the correct default className', function(){
      expect(this.wrapper.hasClass('pe-label')).toExist();
    });
  });

  it('should render the default label', function () {
    const wrapper = shallow(<Label>Default label</Label>);
    expect(wrapper.find('.pe-label').length).toEqual(1);
    expect(wrapper.find('.pe-label').text()).toEqual("Default label");
    expect(wrapper.hasClass('pe-label')).toExist();

  });

  it('should render a secondary label', function () {
    const wrapper = shallow(<Label type="secondary">Secondary label</Label>);
    const element = wrapper.find('.pe-label--secondary');
    expect(element.length).toEqual(1);
    expect(element.text()).toEqual("Secondary label");
    expect(wrapper.hasClass('pe-label')).toExist();

  });
  //
  it('should render a small label', function () {
    const wrapper = shallow(<Label size="small">Small label</Label>);
    const element = wrapper.find('.pe-label--small');
    expect(element.length).toEqual(1);
    expect(element.text()).toEqual("Small label");
    expect(wrapper.hasClass('pe-label')).toExist();

  });

  //
  it('should render a large label', function () {
    const wrapper = shallow(<Label size="large">Large label</Label>);
    const element = wrapper.find('.pe-label--large');
    expect(element.length).toEqual(1);
    expect(element.text()).toEqual("Large label");
    expect(wrapper.hasClass('pe-label')).toExist();

  });

  it('should render an inverse label', function(){
    const wrapper = shallow(<Label inverse>Inverse label</Label>);
    const element = wrapper.find('.pe-label--inverse');
    expect(element.length).toEqual(1);
    expect(element.text()).toEqual('Inverse label');
    expect(wrapper.hasClass('pe-label')).toExist();

  });
  //
  it('should render the child element as the root when it is not a string', function () {
    const wrapper = shallow(<Label><h1>Heading 1 label</h1></Label>);
    const element = wrapper.find('.pe-label');
    //const expectedElement = <h1 className="pe-label">Heading 1 label</h1>;

    expect(wrapper.node).toEqual(element.node);
    expect(element.text()).toEqual("Heading 1 label");
    expect(wrapper.hasClass('pe-label')).toExist();


  });

  it('should concat the classNames correctly for complex labels', function(){
    const wrapper = shallow(<Label size="small" inverse type="secondary">This is complex label</Label>)
    expect(wrapper.hasClass('pe-label')).toExist();
    expect(wrapper.hasClass('pe-label--secondary')).toExist();
    expect(wrapper.hasClass('pe-label--inverse')).toExist();
    expect(wrapper.hasClass('pe-label--small')).toExist();
  });
});
