import React, { Component }     from 'react';
import PropTypes                from 'prop-types';
import { default as BaseModal } from 'react-modal';
import { Icon }                 from '../index';


class Modal extends Component {

  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen       : false,
      footerVisible     : this.props.footerVisible,
      text              : this.props.text,
      children          : this.props.children,
      successBtnHandler : this.props.successBtnHandler,
      cancelBtnHandler  : this.props.cancelBtnHandler
    };


    this.onClose            = _onClose.bind(this);
    this.renderFooter       = _renderFooter.bind(this);
    this.afterOpen          = _afterOpen.bind(this);
    this.applyWrapper       = _applyWrapper.bind(this);
    this.removeWrapper      = _removeWrapper.bind(this);
    this.successBtnHandler  = _successBtnHandler.bind(this);
    this.cancelBtnHandler   = _cancelBtnHandler.bind(this);
    this.removeOverlayStyle = _removeOverlayStyle.bind(this);


    // expose modal via event...
    document.body.addEventListener( `toggleModal_${props.id}`,
      e => this.setState({
        modalIsOpen       : (e.detail !== null) ? e.detail.isShown           : props.isShown,
        footerVisible     : (e.detail !== null) ? e.detail.footerVisible     : props.footerVisible,
        text              : (e.detail !== null) ? e.detail.text              : props.text,
        successBtnHandler : (e.detail !== null) ? e.detail.successBtnHandler : props.successBtnHandler,
        cancelBtnHandler  : (e.detail !== null) ? e.detail.cancelBtnHandler  : props.cancelBtnHandler,
        children          : (e.detail !== null) ? e.detail.children          : props.children
      })
    );

  };


  componentWillReceiveProps(nextProps){
    this.setState({modalIsOpen:nextProps.isShown});
    if(!this.state.modalIsOpen && document.getElementsByClassName('modalOverlay')[0]){
      this.removeOverlayStyle();
      this.removeWrapper();
    }
    if(!this.state.modalIsOpen){
      this.applyWrapper();
    }
  }

  render() {

    const { modalIsOpen, footerVisible, text, children, successBtnHandler, cancelBtnHandler } = this.state;

    return (
        <BaseModal
          className        = "pe-template__static-medium modalContent"
          overlayClassName = "modalOverlay"
          isOpen           = {modalIsOpen}
          onAfterOpen      = {this.afterOpen}
          onRequestClose   = {this.onClose}
          ariaHideApp      = {true}
          role             = "dialog"
          contentLabel     = "Modal"
  	      >

          <div id="modalHeader" className="modalHeader">
            {!footerVisible && <button className="modalClose pe-icon--btn" onClick={this.cancelBtnHandler}>
              <Icon name='remove-sm-24'>{text.closeButtonSRText}</Icon>
            </button>}
            {text.headerTitle && <h2 id="modalHeaderText" className="modalHeaderText pe-title">{text.headerTitle}</h2>}
          </div>

          <div className="modalBody" tabIndex={0}>
            {children}
          </div>

          {this.renderFooter(footerVisible, text, successBtnHandler, cancelBtnHandler)}

        </BaseModal>
    )

  };

};


export default Modal;


Modal.propTypes = {
  successBtnHandler : PropTypes.func,
  cancelBtnHandler  : PropTypes.func,
  text              : PropTypes.object,
  footerVisible     : PropTypes.bool
};


export function _onClose() {
  const modalOverlay = document.getElementsByClassName('modalOverlay')[0];
  modalOverlay.style = "";
  this.cancelBtnHandler();
}

export function _successBtnHandler() {
  this.state.successBtnHandler.call(this);
}

export function _cancelBtnHandler() {
  this.removeOverlayStyle();
  this.state.cancelBtnHandler.call(this);
}

export function _removeOverlayStyle(){
  const modalOverlay = document.getElementsByClassName('modalOverlay')[0];
  modalOverlay.style = "";
}

export function _afterOpen() {

  const headerCloseButton = document.getElementsByClassName('modalClose')[0];
  const footerCloseButton = document.getElementsByClassName('modalCancel')[0];
  const modalBody         = document.getElementsByClassName('modalBody')[0];
  const modalContent      = document.getElementsByClassName('modalContent')[0];
  const modalOverlay      = document.getElementsByClassName('modalOverlay')[0];
  const header            = document.getElementsByClassName('modalHeader')[0];
  const footer            = document.getElementsByClassName('modalFooter')[0];

  // apply Focus to close button on open...
  headerCloseButton ? headerCloseButton.focus() : footerCloseButton.focus();

  // apply padding based on clientHeight...
  const windowHeight  = window.innerHeight;
  const contentHeight = modalContent.offsetHeight;
  const paddingHeight = (windowHeight - contentHeight) / 2;
  const padding       = paddingHeight > 60 ? paddingHeight : 60;
  const headerHeight  = header.getBoundingClientRect().height;
  const footerHeight  = footer ? footer.getBoundingClientRect().height : 0;

  modalBody.style.maxHeight        = `${windowHeight - (headerHeight + footerHeight + 120)}px`;
  modalOverlay.style.paddingTop    = `${padding}px`;
  modalOverlay.style.paddingBottom = `${padding}px`;

  // conditional borders on modalbody if scrollbar is present...
  modalBody.className = (modalBody.offsetHeight < modalBody.scrollHeight) ? 'modalBody modalBody_border' : 'modalBody modalBody_border_normal';

  window.onresize = (e) => {
    modalBody.className = (modalBody.offsetHeight < modalBody.scrollHeight) ? 'modalBody modalBody_border' : 'modalBody modalBody_border_normal';
  }

};

export function _applyWrapper() {

  if (!document.getElementById('wrapper')) {

    const wrapper = document.createElement('div');
    wrapper.id    = 'wrapper';
    wrapper.setAttribute('aria-hidden', true);

    const excludedElement = document.getElementsByClassName('ReactModalPortal')[0];
    while (document.body.firstChild !== excludedElement) {
      wrapper.appendChild(document.body.firstChild);
    }

    document.body.appendChild(wrapper);
    document.body.appendChild(excludedElement);
  }

};

export function _removeWrapper() {
  const wrapper         = document.getElementById('wrapper');
  const excludedElement = document.getElementsByClassName('ReactModalPortal')[0];

  while (wrapper.firstChild) {
    document.body.appendChild(wrapper.firstChild);
  }

  document.body.removeChild(wrapper);
  document.body.appendChild(excludedElement);
};

export function _renderFooter(footerVisible, text, successBtnHandler, cancelBtnHandler) {
  if (footerVisible) {
    return(
      <div className="modalFooter" >
        <button onClick={this.cancelBtnHandler} className="modalCancel pe-btn--btn_large">{text.modalCancelButtonText}</button>
        <button onClick={this.successBtnHandler} className="modalSave pe-btn__cta_t--btn_large">{text.modalSaveButtonText}</button>
      </div>
    )
  };

};
