import React from 'react';
import expect from 'expect';
import { shallow, mount } from 'enzyme';
import jsdom from 'jsdom';
import sinon from 'sinon';
import { Button, DropdownMenu, DropdownMenuDivider, DropdownMenuItem } from '../lib';

const exposedProperties = ['window', 'navigator', 'document'];

global.document = jsdom.jsdom('');
global.window = document.defaultView;
Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property);
    global[property] = document.defaultView[property];
  }
});

global.navigator = {
  userAgent: 'node.js'
};

describe('DropDown', () => {


  describe('Basic Dropdown Test', function() {
    beforeEach(function() {
      this.wrapper = shallow(
        <div>
          <Button id='the-button' data-toggle='dropdown' data-target='demo-dropdown'>Toggle Default Dropdown</Button>
          <DropdownMenu id='demo-dropdown'>
            <DropdownMenuItem><a href='#'>Menu Item 1</a></DropdownMenuItem>
            <DropdownMenuItem><a href='#'>Menu Item 2</a></DropdownMenuItem>
            <DropdownMenuDivider></DropdownMenuDivider>
          </DropdownMenu>
        </div>);

      this.button = shallow(this.wrapper.find('#the-button').node);
      this.dropdown = shallow(this.wrapper.find('#demo-dropdown').node);
    });

    it('button should be set up correctly', function() {
      expect(this.button).toExist();
      expect(this.button.length).toBe(1);
      expect(this.button.hasClass('pe-btn')).toExist();
      expect(this.button.text()).toBe('Toggle Default Dropdown');
      expect(this.button.prop('data-toggle')).toEqual('dropdown');
      expect(this.button.prop('data-target')).toEqual('demo-dropdown');
    });

    it('dropdown should be set up correctly', function() {
      expect(this.dropdown).toExist();
      expect(this.dropdown.length).toBe(1);
    });

    describe('dropdown child test', function() {

      beforeEach(function() {
        this.child = shallow(this.dropdown.children().nodes[0]);
        this.child2 = shallow(this.dropdown.children().nodes[1]);
        this.divider = shallow(this.dropdown.children().nodes[2]);
      });

      it('children should be set up correctly', function() {
        expect(this.dropdown.find('.pe-dropdown-menu__menu-items')).toExist();
        expect(this.dropdown.children().length).toBe(3);
        expect(this.dropdown.children().nodes[0].type).toEqual(DropdownMenuItem);
        expect(this.dropdown.children().nodes[1].type).toEqual(DropdownMenuItem);
      });

      it('child should have correct class name', function() {
        expect(this.child.hasClass('pe-dropdown-menu__menu-item')).toExist();
      });

      it('children should have correct text', function() {
        expect(this.child.text()).toEqual('Menu Item 1');
        expect(this.child2.text()).toEqual('Menu Item 2');
      });

      it('should set up divider correctly', function() {
        expect(this.divider.hasClass('pe-dropdown-menu__divider')).toExist();
        expect(this.divider.prop('role')).toEqual('seperator');
      });

    });


  });

  describe('Dropdown Event Test', function() {
    beforeEach(function() {
      this.wrapper = mount(<DropdownMenu id='myMenu'>
        <DropdownMenuItem><a href='#'>Menu Item 1</a></DropdownMenuItem>
        <DropdownMenuItem><a href='#'>Menu Item 2</a></DropdownMenuItem>
        <DropdownMenuDivider></DropdownMenuDivider>
      </DropdownMenu>);
    });

    it('should contain element', function() {
      expect(this.wrapper.render().find('.pe-dropdown-menu')).toExist();
    });

    it('should work with events correctly', function() {
      const e = {
        which : 38
      };
      this.wrapper.simulate('keyDown', e);
      console.log(this.wrapper.state());

    });

    it('should focus correctly', function() {
      const e = {
        which : 38
      };
      this.wrapper.simulate('keyDown', e);

    });

    it('should toggle', function() {
      this.wrapper.childAt(0).simulate('click');
      const e = {
        which : 38
      };
      this.wrapper.simulate('keyDown', e);
    });


    describe('it should only respond to pertinent keyboard events', function() {
      beforeEach(function() {
        this.spy = sinon.spy();
        this.e = {
          preventDefault : this.spy
        };
      });

      it('should respond to key up', function() {
        this.e.which = 38;
        this.wrapper.simulate('keyDown', this.e);
        expect(this.spy.calledOnce).toBe(true);
      })

      it('should respond to key down', function() {
        this.e.which = 40;
        this.wrapper.simulate('keyDown', this.e);
        expect(this.spy.calledOnce).toBe(true);
      })

      it('should respond to escape', function() {
        this.e.which = 27;
        this.wrapper.simulate('keyDown', this.e);
        expect(this.spy.calledOnce).toBe(true);
      })

      it('should respond to space', function() {
        this.e.which = 32;
        this.wrapper.simulate('keyDown', this.e);
        expect(this.spy.calledOnce).toBe(true);
      })

      it('should not respond to any other key', function() {

        for (let i = 0; i< 100; i++) {
          if ([38, 40, 27, 32].indexOf(i) === -1) {
            this.e.which = i;
            this.wrapper.simulate('keyDown', this.e);
            expect(this.spy.calledOnce).toBe(false);
          }
        }

      })

    });

  });

  describe('Inverse Dropdown Test', function() {
    beforeEach(function() {

      this.wrapper = shallow(
        <div>
          <Button id='the-button' data-toggle='dropdown' data-target='demo-dropdown-inverse'>Toggle Default Dropdown</Button>
          <DropdownMenu inverse id='demo-dropdown-inverse'>
            <DropdownMenuItem><a href='#'>Menu Item 1</a></DropdownMenuItem>
            <DropdownMenuItem><a href='#'>Menu Item 2</a></DropdownMenuItem>
            <DropdownMenuDivider></DropdownMenuDivider>
          </DropdownMenu>
        </div>);

      this.button = shallow(this.wrapper.find('#the-button').node);
      this.dropdown = shallow(this.wrapper.find('#demo-dropdown-inverse').node);

    });

    it('should contain the right className', function() {
      expect(this.wrapper.render().find('.pe-dropdown-menu--inverse')).toExist();
    })

    it('button should be set up correctly', function() {
      expect(this.button).toExist();
      expect(this.button.length).toBe(1);
      expect(this.button.hasClass('pe-btn')).toExist();
      expect(this.button.text()).toBe('Toggle Default Dropdown');
      expect(this.button.prop('data-toggle')).toEqual('dropdown');
      expect(this.button.prop('data-target')).toEqual('demo-dropdown-inverse');
    });

    it('dropdown should be set up correctly', function() {
      expect(this.dropdown).toExist();
      expect(this.dropdown.length).toBe(1);
      expect(this.dropdown.prop('inverse')).toExist();
    });

    describe('dropdown child test', function() {

      beforeEach(function() {
        this.child = shallow(this.dropdown.children().nodes[0]);
        this.child2 = shallow(this.dropdown.children().nodes[1]);
        this.divider = shallow(this.dropdown.children().nodes[2]);
      });

      it('children should be set up correctly', function() {
        expect(this.dropdown.find('.pe-dropdown-menu__menu-items')).toExist();
        expect(this.dropdown.children().length).toBe(3);
        expect(this.dropdown.children().nodes[0].type).toEqual(DropdownMenuItem);
        expect(this.dropdown.children().nodes[1].type).toEqual(DropdownMenuItem);
      });

      it('child should have correct class name', function() {
        expect(this.child.hasClass('pe-dropdown-menu__menu-item')).toExist();
      });

      it('children should have correct text', function() {
        expect(this.child.text()).toEqual('Menu Item 1');
        expect(this.child2.text()).toEqual('Menu Item 2');
      });

      it('should set up divider correctly', function() {
        expect(this.divider.hasClass('pe-dropdown-menu__divider')).toExist();
        expect(this.divider.prop('role')).toEqual('seperator');
      });

    });

  });

});
