import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';

import {Container, Row, Col, Card} from 'react-bootstrap';
import ColumnChart from '../components/ColumnChart';
import Header from '../components/Header';
import Search from '../components/Search';
import PaperCard from '../components/PaperCard';
import TableCard from '../components/TableCard';

export default function Home() {

  const dataSearched = useSelector(state => state.dataSearched.data, []); 

  // useEffect(()=>{
  //   console.log(dataSearched)
  // }, [dataSearched])
  

  return (
    <div className="home">
      <Container fluid>
        <Header/>
        <Search/>
        {dataSearched.papers ? (
          <Row>
            <Col lg="8">
              {/* <Card className="card">
                <Card.Body>
                  <Card.Title>Scatterplot</Card.Title>
                  <Card.Text>
                    .....
                  </Card.Text>
                </Card.Body>
              </Card> */}
              <Card className="card card-chart">
                <Card.Body>
                  <Card.Title>Word Frequency</Card.Title>
                  <ColumnChart dataSearched={dataSearched}/>
                </Card.Body>
              </Card>
              <Card className="card card-table">
                <Card.Body>
                  <TableCard dataSearched={dataSearched}/>
                </Card.Body>
              </Card>
            </Col>
            <Col lg="4">
                {dataSearched.papers ? (
                  dataSearched.papers.map((paper, index) => (
                    <PaperCard key={index} index={index} paper={paper} keyWord={dataSearched.query}/>
                  ))
                ) : (
                  <></>
                )}
            </Col>
          </Row>
        ) : (
          <></>
        )}
      </Container>
    </div>
  )
}