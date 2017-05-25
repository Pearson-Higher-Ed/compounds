import React from 'react';
import { Footer } from '../../index';

import { injectIntl } from 'react-intl';
import { messages }   from '../translations/defaultMessages';


const copyrightText = 'Pearson Education Inc. All Rights Reserved.';

const FooterPage = (props) => {

  const { intl } = props;

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

  const intlText = {
    copyrightText : intl.formatMessage(messages.copyrightText)
  };

  return (
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
            <li className="li-props">copyrightText:String</li>
            <li className="li-props">Used to insert copyright information.</li>
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
            {`const copyrightText= 'Pearson Education Inc.
            All Rights Reserved.'`}
            {`<Footer links={testLinks} />`}
          </p>
        <Footer links={testLinks} copyrightText={intlText.copyrightText} />
      </div>
    </div>
    );
};

export default injectIntl(FooterPage);
