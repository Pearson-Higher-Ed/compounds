import React, { Component } from 'react';
import { injectIntl }       from 'react-intl';
import { messages }         from '../translations/defaultMessages';
import { Button }           from '../../index';

import { Modal as ModalWithOutFooter } from '../../index';
import { Modal as ModalWithFooter }    from '../../index';
import { Modal }                       from '../../index';


class ModalPage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      firstModalIsShown  : false,
      secondModalIsShown : false,
      thirdModalIsShown  : false
    };

    this.firstButtonHandler  = _firstButtonHandler.bind(this);
    this.secondButtonHandler = _secondButtonHandler.bind(this);

  }


  render() {

    const { firstModalIsShown, secondModalIsShown, thirdModalIsShown } = this.state;


    // ======================Internationalization Example=======================
    // intl prop is injected by the injectIntl() at the bottom of the page...
    // Provider Context wraps the root element in demo.js.

    const { intl } = this.props;

    // do the intl string replacement...
    const text =  {
      initiatingButtonText  : intl.formatMessage(messages.initiatingButtonText),
      initiatingButtonText2 : intl.formatMessage(messages.initiatingButtonText2),
      initiatingButtonText3 : intl.formatMessage(messages.initiatingButtonText3),
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

            <Modal id="event" isShown={thirdModalIsShown} text={text}></Modal>

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

            <br />
            <br />

            <Button
              btnSize="xlarge"
              onClick={() => document.body.dispatchEvent(new CustomEvent('toggleModal_event', { detail:{ isShown:true, footerVisible:true, text:text, cancelBtnHandler:_cancelBtnHandler, successBtnHandler:_successBtnHandler , children:React.createElement('p',{},'hi there')  }}) )}
              >
              {text.initiatingButtonText3}
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
          <p className="code">{'<Modal isShown={true} text={text} footerVisible={true} successBtnHandler={() => console.log("Success!!")}/>'}</p>
          <br />
          <p>Modal also accepts children for addtional custom configureation:</p>
          <p className="code">{'<Modal isShown={true} text={text} footerVisible={true} successBtnHandler={() => console.log("Success!!")} ><p>hi there</p></Modal>'}</p>
          <br />
          <p>Can Be Triggered By A Custom Event:</p>
          <p className="code">{"document.body.dispatchEvent(new CustomEvent('toggleModal_<id>'))"}</p>
          <p>Can Be Overriden By A Custom Event with a detail object:</p>
          <p className="code">{"document.body.dispatchEvent(new CustomEvent('toggleModal_event', { detail:{ isShown:true, footerVisible:true, text:text, cancelBtnHandler:() => this.setState({thirdModalIsShown:false}), successBtnHandler:this.successBtnHandler , children:React.createElement('p',{},'hi there')  }}) )}"}</p>
          <br />
          <p>Import Multiple Modals:</p>
          <p className="code">{"import { Modal } from 'pearson-compounds';"}</p>
          <p className="code">{"import { Modal as OtherModal } from 'pearson-compounds';"}</p>
          <p className="code">{"import { Modal as ThirdModal } from 'pearson-compounds';"}</p>
          <p className="code">{'<Modal isShown={true} text={text} footerVisible={true} cancelBtnHandler:() => this.setState({thirdModalIsShown:false}) successBtnHandler={() => console.log("Success!!")}/>'}</p>
          <p className="code">{'<OtherModal isShown={true} text={text} footerVisible={true} cancelBtnHandler:() => this.setState({thirdModalIsShown:false}) successBtnHandler={() => console.log("Success!!")}><p>Hi</p></OtherModal>'}</p>
          <p className="code">{'<ThirdModal isShown={true} text={text} footerVisible={true} cancelBtnHandler:() => this.setState({thirdModalIsShown:false}) successBtnHandler={() => console.log("Success!!")}><p>HiThere</p></ThirdModal>'}</p>
          <br />
          <br />
          <p>Example Button dispatching custom event to toggle modal:</p>
          <p className="code">{"import { Button } from 'pearson-compounds';"}</p>
          <p className="code">{'<Button btnType="primary" btnSize="xlarge" onClick={() => document.body.dispatchEvent(new CustomEvent("toggleModal"))}>Open Modal</Button>'}</p>
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
