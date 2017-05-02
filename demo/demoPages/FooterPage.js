import React from 'react';
import { Footer } from '../../index';

const test = [{
  text: 'one',
  href: 'test'
}, {
  text: 'two',
  href: 'another test'
}, {
  text: 'three',
  href: 'final'
}];

const FooterPage = () => (
  <Footer links={test} />
);

export default FooterPage;
