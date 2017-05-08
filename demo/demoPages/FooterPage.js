import React from 'react';
import { Footer } from '../../index';

const links = [{
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
  <Footer links={links} />
);

export default FooterPage;
