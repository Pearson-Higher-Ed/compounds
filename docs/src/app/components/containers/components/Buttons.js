import React from 'react';
import { Button } from 'pearson-compounds';
import Demo from '../../Demo';
import ApiDocs from '../../ApiDocs';

const code = `
<Button>Default</Button>
<Button type='primary'>Primary</Button>
<Button type='link'>Link</Button>

<Button disabled>Disabled</Button>
<Button type='primary' disabled>Disabled</Button>
<Button type='link' disabled>Disabled</Button>

<Button size='small'>Small</Button>
<Button size='large'>Large</Button>
`;

const apiData = [
  {
    title: 'Props',
    items: [
      {
        title: 'type',
        propType: 'oneOf([\'primary\', \'link\'])',
        description: 'The button type.'
      },
      {
        title: 'size',
        propType: 'oneOf([\'small\', \'large\'])',
        description: 'The button size.'
      }
    ]
  }
];

function ButtonsContainer(props) {
  return (
    <div>
      <Demo code={code}>
        <Button>Default</Button>
        <Button type={Button.BUTTON_TYPES.PRIMARY}>Primary</Button>
        <Button type={Button.BUTTON_TYPES.LINK}>Link</Button>

        <br />

        <Button disabled>Disabled</Button>
        <Button type={Button.BUTTON_TYPES.PRIMARY} disabled>Disabled</Button>
        <Button type={Button.BUTTON_TYPES.LINK} disabled>Disabled</Button>

        <br />

        <Button size='small'>Small</Button>
        <Button size='large'>Large</Button>
      </Demo>
      <ApiDocs data={apiData} />
    </div>
  );
}

export default ButtonsContainer;
