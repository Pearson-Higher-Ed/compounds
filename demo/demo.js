import React        from 'react';
import ReactDOM     from 'react-dom';
import DemoRouter   from './DemoRouter';
import frJson       from './translations/fr.json';
import frLocaleData from 'react-intl/locale-data/fr';

import { addLocaleData, IntlProvider } from 'react-intl';

// Associate Language Abbreviation with json filename...
const translations = {
  'fr' : frJson
};

// Add Language
addLocaleData(frLocaleData);

// Determining the User's Locale
const locale = (navigator.language) ? navigator.language : navigator.browserLanguage;

/*********---Application Entry Point---************************/
ReactDOM.render(
  <IntlProvider locale={locale}  messages={translations[locale]}>
    <DemoRouter />
  </IntlProvider>,
  document.getElementById('app')
);
/**************************************************************/
