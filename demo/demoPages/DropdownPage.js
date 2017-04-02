import React from 'react';
import { Dropdown } from '../../index';

const testData = ['Pearson', 'Design', 'Accelerator'];

const DropdownPage = (props) => (
    <div>
      <h2>First</h2>
      <Dropdown list={testData} />
    </div>

)

export default DropdownPage;
