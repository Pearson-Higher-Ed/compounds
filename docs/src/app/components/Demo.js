import React, { PropTypes } from 'react';
import { Card, CardHeader, CardContent } from 'pearson-compounds';
import CodeBlock from './CodeBlock';

function Demo(props) {
  return (
    <Card>
      <CardHeader>
        {props.children}
      </CardHeader>
      <CardContent style={{ backgroundColor: '#f9f9f9' }}>
        <CodeBlock code={props.code} />
      </CardContent>
    </Card>
  );
}

Demo.propTypes = {
  code: PropTypes.string
};

export default Demo;
