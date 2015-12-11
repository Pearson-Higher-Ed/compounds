import React from 'react';
import { Dropdown, DropdownDivider, DropdownItem, Button } from 'pearson-compounds';
import Demo from '../../Demo';
import ApiDocs from '../../ApiDocs';

const code = `
<a href="#" data-toggle="dropdown" data-target="demo-dropdown">Toggle Default Dropdown</a>
<Dropdown id="demo-dropdown">

  <DropdownItem><a href="#">Menu Item 1</a></DropdownItem>
  <DropdownItem><a href="#">Menu Item 2</a></DropdownItem>
  <DropdownItem><a href="#">Menu Item 3</a></DropdownItem>
  <DropdownDivider></DropdownDivider>
  <DropdownItem><a href="#">Menu 2 Item 1</a></DropdownItem>

</Dropdown>

<Dropdown inverse id="demo-dropdown-inverse">

  <DropdownItem><a href="#">Menu Item 1</a></DropdownItem>
  <DropdownItem><a href="#">Menu Item 2</a></DropdownItem>
  <DropdownItem><a href="#">Menu Item 3</a></DropdownItem>
  <DropdownDivider></DropdownDivider>
  <DropdownItem><a href="#">Menu 2 Item 1</a></DropdownItem>

</Dropdown>

`;

const apiData = [
  {
    title: 'Props',
    items: [
      {
        title: 'inverse',
        propType: 'boolean',
        description: 'Use the inverse color scheme for dropdowns. (default false)'
      }
    ]
  },
  {
    title: 'State',
    items: [
      {
        title: 'expanded',
        propType: 'boolean',
        description: 'wether or not the dropdown is expanded (shown).'
      }
    ]
  }
];

function DropdownsContainer(props) {
  return (
    <div>
      <a href="#" data-toggle="dropdown" data-target="demo-dropdown">Toggle Default Dropdown</a>
      <Dropdown id="demo-dropdown">
        <DropdownItem><a href="#">Menu Item 1</a></DropdownItem>
        <DropdownItem><a href="#">Menu Item 2</a></DropdownItem>
        <DropdownItem><a href="#">Menu Item 3</a></DropdownItem>
        <DropdownDivider></DropdownDivider>
        <DropdownItem><a href="#">Menu 2 Item 1</a></DropdownItem>
      </Dropdown>
      <a href="#" data-toggle="dropdown" data-target="demo-dropdown-inverse">Toggle Inverse Dropdown</a>
      <Dropdown inverse id="demo-dropdown-inverse">
        <DropdownItem><a href="#">Menu Item 1</a></DropdownItem>
        <DropdownItem><a href="#">Menu Item 2</a></DropdownItem>
        <DropdownItem><a href="#">Menu Item 3</a></DropdownItem>
        <DropdownDivider></DropdownDivider>
        <DropdownItem><a href="#">Menu 2 Item 1</a></DropdownItem>
      </Dropdown>
      <br/><br/>
      <ApiDocs data={apiData} />
    </div>
  );
}

export default DropdownsContainer;
