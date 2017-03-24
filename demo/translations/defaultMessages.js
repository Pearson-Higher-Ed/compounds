import { defineMessages } from 'react-intl';

//
// Default messages are 'en-US'
//
export const messages = defineMessages({
  showText: {
    id             : 'showText',
    description    : 'PasswordInput show/hide',
    defaultMessage : 'show'
  },
  hideText: {
    id             : 'hideText',
    description    : 'PasswordInput show/hide',
    defaultMessage : 'hide'
  },
  passwordPlaceholder: {
    id             : 'passwordPlaceholder',
    description    : 'PasswordInput placeholder',
    defaultMessage : 'Enter Password'
  }
});
