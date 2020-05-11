import React from 'react';
import {useSelector} from 'react-redux';

import {Row, Col} from 'react-bootstrap'
import Scatterplot from '../../components/Searched/Scatterplot'
import ColumnChart from '../../components/Searched/ColumnChart'
import Papers from '../../components/Searched/Papers'
import SuggestedTopics from '../../components/Searched/SuggestedTopics';

export default function Searched(){

  const dataSearched = useSelector(state => state.dataSearched.data, []);

  return (
    <>
      {dataSearched.papers ? (
        <Row>
          <Col lg="8">
            <Papers papers={dataSearched.papers} query={dataSearched.query}/>
          </Col>
          <Col lg="4">
            <Scatterplot/>
            <ColumnChart dataSearched={dataSearched}/>
          </Col>
        </Row>
      ) : (
        <>    
        </>
      )}
      <SuggestedTopics/>
  </>
  )
}