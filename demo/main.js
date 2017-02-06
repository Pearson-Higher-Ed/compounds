import ReactDOM           from 'react-dom';
import React              from 'react'
import  * as CompoundsSDK from '../Compounds'

import './demo.scss';


export default class Compounds {

  constructor(config) {

    this.init(config);

  }

  init(config) {

    const component = config.componentName

    const reactElement = React.createElement(CompoundsSDK[component], config.props, config.props.children)

    ReactDOM.render( reactElement, document.getElementById(config.elementId) );
  }

}

document.body.addEventListener('o.InitCompounds', e => new Compounds(e.detail));
