import React from 'react';
import {Col, Row} from 'react-bootstrap';

import infLogo from '../assets/images/inf-logo.png';
import ufrgsLogo from '../assets/images/ufrgs-logo.png';

export default function Header(){

  return (
    <>
    <Row className="header">
      <Col md={2}>
        <img alt="" src={infLogo}/>
      </Col>
      <Col md={8} > 
        <h1> CORONAVIS </h1>
        <h3>Text Analitics Tool for COVID-19 Researchs </h3>
      </Col>
      <Col md={2}>
        <img alt="" src={ufrgsLogo}/>
      </Col>
    </Row>
    </>
  )
}

