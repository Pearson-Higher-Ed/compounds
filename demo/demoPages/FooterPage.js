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

const style = {
  height: 200,
  border: '1px solid black'
}

const FooterPage = () => (
  <div>
    <div style={style}></div>
    <div style={style}></div>
    <div style={style}></div>
    <div style={style}></div>
    <div style={{ height: 72, border: '1px solid black' }}></div>
    <Footer links={links} />
  </div>
);

export default FooterPage;
