import React, { PropTypes } from 'react';
import { Label } from 'pearson-compounds';

function ApiDocsItemDescription(props) {
  return (
    <div>
      <p>
        <Label type="secondary" size="small">{props.propType}</Label>
        <Label type="secondary" size="small">{props.isRequired ? '' : 'optional'}</Label>
      </p>
      <p>{props.description}</p>
    </div>
  );
}

ApiDocsItemDescription.propTypes = {
  propType: PropTypes.string,
  isRequired: PropTypes.bool,
  description: PropTypes.string
};

function ApiDocs(props) {
  return (
    <div>
      {props.data.map(section => {
        return (
          <div key={section.title}>
            <h2>{section.title}</h2>
            <table>
              <tbody>
                {section.items.map(item => {
                  const {
                    title,
                    propType,
                    isRequired,
                    description
                  } = item;

                  return (
                    <tr key={title}>
                      <td>{title}</td>
                      <td>
                        <ApiDocsItemDescription
                          propType={propType}
                          isRequired={isRequired}
                          description={description}
                        />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        );
      })}
    </div>
  );
}

ApiDocs.propTypes = {
  data: PropTypes.array
};

export default ApiDocs;
