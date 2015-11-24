import React from 'react';
import { Label } from 'pearson-compounds';
import Demo from '../../Demo';
import ApiDocs from '../../ApiDocs';

const code = `
<Label>This is the default label.</Label>
<Label type="secondary">This is a secondary label.</Label>
`;

const apiData = [
  {
    title: 'Props',
    items: [
      {
        title: 'type',
        propType: 'oneOf([\'secondary\'])',
        description: 'The label type.'
      },
      {
        title: 'size',
        propType: 'oneOf([\'small\', \'large\'])',
        description: 'The label size.'
      },
      {
        title: 'weight',
        propType: 'oneOf([\'bold\'])',
        description: 'The label weight.'
      }
    ]
  }
];

function LabelsContainer(props) {
  return (
    <div>
      <Demo code={code}>
        <Label>This is the default label.</Label>
        <Label type="secondary">This is a secondary label.</Label>
        <Label size="small">This is a small label.</Label>
        <Label size="large">This is a large label.</Label>
        <Label inverse style={{ backgroundColor: '#000' }}>This is an inverse label.</Label>
        <Label><h4>A label may include a single child element, which will be used as the root element.</h4></Label>
      </Demo>
      <ApiDocs data={apiData} />
    </div>
  );
}

export default LabelsContainer;
