import React from 'react';
import ReactDOM from 'react-dom';

import indexOfElement from '../extensions/indexOfElement';
import delegateEvents from '../extensions/delegateEvents';
import addHandleClickOutside from '../extensions/addHandleClickOutside';


class DropdownMenu extends React.Component {
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
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  handleClickOutside() {
    this.setState({expanded: false});
  }

  toggle() {
    this.setState({expanded: !this.state.expanded});
  }

  handleKeydown(e) {
    if (!/(38|40|27|32)/.test(e.which) || /input|textarea/i.test(e.target.tagName)) {
      return;
    }

    e.preventDefault();
    e.stopPropagation();

    const rootElement = ReactDOM.findDOMNode(this);
    const isExpanded = rootElement.classList.contains('pe-dropdown-menu--expanded');

    if ((!isExpanded && e.which !== 27) || (isExpanded && e.which === 27)) {
      this.toggle();
      return;
    }

    // Focus menu item
    // in the future, it might be possible to do this with child refs array
    // currently not possible, using querySelector instead
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
    return (
	  <div className={classes.join(' ')} aria-expanded={this.state.expanded} onKeyDown={this.handleKeydown.bind(this)} >
        <div onClick={this.toggle.bind(this)}></div>
        <div className="pe-dropdown-menu__menu-items">
          {this.props.children}
        </div>
      </div>
	)
  }
}

export default addHandleClickOutside(DropdownMenu);

if (typeof window !== 'undefined') {
  document.body.addEventListener('o.initDropdownMenu', e => ReactDOM.render(new DropdownMenu(e.detail), document.getElementById('app')))
}
