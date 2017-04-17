import React from 'react';
import { Dropdown } from '../../index';

const simpleList = ['Thing one', 'Thing two'];
const listItems = ['Pearson', 'Design', 'divider', 'Accelerator', 'WOOOOOO'];
const mobileTitle = "This is a test title";

const DropdownPage = () => (
    <div>
      <h3>Label & Icon (not selectable)</h3>
        <Dropdown
          presentationType="label"
          presentationText="Test label"
          list={simpleList}
          mobileTitle={mobileTitle}
        />

        <br/>

        <h3>Icon /w button</h3>
        <Dropdown
          presentationType="button"
          presentationText="List"
          list={simpleList}
          mobileTitle={mobileTitle}
        />

        <br/>

        <h3>Icon only</h3>
          <Dropdown
            presentationType="icon"
            list={listItems}
            mobileTitle={mobileTitle}
          />

    </div>

)

export default DropdownPage;
