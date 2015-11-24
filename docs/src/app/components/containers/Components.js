import React from 'react';
import ContainerWithNav from './ContainerWithNav';

const navData = [
  {
    title: 'Getting Started'
  },
  {
    title: 'Components',
    items: [
      { title: 'Buttons' },
      { title: 'Card' },
      { title: 'Labels' }
    ]
  }
];

function ComponentsContainer(props) {
  return (
    <ContainerWithNav navData={navData}>{props.children}</ContainerWithNav>
  );
}

export default ComponentsContainer;
