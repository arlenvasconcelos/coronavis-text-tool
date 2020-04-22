import React from 'react';
import {Col, Row} from 'react-bootstrap';

import logo from '../../assets/images/logo-inf-ufrgs.png';

export default function Header(){

  return (
    <>
    <Row className="header my-2">
      <Col
        md={2}
        sm={0}  
      >
      </Col>
      <Col md={6} sm={12} className="text-center order-3 order-md-2">
        <a className="header__title" href="/"><h1>CORONAVIS</h1></a>
        <h3>Text Analytics Tool for COVID-19 Literature</h3>
      </Col>
      <Col 
        md={4}
        sm={6} 
        className="d-flex justify-content-center align-items-center order-2 order-md-3"
      >
        <img className="header__img" alt="Logo INF" src={logo}/>
      </Col>
    </Row>
    </>
  )
}

