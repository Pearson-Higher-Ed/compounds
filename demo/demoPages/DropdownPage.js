import React from 'react';
import { Dropdown } from '../../index';

const testData = ['Pearson', 'divider', 'Design', 'Accelerator', 'divider', 'WOOOOOO'];

const DropdownPage = () => (
    <div>
      <h2>Icon only</h2>
      <Dropdown list={testData} />
    </div>

)

export default DropdownPage;
