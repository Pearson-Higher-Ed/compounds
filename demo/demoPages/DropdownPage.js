import React from 'react';
import { Dropdown } from '../../index';

const listItems = ['Pearson', 'Design', 'divider', 'Accelerator', 'WOOOOOO'];

const DropdownPage = () => (
    <div>
      <h2>Icon only</h2>
        <Dropdown
          list={listItems}
          mobileTitle="This is a test title"
        />
    </div>

)

export default DropdownPage;
