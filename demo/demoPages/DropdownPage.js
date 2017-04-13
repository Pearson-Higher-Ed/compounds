import React from 'react';
import { Dropdown } from '../../index';

const simpleList = ['Thing one', 'Thing two'];
const listItems = ['Pearson', 'Design', 'divider', 'Accelerator', 'WOOOOOO'];
const mobileTitle = "This is a test title";

const DropdownPage = () => (
    <div>
      <h3>Label & Icon</h3>
        <Dropdown
          presentation="label"
          presentationText="Test label"
          list={simpleList}
          mobileTitle={mobileTitle}
        />

        <br/>

      <h3>Icon</h3>
        <Dropdown
          presentation="icon"
          list={listItems}
          mobileTitle={mobileTitle}
        />

        <br/>

        <h3>Icon /w button</h3>
        <Dropdown
          presentation="button"
          presentationText="List"
          list={simpleList}
          mobileTitle={mobileTitle}
        />
    </div>

)

export default DropdownPage;
