import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import { Button } from '../';

describe('Button', () => {

  describe('Basic Button Test', function(){
    beforeEach(function(){
      this.wrapper = shallow(<Button>Test Button</Button>);
    });

    it('should render the Button as button element', function(){
      expect(this.wrapper.node.type).toEqual('button');
    });

    it('should have the correct default className', function(){
      expect(this.wrapper.hasClass('pe-btn')).toExist();
    });
  });

  describe('Primary Button Test', function(){
    beforeEach(function(){
      this.wrapper = shallow(<Button type="primary">Test Button</Button>);
    });

    it('should render the Button as button element', function(){
      expect(this.wrapper.node.type).toEqual('button');
    });

    it('should have the correct classNames', function(){
      expect(this.wrapper.hasClass('pe-btn')).toExist();
      expect(this.wrapper.hasClass('pe-btn--primary')).toExist();
    });

    it('should render text correctly', function(){
      expect(this.wrapper.text()).toEqual("Test Button");
    })
  });

  describe('Link Button Test', function(){
    beforeEach(function(){
      this.wrapper = shallow(<Button type="link">Link Button</Button>);
    });

    it('should render the Button as button element', function(){
      expect(this.wrapper.node.type).toEqual('button');
    });

    it('should have the correct classNames', function(){
      expect(this.wrapper.hasClass('pe-btn')).toExist();
      expect(this.wrapper.hasClass('pe-btn--link')).toExist();
    });

    it('should render text correctly', function(){
      expect(this.wrapper.text()).toEqual("Link Button");
    })
  });

  describe('Disabled Button Test', function(){
    beforeEach(function(){
      this.wrapper = shallow(<Button disabled>Disabled Button</Button>);
    });

    it('should render the Button as button element', function(){
      expect(this.wrapper.node.type).toEqual('button');
    });

    it('should have the correct classNames', function(){
      expect(this.wrapper.hasClass('pe-btn')).toExist();
      //expect(this.wrapper.hasClass('pe-btn--disabled')).toExist();
    });

    it('should render text correctly', function(){
      expect(this.wrapper.text()).toEqual("Disabled Button");
    })

    it('should have the disabled attribute', function(){
      expect(this.wrapper.prop('disabled')).toExist();
    })
  });

  describe('Primary Disabled Button Test', function(){
    beforeEach(function(){
      this.wrapper = shallow(<Button type="primary" disabled>Disabled Primary Button</Button>);
    });

    it('should render the Button as button element', function(){
      expect(this.wrapper.node.type).toEqual('button');
    });

    it('should have the correct classNames', function(){
      expect(this.wrapper.hasClass('pe-btn')).toExist();
      expect(this.wrapper.hasClass('pe-btn--primary')).toExist();
    });

    it('should render text correctly', function(){
      expect(this.wrapper.text()).toEqual("Disabled Primary Button");
    })

    it('should have the disabled attribute', function(){
      expect(this.wrapper.prop('disabled')).toExist();
    })
  });

  describe('Primary Disabled Link Test', function(){
    beforeEach(function(){
      this.wrapper = shallow(<Button type="link" disabled>Disabled Primary Link Button</Button>);
    });

    it('should render the Button as button element', function(){
      expect(this.wrapper.node.type).toEqual('button');
    });

    it('should have the correct classNames', function(){
      expect(this.wrapper.hasClass('pe-btn')).toExist();
      expect(this.wrapper.hasClass('pe-btn--link')).toExist();
    });

    it('should render text correctly', function(){
      expect(this.wrapper.text()).toEqual("Disabled Primary Link Button");
    })

    it('should have the disabled attribute', function(){
      expect(this.wrapper.prop('disabled')).toExist();
    })
  });

  describe('Small Button Test', function(){
    beforeEach(function(){
      this.wrapper = shallow(<Button size="small">Small Button</Button>);
    });

    it('should render the Button as button element', function(){
      expect(this.wrapper.node.type).toEqual('button');
    });

    it('should have the correct classNames', function(){
      expect(this.wrapper.hasClass('pe-btn')).toExist();
      expect(this.wrapper.hasClass('pe-btn--small')).toExist();
    });

    it('should render text correctly', function(){
      expect(this.wrapper.text()).toEqual("Small Button");
    });
  });


  describe('Large Button Test', function(){
    beforeEach(function(){
      this.wrapper = shallow(<Button size="large">Large Button</Button>);
    });

    it('should render the Button as button element', function(){
      expect(this.wrapper.node.type).toEqual('button');
    });

    it('should have the correct classNames', function(){
      expect(this.wrapper.hasClass('pe-btn')).toExist();
      expect(this.wrapper.hasClass('pe-btn--large')).toExist();
    });

    it('should render text correctly', function(){
      expect(this.wrapper.text()).toEqual("Large Button");
    });
  });


  describe('Mixed Button Test - Primary Small', function(){
    beforeEach(function(){
      this.wrapper = shallow(<Button type="primary" size="small">Primary Small Button</Button>);
    });

    it('should render the Button as button element', function(){
      expect(this.wrapper.node.type).toEqual('button');
    });

    it('should have the correct classNames', function(){
      expect(this.wrapper.hasClass('pe-btn')).toExist();
      expect(this.wrapper.hasClass('pe-btn--small')).toExist();
      expect(this.wrapper.hasClass('pe-btn--primary')).toExist();
    });

    it('should render text correctly', function(){
      expect(this.wrapper.text()).toEqual("Primary Small Button");
    });
  });


  describe('Mixed Button Test - Link Large Disabled', function(){
    beforeEach(function(){
      this.wrapper = shallow(<Button type="link" size="large" disabled>Link Big Disabled</Button>);
    });

    it('should render the Button as button element', function(){
      expect(this.wrapper.node.type).toEqual('button');
    });

    it('should have the correct classNames', function(){
      expect(this.wrapper.hasClass('pe-btn')).toExist();
      expect(this.wrapper.hasClass('pe-btn--large')).toExist();
      expect(this.wrapper.hasClass('pe-btn--link')).toExist();
    });

    it('should render text correctly', function(){
      expect(this.wrapper.text()).toEqual("Link Big Disabled");
    });

    it('should have the disabled attribute', function(){
      expect(this.wrapper.prop('disabled')).toExist();
    })
  });
});
