import React from 'react';

import {Row, Col} from 'react-bootstrap'
import Scatterplot from '../Searched/Scatterplot'
import ColumnChart from '../Searched/ColumnChart'
import Papers from '../Searched/Papers'

export default function Searched({dataSearched}){
  return (
    <>
      <Row>
        <Col lg="8">
          <Papers papers={dataSearched.papers} query={dataSearched.query}/>
        </Col>
        <Col lg="4">
          <Scatterplot/>
          <ColumnChart dataSearched={dataSearched}/>
        </Col>
      </Row>
    </>
  )
}