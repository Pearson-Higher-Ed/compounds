import React from 'react';
import { Footer } from '../../index';

const links = [{
  text: 'Terms and Conditions',
  href: 'first'
}, {
  text: 'Privacy Policy',
  href: 'second'
}, {
  text: 'Accessibility',
  href: 'last'
}];

const style = {
  height: 300,
  border: '1px solid black'
}

const FooterPage = () => (
  <div>
    <div style={style}>foo</div>
    <div style={style}>bar</div>
    <Footer links={links} light />
  </div>
);

export default FooterPage;
