import React            from 'react';
import ReactDOM         from 'react-dom';
import frLocaleData     from 'react-intl/locale-data/fr';
import frJson           from './translations/fr.json';
import DemoCompounds    from './DemoCompounds';

import {
  addLocaleData,
  IntlProvider
} from 'react-intl';

const translations = { 'fr' : frJson };
const locale       = 'en';
const config       = {};

addLocaleData(frLocaleData);


ReactDOM.render(
  <IntlProvider locale={locale} messages={translations[locale]}>
    <DemoCompounds data={config} />
  </IntlProvider>,
  document.getElementById('app')
);
