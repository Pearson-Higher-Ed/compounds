import React from 'react';
import expect from 'expect';
import { createRenderer } from 'react-addons-test-utils';
import expectJSX from 'expect-jsx';
expect.extend(expectJSX);

import { Label } from '../';

describe('Label', () => {

  beforeEach(function () {
    this.renderer = createRenderer();
  });

  it('should render the default label', function () {
    this.renderer.render(<Label>Default label</Label>);

    const actualElement = this.renderer.getRenderOutput();
    const expectedElement = <span className="pe-label">Default label</span>;

    expect(actualElement).toEqualJSX(expectedElement);
  });

  it('should render a secondary label', function () {
    this.renderer.render(<Label type="secondary">Secondary label</Label>);

    const actualElement = this.renderer.getRenderOutput();
    const expectedElement = <span className="pe-label pe-label--secondary">Secondary label</span>;

    expect(actualElement).toEqualJSX(expectedElement);
  });

  it('should render a small label', function () {
    this.renderer.render(<Label size="small">Small label</Label>);

    const actualElement = this.renderer.getRenderOutput();
    const expectedElement = <span className="pe-label pe-label--small">Small label</span>;

    expect(actualElement).toEqualJSX(expectedElement);
  });

  it('should render a large label', function () {
    this.renderer.render(<Label size="large">Large label</Label>);

    const actualElement = this.renderer.getRenderOutput();
    const expectedElement = <span className="pe-label pe-label--large">Large label</span>;

    expect(actualElement).toEqualJSX(expectedElement);
  });

  it('should render the child element as the root when it is not a string', function () {
    this.renderer.render(<Label><h1>Heading 1 label</h1></Label>);

    const actualElement = this.renderer.getRenderOutput();
    const expectedElement = <h1 className="pe-label">Heading 1 label</h1>;

    expect(actualElement).toEqualJSX(expectedElement);
  });
});
