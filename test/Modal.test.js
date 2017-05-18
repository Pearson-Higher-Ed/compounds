import expect              from 'expect';
import expectJSX           from 'expect-jsx';
import React               from 'react';
import sinon               from 'sinon';


import * as Modal from '../src/Modal';


expect.extend(expectJSX);


import { mount, shallow } from 'enzyme';

const jsdom = require('jsdom').jsdom;

// setup DOM...
global.document = jsdom('<html><body><div className="ReactModalPortal"> <div id="app"></div><div id="wrapper"></div></div></body></html>');
global.window = document.defaultView;
Object.keys(document.defaultView).forEach((property) => {
 if (typeof global[property] === 'undefined') {
   global[property] = document.defaultView[property];
 }
});

// initalize text...
const text =  {
 headerTitle           : "headerTitle",
 bodyText              : "bodyText",
 closeButtonSRText     : "closeButtonSRText",
 modalSaveButtonText   : "modalSaveButtonText",
 modalCancelButtonText : "modalCancelButtonText"
};

// create a spy for the success button...
const onButtonClick = sinon.spy();


describe('Modal Suite', () => {

 // mount the component...
 const wrapper = shallow( <Modal.default text={text} footerVisible={true} successBtnHandler={onButtonClick} ><p>{text.bodyText}</p></Modal.default> );

 it('should render footer conditionally', () => {
   const footerVisible         = true;
   const text                  = {modalCancelButtonText:"hi", modalSaveButtonText:"there"};
   const successBtnHandler    = () => { console.log('¡¡success button pressed!!') }
   expect(Modal._renderFooter(footerVisible, text, successBtnHandler)).toEqualJSX(
     <div className="modalFooter" >
       <button onClick={undefined} className="modalCancel pe-btn--btn_large">{text.modalCancelButtonText}</button>
       <button onClick={() => successBtnHandler()} className="modalSave pe-btn__cta_t--btn_large">{text.modalSaveButtonText}</button>
     </div>
   );
 });


});
