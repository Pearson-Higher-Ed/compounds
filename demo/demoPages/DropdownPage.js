import React from 'react';
import { Dropdown } from '../../index';

const testData = [{
  listItem: 'Pearson'
}, {
  listItem: 'Design'
}, {
  listItem: 'Accelerator'
}];

const DropdownPage = (props) => (
    <div>
      <h2>First</h2>
      <Dropdown list={testData} />
    </div>

)

export default DropdownPage;
