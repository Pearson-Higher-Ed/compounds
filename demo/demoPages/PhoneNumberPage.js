import React from 'react';
import { PhoneNumber } from '../../index';

const PhoneNumberPage = () => (
  <div style={{padding: 15}}>
    <h1>Phone Number</h1> <br/>

    <PhoneNumber
      country="US"
      placeholder="555-555-5555"
      labelText="Mobile phone"
      onChange={(d) => console.log(d)}
    />
  </div>
)

export default PhoneNumberPage;
