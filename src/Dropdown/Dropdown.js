import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import Icon from '../Icon';

import './Dropdown.scss';

let containerMargin = { marginRight: 0 };

export default class Dropdown extends Component {

  static propTypes = {
    list: PropTypes.array.isRequired,
    mobileTitle: PropTypes.string.isRequired,
    presentationType: PropTypes.string.isRequired,
    presentationText: PropTypes.string
  };

  constructor(props) {
    super(props)

    this.state = {
      open: false,
      selectedItem: ''
    }

    this.toggleDropDown = _toggleDropDown.bind(this);
    this.selectedItem = _selectedItem.bind(this);
  }

  renderListItems() {
    let items = [];
    const mobileHeader = <li className="mobile-header" key="header">
                           <span className="mobile-title-text">
                             {this.props.mobileTitle}
                           </span>
                           <button className="mobile-close-button">
                             <svg
                               id="header-close"
                               focusable="false"
                               className="pe-icon--remove-lg-18">
                               <title>Close button</title>
                               <use xlinkHref="#remove-lg-18"></use>
                             </svg>
                           </button>
                         </li>;

     items.push(mobileHeader);

    for (let i = 0; i < this.props.list.length; i++) {
      let item = this.props.list[i];
      const appendId = this.state.selectedItem === item
                       ? '-this.state.selectedItem' : '';

      const dividerLine = <li className="divider-container" key={i}>
                            <hr className="dropdown-divider" />
                          </li>;

      item === 'divider' ? items.push(dividerLine)
                         : items.push(<li key={i}
                                          onClick={this.selectedItem}
                                          className="li-props"
                                          role="presentation">
                                        <button type="button"
                                                role="menuitem"
                                                id="mobile-font"
                                                className="li-button">
                                        { this.props.presentationType !== 'label'
                                          ?
                                           <svg
                                             id={`svg-id${appendId}`}
                                             aria-hidden="true"
                                             focusable="false"
                                             className="pe-icon--check-sm-18">
                                             <use xlinkHref="#check-sm-18"></use>
                                           </svg>
                                          : null }
                                            <span className="dropdown-item">{item}</span>
                                        </button>
                                      </li>);
    }
    return items;
  }

  render() {

    const appendButtonClass = containerMargin.marginRight > 0 ? '-right' : '';

    const ddLabel = this.props.presentationType === 'label';
    const ddButton = this.props.presentationType === 'button';
    const ddIcon = this.props.presentationType === 'icon';

    return (
        <div onClick={this.toggleDropDown} ref={(div) => { this.dropdown = div; }}
             className="dropdown-container" style={containerMargin}>
          { ddLabel ? <div>
                        <p className="dropdown-label-text">{this.props.presentationText}</p>
                        <button className={`icon-btn${appendButtonClass}`}>
                          <Icon name='dropdown-open-sm-18'>Dropdown open</Icon>
                        </button>
                      </div>
                    : null }

          { ddButton ? <div className={`pe-btn-container${appendButtonClass}`}>
                         <div className="pe-btn__primary">
                           {this.props.presentationText}
                           <button className={`icon-btn${appendButtonClass}`}>
                             <svg
                               id="icon-in-button"
                               aria-hidden="true"
                               aria-labelledby="dropdown-title"
                               focusable="false"
                               className="pe-icon--dropdown-open-sm-18">
                               <title id="dropdown-title">Dropdown open</title>
                               <use xlinkHref="#dropdown-open-sm-18"></use>
                             </svg>
                           </button>
                         </div>
                       </div>
                     : null }

          { ddIcon ? <button className={`icon-btn${appendButtonClass}`}>
                       <Icon name='dropdown-open-sm-24'>Dropdown open</Icon>
                     </button>
                   : null }

          { this.state.open &&
            <CSSTransitionGroup
              className="li-wrapper"
              component="ul"
              role="menu"
              transitionName="transition"
              transitionEnterTimeout={300}
              transitionLeaveTimeout={300}>
             {this.renderListItems()}
            </CSSTransitionGroup> }
        </div>
    )
  }

};

function _toggleDropDown() {
  this.setState({ open: !this.state.open })

  const container = this.dropdown.getBoundingClientRect();
  const viewWidth = document.body.clientWidth;
  const differenceRight = viewWidth - container.right;
  const differenceLeft = Math.round(viewWidth - container.left) - 25;

  console.log(container, 'container');
  console.log(viewWidth, 'width');
  console.log(differenceRight, 'diff right');

  if (differenceRight < 0) {
    containerMargin = { marginRight: differenceLeft, marginLeft: 'auto', left: 'auto'}
  }
};

function _selectedItem(e) {
  this.setState({ selectedItem: e.target.innerText });
};
