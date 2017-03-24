import React, { Component } from 'react';
import { injectIntl }       from 'react-intl';
import { messages }         from './translations/defaultMessages';
import  DemoRouter          from './DemoRouter';


class IntlInjection extends Component {

  render() {

    const { data, intl } = this.props;

    // do the intl string replacement...
    const intlDefaultText =  {
      showText           : intl.formatMessage(messages.showText),
      hideText           : intl.formatMessage(messages.hideText),
      passordPlaceholder : intl.formatMessage(messages.passwordPlaceholder)
    };

    // add text to config data...
    // text passed in will override intlDefaultText...
    data.text = (data.text) ? data.text : intlDefaultText;

    return <DemoRouter data={data} />

  }

}

export default injectIntl(IntlInjection);
