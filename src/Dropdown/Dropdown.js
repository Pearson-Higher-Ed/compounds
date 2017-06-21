import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import Icon from '../Icon';

import './Dropdown.scss';

export default class Dropdown extends Component {

  static propTypes = {
    list: PropTypes.array.isRequired,
    mobileTitle: PropTypes.string.isRequired,
    presentationType: PropTypes.string.isRequired,
    presentationText: PropTypes.string,
    dropup: PropTypes.bool,
    alignRight: PropTypes.bool
  };

  static defaultProps = {
    dropup: false,
    alignRight: false
  }

  constructor(props) {
    super(props)

    this.state = {
      open: false,
      selectedItem: ''
    }

    this.toggleDropDown = _toggleDropDown.bind(this);
    this.selectedItem = _selectedItem.bind(this);
  }

  componentDidMount() {
    document.body.addEventListener('click', this.handleOutsideClick.bind(this), true);
  }

  componentWillUnmount() {
    document.body.removeEventListener('click', this.handleOutsideClick.bind(this), true);
  }

  handleOutsideClick(event) {
    const domNode = ReactDOM.findDOMNode(this);

    if ((!domNode || !domNode.contains(event.target))) {
      this.setState({ open: false });
    }
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
                       ? '-this.state.selectedItem' :'';

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
                                          ?  <svg
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
    const { presentationType, presentationText, dropup, alignRight } = this.props;

    const dropUp = dropup ? 'drop-up' :'';

    return (
        <div onClick={this.toggleDropDown}
             ref={(div) => { this.dropdown = div; }}
             className="dropdown-container">

          { presentationType === 'label' ?
                      <div className="test-time">
                        <p className="dropdown-label-text">{presentationText}</p>
                        <button className="icon-btn">
                          <Icon name='dropdown-open-sm-18'>Dropdown open</Icon>
                        </button>
                      </div>
                    : null }

          { presentationType === 'button' ?
                       <div className="pe-btn-container">
                         <div className="pe-btn__primary">
                           {presentationText}
                           <button className="icon-btn">
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

          { presentationType === 'icon' ?
                     <button className="icon-btn">
                       <Icon name='dropdown-open-sm-24'>Dropdown open</Icon>
                     </button>
                   : null }

          { this.state.open &&
            <CSSTransitionGroup
              className={`li-wrapper ${dropUp}`}
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

function _toggleDropDown(e) {
  this.setState({ open: !this.state.open });
};

function _selectedItem(e) {
  this.setState({ selectedItem: e.target.innerText });
}