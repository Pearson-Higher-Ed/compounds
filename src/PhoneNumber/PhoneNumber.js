import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Phone from 'react-phone-number-input';

import './PhoneNumber.scss';

export default class PhoneNumber extends Component {

  static propTypes = {
    labelText: PropTypes.string,
    infoMessage: PropTypes.string,
    errorMessage: PropTypes.string
  }

  constructor(props) {
    super(props)
  }

  render() {
    const { country, placeholder, onChange, value, onKeyDown, disabled,
            onCountryChange, dictionary, countries, international, convertToNational,
            selectMaxItems, style, inputStyle, className, inputClassName, labelText,
            infoMessage, errorMessage } = this.props;

    const errorLabel = errorMessage ? '--label_error' :'';
    const errorInput = errorMessage ? 'react-phone-number-input__phone--error' : inputClassName;

    return (
      <div>

        <label className={`pe-textLabelInput__label${errorLabel}`}>{labelText}</label>

        <Phone
          value={value}
          country={country}
          placeholder={placeholder}
          onChange={onChange}
          onKeyDown={onKeyDown}
          disabled={disabled}
          onCountryChange={onCountryChange}
          dictionary={dictionary}
          countries={countries}
          international={international}
          convertToNational={convertToNational}
          selectMaxItems={selectMaxItems}
          style={style}
          inputStyle={inputStyle}
          className={className}
          inputClassName={errorInput}
        />
        {infoMessage && <p className="pe-input--info_message">{infoMessage}</p>}
        {errorMessage && <p className="pe-input--error_message">{errorMessage}</p>}

      </div>
    );
  }
}
