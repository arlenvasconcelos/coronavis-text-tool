import React  from 'react';
import {Card} from 'react-bootstrap';

export default function PaperCard(props){

  const {title} = props;

  return (
    <Card className="card">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of
          the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
  )



}