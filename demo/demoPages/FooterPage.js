import React from 'react';
import { Footer } from '../../index';

const testLinks = [{
  text: 'First link',
  href: 'first'
}, {
  text: 'Second link',
  href: 'second'
}, {
  text: 'Last link',
  href: 'last'
}];

const FooterPage = () => (
  <div className="displaySection">
    <h1><a href="http://pearson-higher-ed.github.io/design/c/footer/beta/">Footer</a></h1>

    <div className="elementContainer">
      <div className="code">
        <h2>Props</h2>
        <h4>Required:</h4>
        <ul>
          <li className="li-props">links:Array === {`[{ text: 'First link', href: 'First href'},
            { text: 'Second link', href: 'Second href' }]`}</li>
        </ul>
        <h4>Optional:</h4>
        <ul>
          <li className="li-props">light:Boolean</li>
          <li className="li-props">The light prop can be used to provide contrast
          on a darker background.</li>
        </ul>
      </div>

      <h3>Example usage</h3>
        <p className="code">
          {`const testLinks = [{
            text: 'First link',
            href: 'first'
          }, {
            text: 'Second link',
            href: 'second'
          }, {
            text: 'Last link',
            href: 'last'
          }];`} <br/>
          {`<Footer links={testLinks} />`}
        </p>
      <Footer links={testLinks} />
    </div>
  </div>
);

export default FooterPage;
