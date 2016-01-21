import { Component } from 'react';
import ReactDOM from 'react-dom';

// Store the components and their handlers separately. This could
// eventually be replaced with a WeakMap.
const registeredComponents = [];
const handlers = [];

const addHandleClickOutside = OuterComponent => class extends Component {
  componentDidMount() {
    const eventHandler = this.refs.outerComponent.handleClickOutside;

    if (typeof eventHandler !== 'function') {
      throw new Error('Expected component to have function handleClickOutside(event).');
    }


    const fn = this.outsideClickHandler_ = (localNode => event => {
      event.stopPropagation();

      let source = event.target;

      // If source is local then this event came from *somewhere*
      // inside and should be ignored.
      while (source.parentNode) {
        if (source === localNode) {return;}
        source = source.parentNode;
      }

      eventHandler(event);
    })(ReactDOM.findDOMNode(this));

    const pos = registeredComponents.length;

    registeredComponents.push(this);
    handlers[pos] = fn;

    this.enableOnClickOutside();
  }

  componentWillUnmount() {
    this.disableOnClickOutside();
    this.outsideClickHandler_ = false;

    const pos = registeredComponents.indexOf(this);

    if (pos > -1) {
      if (handlers[pos]) {
        // Clean up to prevent memory leaks
        handlers.splice(pos, 1);
        registeredComponents.splice(pos, 1);
      }
    }
  }

  enableOnClickOutside() {
    const fn = this.outsideClickHandler_;

    if (document) {
      document.addEventListener('mousedown', fn);
      document.addEventListener('touchstart', fn);
    }
  }

  disableOnClickOutside() {
    const fn = this.outsideClickHandler_;

    if (document) {
      document.removeEventListener('mousedown', fn);
      document.removeEventListener('touchstart', fn);
    }
  }

  render() {
    return <OuterComponent {...this.props} ref="outerComponent" />;
  }
}

export default addHandleClickOutside;
