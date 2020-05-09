import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';

import {Row, Col, Container} from 'react-bootstrap'
import Scatterplot from '../components/home/Scatterplot'
import ColumnChart from '../components/home/ColumnChart'
import Papers from '../components/home/Papers'

export default function Searched(){

  const dataSearched = useSelector(state => state.dataSearched.data, []); 

  useEffect(()=>{
    console.log(dataSearched)
  }, [dataSearched])

  return (
    <Container>
      searched
      {dataSearched.papers ? (
        <Row>
          <Col lg="8">
            <Papers papers={dataSearched.papers} query={dataSearched.query}/>
          </Col>
          <Col lg="4">
            <Scatterplot/>
            <ColumnChart dataSearched={dataSearched}/>
            {/* <TableCard dataSearched={dataSearched}/> */}
          </Col>
        </Row>
      ) : (
        <>
          {/* <SuggestedTopics/> */}
        </>
      )}
  </Container>
  )
}