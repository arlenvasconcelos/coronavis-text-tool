import React, {useState, useEffect} from 'react'
import {Modal, Button} from 'react-bootstrap'
import styled from 'styled-components'

import api from '../service/api'

import Highlight from '../components/Highlight'

export default function PaperModal(props){

  const {index, paperId, showModal, setShowModal} = props;

  const defaultValue = {
    title: "",
    author: [],
    abstract: "",
    entities: [],
    doi: "",
  }

  const [paper, setPaper] = useState(defaultValue);
  const [terms, setTerms] = useState([]);
  const [types, setTypes] = useState([])

  const loadPaper = async (id) => {
    try {
      const response = await api.get(`/document/${id}`);
      console.log(response.data)
      setPaper(response.data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(()=>{
    loadPaper(paperId);
  },[])

  useEffect(()=>{
    setTerms(paper.entities.map(value => value.term))
    setTypes(paper.entities.map(value => value.type))
  },[paper.entities])

  return (
    <Modal
      show={showModal}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      onHide={() => setShowModal(false)}
      dialogClassName="paper__modal"
      on
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {"["+index+"] "+paper.title}
          <Authors>
            {"Authors: " + paper.author.map( item =>  
              item.last+', '+item.first+'. ')
            } 
          </Authors>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="modal__body">
        <h4>Abstract</h4>
        <p>
         <Highlight text={paper.abstract} terms={terms} types={types}/>
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