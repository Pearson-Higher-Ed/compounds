import React, { Component } from 'react';
import { injectIntl }       from 'react-intl';
import { messages }         from '../translations/defaultMessages';
import { Button }           from '../../index';

import { Modal as ModalWithOutFooter } from '../../index';
import { Modal as ModalWithFooter }    from '../../index';


class ModalPage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      firstModalIsShown  : false,
      secondModalIsShown : false,
    };

    this.firstButtonHandler  = _firstButtonHandler.bind(this);
    this.secondButtonHandler = _secondButtonHandler.bind(this);

  }

  render() {

    const { firstModalIsShown, secondModalIsShown } = this.state;

    // ======================Internationalization Example=======================
    // intl prop is injected by the injectIntl() at the bottom of the page...
    // Provider Context wraps the root element in demo.js.

    const { intl } = this.props;

    // do the intl string replacement...
    const text =  {
      initiatingButtonText  : intl.formatMessage(messages.initiatingButtonText),
      initiatingButtonText2 : intl.formatMessage(messages.initiatingButtonText2),
      headerTitle           : intl.formatMessage(messages.headerTitle),
      bodyText              : intl.formatMessage(messages.bodyText),
      closeButtonSRText     : intl.formatMessage(messages.closeButtonSRText),
      modalSaveButtonText   : intl.formatMessage(messages.modalSaveButtonText),
      modalCancelButtonText : intl.formatMessage(messages.modalCancelButtonText)
    };


    return (
        <div className="displaySection">
          <h1><a href="http://pearson-higher-ed.github.io/design/c/modal/beta/">Modal</a></h1>
          <br />
          <p className="summary" >Modal interrupts the user with a message or request for certain actions with a block of content on top of the main view.</p>
          <br />
          <div className="elementContainer">

            <ModalWithFooter id="modalWithFooter" isShown={firstModalIsShown} text={text} footerVisible={true} cancelBtnHandler={() => this.setState({firstModalIsShown:false})} successBtnHandler={() => console.log("Success!!!!!!")} >
              <p>{text.bodyText}</p>
            </ModalWithFooter>

            <ModalWithOutFooter id="modalWithOutFooter" isShown={secondModalIsShown} text={text} footerVisible={false} cancelBtnHandler={() => this.setState({secondModalIsShown:false})} successBtnHandler={() => console.log("Success!!!!!!")} >
              <p>{text.bodyText}</p>
            </ModalWithOutFooter>

            <Button
              btnType="primary"
              btnSize="xlarge"
              onClick={this.firstButtonHandler}
              >
              {text.initiatingButtonText}
            </Button>

            <br />
            <br />

            <Button
              btnType="cta"
              btnSize="xlarge"
              onClick={this.secondButtonHandler}
              >
              {text.initiatingButtonText2}
            </Button>

          </div>

          <div className="code">
            <h2>Props:</h2>
            <ul>
              <li>text:Object === 'initiatingButtonText', 'headerTitle', 'bodyText', 'closeButtonSRText', 'modalSaveButtonText', 'modalCancelButtonText'</li>
              <li>footerVisible:Boolean === true/false (close button and footer are mutually exclusive.)</li>
              <li>isShown:Boolean === true/false (opens the modal when true)</li>
              <li>successBtnHandler:Function === () => console.log("hi there")</li>
              <li>cancelBtnHandler:Function === () => console.log("hi there") function to handle closing modal should set of modalIsOpen to false</li>
            </ul>
          </div>
          <br />
          <p className="code">{"import { Modal } from 'pearson-compounds';"}</p>
          <p className="code">{'<Modal isShown={firstModalIsShown} text={text} footerVisible={true} cancelBtnHandler={() => this.setState({firstModalIsShown:false})} successBtnHandler={() => console.log("Success!!!!!!")} ><p>{text.bodyText}</p></Modal>'}</p>
          <br />
          <p>Modal also accepts children for addtional custom configureation:</p>
          <p className="code">{'<Modal isShown={true} text={text} footerVisible={true} successBtnHandler={() => console.log("Success!!")} ><p>hi there</p></Modal>'}</p>
          <p>Import Multiple Modals:</p>
          <p className="code">{"import { Modal as ModalWithFooter } from 'pearson-compounds';"}</p>
          <p className="code">{"import { Modal as ModalWithOutFooter } from 'pearson-compounds';"}</p>
          <p className="code">{'<ModalWithFooter isShown={firstModalIsShown} text={text} footerVisible={true} cancelBtnHandler={() => this.setState({firstModalIsShown:false})} successBtnHandler={() => console.log("Success!!!!!!")} ><p>{text.bodyText}</p></ModalWithFooter>'}</p>
          <p className="code">{'<ModalWithOutFooter isShown={secondModalIsShown} text={text} footerVisible={false} cancelBtnHandler={() => this.setState({secondModalIsShown:false})} successBtnHandler={() => console.log("Success!!!!!!")} ><p>{text.bodyText}</p></ModalWithOutFooter>'}</p>
        </div>
      )
    }

}


export default injectIntl(ModalPage);


function _firstButtonHandler (){
  this.setState({firstModalIsShown:true});
}

function _secondButtonHandler (){
  this.setState({secondModalIsShown:true});
}

function _cancelBtnHandler (){
  this.setState({modalIsOpen:false});
}

function _successBtnHandler() {
  console.log("Success!!!");
}
