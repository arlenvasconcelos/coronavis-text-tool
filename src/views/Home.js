import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';

import {Container, Row, Col} from 'react-bootstrap';
import ColumnChart from '../components/home/ColumnChart';
import Header from '../components/home/Header';
import Search from '../components/home/Search';
import TableCard from '../components/home/TableCard';
import Papers from '../components/home/Papers';
import Scatterplot from '../components/home/Scatterplot';

export default function Home() {

  const dataSearched = useSelector(state => state.dataSearched.data, []); 

  useEffect(()=>{
    console.log(dataSearched)
  }, [dataSearched])
  

  return (
    <div className="home">
      <Container fluid>
        <Header/>
        <Search/>
        {dataSearched.papers ? (
          <Row>
            <Col lg="8">
              <Papers papers={dataSearched.papers} query={dataSearched.query}/>
            </Col>
            <Col lg="4">
              <Scatterplot/>
              <ColumnChart dataSearched={dataSearched}/>
              <TableCard dataSearched={dataSearched}/>
            </Col>
          </Row>
        ) : (
          <></>
        )}
      </Container>
    </div>
  )
}