import React, {useState}  from 'react';
import {Card, Button, Modal} from 'react-bootstrap';
import styled from 'styled-components'

export default function PaperCard(props){

  const {paper, keyWord} = props;

  const [modalShow, setModalShow] = useState(false);

  // var r = new RegExp('(.{'+(textStart+lenMarks)+'})(.{'+(textStop-textStart)+'})(.*)');

  return (
    <>
    {/* Card */}
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
        <Button variant="warning" onClick={() => setModalShow(true)} className="button">
          See more
        </Button>
      </Card.Footer>
    </Card>
    {/* Modal */}
    <Modal
      show={modalShow}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      onHide={() => setModalShow(false)}
      // dialogClassName="modal-paper"
      on
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {paper.title}
          <Authors>{"Authors: " +  paper.authors}</Authors>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Abstract</h4>
        <p>
          {paper.abstract}
        </p>
        DOI: 
        <a href={'https://doi.org/' + paper.doi} target="_blank">
            {'https://doi.org/' + paper.doi}
        </a>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={() => setModalShow(false)}>Close</Button>
      </Modal.Footer>
    </Modal>
    </>
  )
}

const Authors = styled.p`
  font-style: italic;
  font-size: medium;
  color: grey;
`;