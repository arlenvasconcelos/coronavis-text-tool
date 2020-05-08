import React from 'react';
import {Col, Row} from 'react-bootstrap';

import logoInf from '../../assets/images/inf-logo-2.png';
import logoUfrgs from '../../assets/images/ufrgs-logo-2.png';

export default function Header(){

  return (
    <>
    <Row className="header my-2">
      <Col 
        md={4}
        sm={6} 
        className="d-flex justify-content-end align-items-center order-1 order-md-1"
      >
        <img className="header__img" alt="Logo UFRGS" src={logoUfrgs}/>
      </Col>
      <Col md={4} sm={12} className="text-center order-3 order-md-2">
        <a className="header__link" href="/"><h1>COVID-19 Analysis Tools</h1></a>
        <h3>Text Analytics for the COVID-19 Literature</h3>
      </Col>
      <Col 
        md={4}
        sm={6} 
        className="d-flex justify-content-start align-items-center order-2 order-md-3"
      >
        <img className="header__img" alt="Logo INF" src={logoInf}/>
      </Col>
    </Row>
    </>
  )
}

