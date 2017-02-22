import React            from 'react';
import { Link }         from 'react-router';
import { Icon, Button } from '../../Compounds';

export const NotFound = ({location}) => (
  <div>
    <h2>{`${location.pathname} not found`}</h2>
  </div>
)
