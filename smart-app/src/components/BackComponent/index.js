import React from 'react';
import { Card } from 'react-bootstrap';

function YOUR_BACK_COMPONENT(props) {
  return (
    <Card>
      <Card.Body>
        {props.children}
      </Card.Body>
    </Card>
      )
    }
    
export default YOUR_BACK_COMPONENT; 