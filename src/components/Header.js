import React from 'react';
import {Col, Row} from 'react-bootstrap';

import infLogo from '../assets/images/inf-logo.png';
import ufrgsLogo from '../assets/images/ufrgs-logo.png';

export default function Header(){

  return (
    <>
    <Row 
      className="header my-2"
    >
      <Col
        md={2}
        sm={6}  
        className="d-flex justify-content-center align-items-center order-1 order-md-1"
      >
        <img alt="" src={infLogo}/>
      </Col>
      <Col md={8} sm={12} className="text-center order-3 order-md-2">
        <h1>CORONAVIS</h1>
        <h3>Text Analytics Tool for COVID-19 Researchs</h3>
      </Col>
      <Col 
        md={2}
        sm={6} 
        className="d-flex justify-content-center align-items-center order-2 order-md-3"
      >
        <img alt="" src={ufrgsLogo}/>
      </Col>
    </Row>
    </>
  )
}

