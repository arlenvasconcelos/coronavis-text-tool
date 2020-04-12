import React, {useState}  from 'react';
import {Card, Button} from 'react-bootstrap';

export default function PaperCard(props){

  const {paper} = props;

  const [showModal, setShowModal] = useState(false);

  return (
    <Card className="card">
      <Card.Body>
        <Card.Title>{paper.title}</Card.Title>
        <Card.Subtitle>{paper.authors}</Card.Subtitle>
        <hr/>
        <Card.Text>
          {paper.abstract.slice(0,100) + '...'}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="d-flex justify-content-end">
        <Button variant="warning" onClick={() => setShowModal(true)}className="button">
          See more
        </Button>
      </Card.Footer>
    </Card>
  )



}