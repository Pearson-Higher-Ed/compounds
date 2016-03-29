import React from 'react';
import expect from 'expect';
import { shallow, mount } from 'enzyme';
import { Card, CardHeader, CardContent } from '../';
import {jsdom} from 'jsdom';

describe('Card', () => {

  describe('Basic Card Test', function(){
    beforeEach(function(){
      this.wrapper = shallow(<Card></Card>);
    });

    //it('should render the Card as button element', function(){
    //  expect(this.wrapper.node.type).toEqual('button');
    //});

    it('should have the correct default className', function(){
      expect(this.wrapper.hasClass('pe-card')).toExist();
    });

  });

  describe('CardHeader Test', function(){
      beforeEach(function(){
        this.wrapper = shallow(<CardHeader>Card Header Content</CardHeader>);
      });

    it('should have the correct className', function(){
      expect(this.wrapper.hasClass('pe-card__header')).toExist();
    });

    it('should have right content', function(){
      expect(this.wrapper.text()).toEqual('Card Header Content');
    });

    describe('Nested CardHeader Test', function(){
        beforeEach(function(){
          this.wrapper = shallow(
            <CardHeader>
              <Card>
                <CardHeader>Header</CardHeader>
                <CardContent>Content</CardContent>
              </Card>
            </CardHeader>);
        });

      it('nests correctly', function(){
        var _children =  <Card>
          <CardHeader>Header</CardHeader>
          <CardContent>Content</CardContent>
        </Card>;

        expect(this.wrapper.contains(_children)).toExist();
      });
    });
  });

  describe('CardContent Test', function(){
    beforeEach(function(){
      this.wrapper = shallow(<CardContent>
        <address>
          123 Main Street<br />
          Anywhere, USA
        </address>
      </CardContent>);
    });

    it('should have the correct className', function(){
      expect(this.wrapper.hasClass('pe-card__content')).toExist();
    });

    it('should have correctly nested children', function(){
      var _address = <address>
        123 Main Street<br />
        Anywhere, USA
      </address>;

      expect(this.wrapper.contains(_address)).toExist();
    });

  });

  describe('Complex Card Test', function(){
    beforeEach(function(){
      this.wrapper = shallow(<Card>
        <CardHeader>Jane Doe</CardHeader>
        <CardContent>
          <address>
            123 Main Street<br />
            Anywhere, USA
          </address>
        </CardContent>
      </Card>);
    });

    it('should have the correct default className', function(){
      expect(this.wrapper.hasClass('pe-card')).toExist();
    });

    it('should have correctly nested children', function(){
        var _structure =
          <CardContent>
          <address>
            123 Main Street<br />
            Anywhere, USA
          </address>
          </CardContent>

        var _header = <CardHeader>Jane Doe</CardHeader>;

        expect(this.wrapper.contains(_structure)).toExist();
        expect(this.wrapper.contains(_header)).toExist();
      });
  });
});
