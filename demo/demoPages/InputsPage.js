import React                        from 'react';
import { injectIntl }               from 'react-intl';
import { messages }                 from '../translations/defaultMessages';
import { TextInput, PasswordInput } from '../../index';


const InputsPage = (props) => {

  const { intl } = props;

  // do the intl string replacement...
  const intlDefaultText =  {
    showText            : intl.formatMessage(messages.showText),
    hideText            : intl.formatMessage(messages.hideText),
    passwordPlaceholder : intl.formatMessage(messages.passwordPlaceholder),
    passwordLabel       : intl.formatMessage(messages.passwordLabel),
    textLabel           : intl.formatMessage(messages.textLabel),
    textPlaceholder     : intl.formatMessage(messages.textPlaceholder)
  };

  return (
      <div className="displaySection">
        <h1><a href="http://pearson-higher-ed.github.io/design/c/inputs/beta/#single-line-text">Single Line Text Input</a></h1>

        <div className="elementContainer">


          <h2>Single Line</h2>
          <TextInput
            id="a"
            label={intlDefaultText.textLabel}
            inputType="default"
            placeholder={intlDefaultText.textPlaceholder}
          />
        <p className="code">{'<TextInput id="a" label={intlDefaultText.textLabel} inputType="default" placeholder={intlDefaultText.textPlaceholder} />'}</p>


          <br />
          <br />


          <h2>Single Line - Error</h2>
          <TextInput
            id="b"
            label={intlDefaultText.textLabel}
            inputType="error"
            placeholder={intlDefaultText.textPlaceholder}
          />
        <p className="code">{'<TextInput id="b" label={intlDefaultText.textLabel} inputType="error" placeholder={intlDefaultText.textPlaceholder} />'}</p>


          <br />
          <br />


          <h2>Single Line - Disabled</h2>
          <TextInput
            id="c"
            label={intlDefaultText.textLabel}
            inputType="disabled"
            placeholder={intlDefaultText.textPlaceholder}
          />
        <p className="code">{'<TextInput id="c" label={intlDefaultText.textLabel} inputType="disabled" placeholder={intlDefaultText.textPlaceholder} />'}</p>


          <br />
          <br />


          <h2>Single Line - Read Only</h2>
          <TextInput
            id="d"
            label={intlDefaultText.textLabel}
            inputType="readOnly"
            placeholder={intlDefaultText.textPlaceholder}
          />
        <p className="code">{'<TextInput id="d" label={intlDefaultText.textLabel} inputType="readOnly" placeholder="First Name" />'}</p>


          <br />
          <br />

            <h1><a href="http://pearson-higher-ed.github.io/design/c/inputs/beta/#specialized-inputs">Password Input</a></h1>

              <h2>Default:</h2>
              <PasswordInput id="e" placeholder={intlDefaultText.passwordPlaceholder} showText={intlDefaultText.showText} hideText={intlDefaultText.hideText} />
              <p className="code">{'<PasswordInput id="a" placeholder={intlDefaultText.passwordPlaceholder} showText={intlDefaultText.showText} hideText={intlDefaultText.hideText} />'}</p>


              <br />
              <br />


              <h2>Custom Label:</h2>
              <PasswordInput id="f" label={intlDefaultText.passwordLabel} placeholder={intlDefaultText.passwordPlaceholder} showText={intlDefaultText.showText} hideText={intlDefaultText.hideText} />
              <p className="code">{'<PasswordInput id="a" label={intlDefaultText.passwordLabel} placeholder={intlDefaultText.passwordPlaceholder} showText={intlDefaultText.showText} hideText={intlDefaultText.hideText} />'}</p>


              <br />
              <br />


              <h2>Error:</h2>
              <PasswordInput id="h" label={intlDefaultText.passwordLabel} placeholder={intlDefaultText.passwordPlaceholder} error={true} showText={intlDefaultText.showText} hideText={intlDefaultText.hideText} />
              <p className="code">{'<PasswordInput id="h" label={intlDefaultText.passwordLabel} placeholder={intlDefaultText.passwordPlaceholder} error={true} showText={intlDefaultText.showText} hideText={intlDefaultText.hideText} />'}</p>


              <br />
              <br />


        </div>
      </div>
    )
  }


export default injectIntl(InputsPage);
