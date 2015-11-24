import React from 'react';
import { Card, CardHeader, CardContent } from 'pearson-compounds';
import Demo from '../../Demo';

const code = `
<Card>
  <CardHeader>Jane Doe</CardHeader>
  <CardContent>
    <address>
      123 Main Street<br />
      Anywhere, USA
    </address>
  </CardContent>
</Card>
`;

function CardContainer(props) {
  return (
    <div>
      <Demo code={code}>
        <Card>
          <CardHeader>Jane Doe</CardHeader>
          <CardContent>
            <address>
              123 Main Street<br />
              Anywhere, USA
            </address>
          </CardContent>
        </Card>
      </Demo>
    </div>
  );
}

export default CardContainer;
