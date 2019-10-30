import React from 'react';
import { Card } from 'react-bootstrap';


export default function YOUR_FRONT_CCOMPONENT(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        {props.children}
      </Card.Body>
    </Card>
  )
}


