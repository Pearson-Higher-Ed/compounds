import React from 'react';
import ReactDOM from 'react-dom';

import indexOfElement from './util/indexOfElement';
import dispatchEvent from './util/dispatchEvent';
import delegateEvents from './util/delegateEvents';

class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false
    };
    if (props.id) {
      const selector = '[data-toggle="dropdown"][data-target="'+props.id+'"]';
      delegateEvents(document.body, 'click', selector, (evt) =>{
        evt.preventDefault();

        const expanded = this.state.expanded;
        this.setState({expanded: !expanded});
      })
    }
  }
  handleKeydown(e) {
    if (!/(38|40|27|32)/.test(e.which) || /input|textarea/i.test(e.target.tagName)) {
      return;
    }

    e.preventDefault();
    e.stopPropagation();

    const rootElement = ReactDOM.findDOMNode(this);
    const toggleElement = rootElement.querySelector('[data-toggle="dropdown-menu"]');
    const isExpanded = rootElement.classList.contains('pe-dropdown-menu--expanded');

    if ((!isExpanded && e.which !== 27) || (isExpanded && e.which === 27)) {
      // focus the element
      if (e.which === 27) {
        dispatchEvent(toggleElement, 'focus');
      }
      return dispatchEvent(toggleElement, 'click');
    }

    // Focus menu item
    const itemEls = rootElement.querySelectorAll('.pe-dropdown-menu__menu-item:not(.pe-dropdown-menu__menu-item--disabled) a');

    if (!itemEls.length) {
      return;
    }

    let index = indexOfElement(itemEls, e.target);

    if (e.which === 38 && index > 0) { index--;}
    if (e.which === 40 && index < itemEls.length - 1) {index++;}
    if (!~index) {index = 0;}

    itemEls[index].focus();
  }
  render() {
    const {
      inverse
    } = this.props;
    const classes = ['pe-dropdown-menu'];
    if (this.state.expanded) {
      classes.push('pe-dropdown-menu--expanded');
    }
    if (inverse) {
      classes.push('pe-dropdown-menu--inverse');
    }
    return <div {...this.props} className={classes.join(' ')} onKeyDown={this.handleKeydown.bind(this)} >
        <div data-toggle="dropdown-menu"></div>
        <div className="pe-dropdown-menu__menu-items">
          {this.props.children}
        </div>
      </div>
  }
}

export default Dropdown;
export function DropdownDivider(props) {
  return <div className="pe-dropdown-menu__divider" role="seperator"></div>
};
export function DropdownItem(props) {
  return <div {...props} className="pe-dropdown-menu__menu-item">{props.children}</div>
};
