import React            from 'react';
import ReactDOM         from 'react-dom';
import IntlInjection    from './IntlInjection';
import { IntlProvider } from 'react-intl';


class CompoundsWrapper {

  constructor(config) {
    this.init(config);
  }

  init(config) {

    const locale = config.locale ? config.locale : 'en';

    ReactDOM.render(
      <IntlProvider locale={locale}>
        <IntlInjection data={config} />
      </IntlProvider>,
      document.getElementById(config.elementId)
    )
  }

}


/**********************Entry Point**********************/
// This Function runs when file is loaded...
// Pass any overriding parameters in the config Object...
function init() {

  new CompoundsWrapper({
    elementId           : 'app',
    showText            : 'show',
    hideText            : 'hide',
    passwordPlaceholder : 'Enter Password',
  });

}


window.onload = init;
/*******************************************************/
