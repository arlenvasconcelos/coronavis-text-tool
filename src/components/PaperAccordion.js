import React from 'react';

import {Card, Accordion, Button} from 'react-bootstrap'

export default function PaperAccordion ({data, eventKey}){

  return (
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey={eventKey}>
            Click me!
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey={eventKey}>
          <Card.Body>Hello! I'm the body</Card.Body>
        </Accordion.Collapse>
      </Card>
  )
}