import React from 'react';
import {Col} from 'react-bootstrap';


export default function Header(){

  return (
    // <Col md={12} className="d-flex justify-content-center"> 
    <Col md={12} className="header"> 
    <h1 style={{width: '100%'}}> Coronavis</h1>
      <h3 style={{width: '100%'}}>Text Analitics tool for COVID-19 Researchs </h3>
    </Col>
  )
}

