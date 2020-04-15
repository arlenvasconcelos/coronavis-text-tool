import React from 'react'
import {Modal, Button} from 'react-bootstrap'
import styled from 'styled-components'

export default function PaperModal(props){

  const {index, paper, showModal, setShowModal} = props;

  return (
    <Modal
      show={showModal}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      onHide={() => setShowModal(false)}
      // dialogClassName="modal-paper"
      on
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {"["+index+"] "+paper.title}
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
        <Button onClick={() => setShowModal(false)}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}

const Authors = styled.p`
  font-style: italic;
  font-size: medium;
  color: grey;
`;