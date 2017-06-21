import React from 'react';
import { Dropdown } from '../../index';

const simpleList = ['Thing one', 'Thing two'];
const listItems = ['Pearson', 'Design', 'divider', 'Accelerator', '!!'];
const mobileTitle = "Test title";

const DropdownPage = () => (
    <div className="displaySection">
    <h1><a href="https://pearson-higher-ed.github.io/design/c/dropdown/beta/">Dropdown</a></h1>

    <div className="elementContainer">

      <div className="code">
        <h2>Props</h2>
        <h3>Required:</h3>
        <ul>
          <li className="li-props">presentationType:String === "label", "button", "icon"</li>
          <li className="li-props">mobileTitle:String === "Your mobile title"</li>
          <li className="li-props">A different view is used for mobile and this title will be reflected
          in the mobile header <br/>when the dropdown is open.</li>
          <li className="li-props">list:Array = ["one", "two", "three"] || ["one", "two", "divider", "three"]</li>
          <li className="li-props">The "divider" option may be used in conjunction with any of
          the presentationType for <br/>separating options presented in your list.</li>
        </ul>
        <h3>Optional:</h3>
        <ul>
          <li className="li-props">presentationText:String === "Your label or button text"</li>
        </ul>
      </div>

      <h3>Label /w Icon (non selectable options)</h3>
        <Dropdown
          presentationType="label"
          presentationText="label"
          list={simpleList}
          mobileTitle={mobileTitle}
        />
        <p className="code">
          {`const simpleList = ['Thing one', 'Thing two'];`} <br/>
          {`<Dropdown
            presentationType="label"
            presentationText="label"
            list={simpleList}
            mobileTitle="Mobile title"
          />`}
        </p>

        <h3>button /w Icon (selectable options)</h3>
          <Dropdown
            presentationType="button"
            presentationText="button"
            list={simpleList}
            mobileTitle={mobileTitle}
          />
          <p className="code">
            {`const simpleList = ['Thing one', 'Thing two'];`} <br/>
            {`<Dropdown
              presentationType="button"
              presentationText="button"
              list={simpleList}
              mobileTitle="Mobile title"
            />`}
          </p>

        <h3>Icon only (selectable options)</h3>
          <Dropdown
            presentationType="icon"
            list={listItems}
            mobileTitle={mobileTitle}
          />
          <p className="code">
            {`const listItems = ['Pearson', 'Design', 'divider', 'Accelerator', '!!'];`}
            <br/>
            {`<Dropdown
              presentationType="icon"
              list={listItems}
              mobileTitle="Mobile title"
            />`}
          </p>


    </div>

    </div>

)

export default DropdownPage;
