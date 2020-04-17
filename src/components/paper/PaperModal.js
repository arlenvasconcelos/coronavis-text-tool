import React, {useState, useEffect} from 'react'
import {Modal, Button} from 'react-bootstrap'
import styled from 'styled-components'

import api from '../../service/api'

import Highlight from '../Highlight'

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
  const [types, setTypes] = useState([]);
  const [palette, setPalette] = useState([])

  const loadPaper = async (id) => {
    try {
      const response = await api.get(`/document/${id}`);
      console.log(response.data)
      setPaper(response.data);
    } catch (err) {
      console.log(err);
    }
  }

  const getColour = () => {

    const p = [];    
    var hex = 'FEDCBA9876543210';
  
    //deleting repeated types
    const types_norepeated = [...new Set(types)]

    for (var i = 0; i < types_norepeated.length-1; i++ ) {
      var colour = '#';
      for (var j = 0; j < 6; j++ ) {
        // get random number
        colour += hex[Math.floor(Math.random() * 10)];//times ten for light colors
      }
      p[types_norepeated[i]] = colour;
    }
    return p;
  }

  useEffect(()=>{
    loadPaper(paperId);
  },[])

  useEffect(()=>{
    setTerms(paper.entities.map(value => value.term));
    setTypes(paper.entities.map(value => value.type));
  },[paper.entities])

  useEffect(()=>{
    console.log(types)
    setPalette(getColour());
    console.log("entrou aqui") //Creating colours palleta
  },[types])

  console.log(palette)

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
          <Highlight text={paper.abstract} terms={terms} types={types} palette={palette}/>
        </p>
        DOI: 
        <a href={'https://doi.org/' + paper.doi} target="_blank">
          {'https://doi.org/' + paper.doi}
        </a>
        
        <div>
          {palette.length ? (
            palette.map((value, index) => 
              <span
                style={{
                  fontWeight: 'bold', 
                  backgroundColor: `${value || 'yellow'}`, 
                  padding: "0 3px",
                  margin: "1px 2px", 
                  color:'black', 
                  borderRadius: "3px"
                }}
              >
                {index}
              </span>
            )
          ) : (
            <>
            </>
          )}
        </div>
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