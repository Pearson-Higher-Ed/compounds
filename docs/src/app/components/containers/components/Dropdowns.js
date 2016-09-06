import React from 'react';
import { DropdownMenu, DropdownMenuDivider, DropdownMenuItem, Button } from 'pearson-compounds';
import Demo from '../../Demo';
import ApiDocs from '../../ApiDocs';

const code = `
<Button data-toggle="dropdown" data-target="demo-dropdown">Toggle Default Dropdown</Button>
<DropdownMenu id="demo-dropdown">
  <DropdownMenuItem><a href="#">Menu Item 1</a></DropdownMenuItem>
  <DropdownMenuItem><a href="#">Menu Item 2</a></DropdownMenuItem>
  <DropdownMenuItem><a href="#">Menu Item 3</a></DropdownMenuItem>
  <DropdownMenuDivider></DropdownMenuDivider>
  <DropdownMenuItem><a href="#">Menu 2 Item 1</a></DropdownMenuItem>
</DropdownMenu>

<Button type="primary" data-toggle="dropdown" data-target="demo-dropdown-inverse">Toggle Inverse Dropdown</Button>
<DropdownMenu inverse id="demo-dropdown-inverse">
  <DropdownMenuItem><a href="#">Menu Item 1</a></DropdownMenuItem>
  <DropdownMenuItem><a href="#">Menu Item 2</a></DropdownMenuItem>
  <DropdownMenuItem><a href="#">Menu Item 3</a></DropdownMenuItem>
  <DropdownMenuDivider></DropdownMenuDivider>
  <DropdownMenuItem><a href="#">Menu 2 Item 1</a></DropdownMenuItem>
</DropdownMenu>

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
        description: 'whether or not the dropdown is expanded (shown).'
      }
    ]
  }
];

function DropdownsContainer(props) {
  return (
    <div>
      <Demo code={code}>
      <Button data-toggle="dropdown" data-target="demo-dropdown">Toggle Default Dropdown</Button>
      <DropdownMenu id="demo-dropdown">
        <DropdownMenuItem><a href="#">Menu Item 1</a></DropdownMenuItem>
        <DropdownMenuItem><a href="#">Menu Item 2</a></DropdownMenuItem>
        <DropdownMenuItem><a href="#">Menu Item 3</a></DropdownMenuItem>
        <DropdownMenuDivider></DropdownMenuDivider>
        <DropdownMenuItem><a href="#">Menu 2 Item 1</a></DropdownMenuItem>
      </DropdownMenu>
      <Button type="primary" data-toggle="dropdown" data-target="demo-dropdown-inverse">Toggle Inverse Dropdown</Button>
      <DropdownMenu inverse id="demo-dropdown-inverse">
        <DropdownMenuItem><a href="#">Menu Item 1</a></DropdownMenuItem>
        <DropdownMenuItem><a href="#">Menu Item 2</a></DropdownMenuItem>
        <DropdownMenuItem><a href="#">Menu Item 3</a></DropdownMenuItem>
        <DropdownMenuDivider></DropdownMenuDivider>
        <DropdownMenuItem><a href="#">Menu 2 Item 1</a></DropdownMenuItem>
      </DropdownMenu>
      </Demo>
      <br/><br/>
      <ApiDocs data={apiData} />
    </div>
  );
}

export default DropdownsContainer;
