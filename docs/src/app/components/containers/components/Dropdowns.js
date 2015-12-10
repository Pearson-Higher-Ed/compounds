import React from 'react';
import { Dropdown, DropdownDivider, DropdownItem, Button } from 'pearson-compounds';
import Demo from '../../Demo';
import ApiDocs from '../../ApiDocs';

const code = `
<Dropdown>

  <Button>Default</Button>
  <Button type="primary">Primary</Button>
  <Button type="link">Link</Button>

  <Button disabled>Disabled</Button>
  <Button type="primary" disabled>Disabled</Button>
  <Button type="link" disabled>Disabled</Button>

  <Button size="small">Small</Button>
  <Button size="large">Large</Button>

</Dropdown>

`;

const apiData = [
  {
    title: 'State',
    items: [
      {
        title: 'expanded',
        propType: 'boolean',
        description: 'wether or not the dropdown is expanded (shown).'
      },
      {
        title: 'size',
        propType: 'oneOf([\'small\', \'large\'])',
        description: 'The button size.'
      }
    ]
  }
];

function DropdownsContainer(props) {
  return (
    <div>
      <Dropdown>
        <DropdownItem><a href="#">Menu Item 1</a></DropdownItem>
        <DropdownItem><a href="#">Menu Item 2</a></DropdownItem>
        <DropdownItem><a href="#">Menu Item 3</a></DropdownItem>
        <DropdownDivider></DropdownDivider>
        <DropdownItem><a href="#">Menu 2 Item 1</a></DropdownItem>
      </Dropdown>
      <ApiDocs data={apiData} />
    </div>
  );
}

export default DropdownsContainer;
