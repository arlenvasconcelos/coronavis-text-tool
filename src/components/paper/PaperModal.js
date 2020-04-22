import React, {useState, useEffect, useRef} from 'react'
import {Modal, Button, Overlay, Popover} from 'react-bootstrap'


import Highlight from '../utils/Highlight'

export default function PaperModal(props){

  const {index, paper, showModal, setShowModal} = props;

  const [terms, setTerms] = useState([]);
  const [types, setTypes] = useState([]);
  const [palette, setPalette] = useState({});
  const [showOverlay, setShowOverlay] = useState(false);
  const [targetOverlay, setTargetOverlay] = useState(null);
  const [contentOverlay, setContentOverlay] = useState("")
  const ref = useRef(null);

  const createPalette = (types) => {

    const p = {};    
    var hex = 'FEDCBA9876543210';

    const defaultColours = [
      '#8dd3c7',
      '#ffffb3',
      '#bebada',
      '#fb8072',
      '#80b1d3',
      '#fdb462',
      '#b3de69',
      '#fccde5',
      '#d9d9d9',
      '#bc80bd',
      '#ccebc5',
      '#ffed6f',
    ]
  
    //deleting repeated types
    const types_norepeated = [...new Set(types)];

    for (var i = 0; i < types_norepeated.length; i++ ) {
      if (i < 12){
        p[types_norepeated[i]] = defaultColours[i];
      }
      else {
        let colour = "";
        for (var j = 0; j < 6; j++ ) {
          // get random number
          colour += hex[Math.floor(Math.random() * 10)];//times ten for light colors
        }
        p[types_norepeated[i]] = colour;
      }
    }
    return p;
  }

  const handleOverlay = (event, show, data) => {
    setShowOverlay(show);
    setTargetOverlay(event.target);
    setContentOverlay(
      <>
        <span style={{fontWeight: "bold"}}>Laboratory:</span> {data.affiliation.institution}
        <br/>
        <span style={{fontWeight: "bold"}}>Institution:</span> {data.affiliation.institution}
        <br/>
        <span style={{fontWeight: "bold"}}>Location:</span> 
        {data.affiliation.location ? (data.affiliation.location.settlement +", "+ data.affiliation.location.country) : ""}
      </>
    );

  };

  useEffect(()=>{
    setTerms(paper.entities.map(value => value.term));
    setTypes(paper.entities.map(value => value.type));
  },[paper])

  useEffect(()=>{
    setPalette(createPalette(types));
  },[types])

  return (    
    <Modal
      index={index}
      show={showModal}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      onHide={() => setShowModal(false)}
      dialogClassName="paper__modal"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {"["+index+"] "+paper.title}
          <br/>
          
          <span className="modal__author">
            Authors: 
            {paper.author.map( item =>  
              <span 
                onMouseEnter={(e)=>handleOverlay(e,true, item)} 
                onMouseLeave={(e)=>handleOverlay(e,false, item)}
              >
                {item.last+', '+item.first+'. '}
              </span>
            )}
          </span>
          <p className="modal__subtitle" >
            DOI: 
            <a href={'https://doi.org/' + paper.doi} target="_blank">
              {'https://doi.org/' + paper.doi}
            </a>
            <br/>
            Publish time: {paper.publish_time} 
          </p>
          <Overlay
            show={showOverlay}
            target={targetOverlay}
            placement="bottom"
            container={ref.current}
            containerPadding={20}
          >
            <Popover id="popover-contained">
              {/* <Popover.Title as="h3">Popover bottom</Popover.Title> */}
              <Popover.Content>
                {contentOverlay}
              </Popover.Content>
            </Popover>
          </Overlay>
          
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="modal__body">
        <h4>Abstract</h4>
        {
          (paper.abstract) ? (
            <p>
              <Highlight 
                text={paper.abstract} 
                terms={terms} 
                types={types} 
                palette={palette}
              />
            </p>
          ) : (
            <p>There is no abstract</p>
          )
        }        
        <p>
          {
            Object.entries(palette).map((value, index) => 
              <span
                className="paper__words-highlight"
                key={index}
                style={{
                  fontSize:'0.7em',
                  backgroundColor: `${value[1] || 'yellow'}`, 
                }}
              >
                {value[0]}
              </span>
            )
          }
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={() => setShowModal(false)}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
  
}