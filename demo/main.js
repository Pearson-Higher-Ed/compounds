import ReactDOM           from 'react-dom';
import React              from 'react'
import  * as CompoundsSDK from '../index'


export default class Compounds {

  constructor(config) {

    this.init(config);

  }

  init(config) {

    const reactElement = React.createElement(CompoundsSDK[config.componentName], config.props, config.props.children)

    ReactDOM.render( reactElement, document.getElementById(config.elementId) );
  }

}

document.body.addEventListener('o.InitCompounds', e => new Compounds(e.detail));
