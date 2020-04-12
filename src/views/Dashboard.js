import React, {useEffect, useState} from 'react'
import {useSelector} from 'react-redux'

import {Container, Row, Col, Card} from 'react-bootstrap'
import ColumnChart from '../components/ColumnChart'
import Header from '../components/Header'
import Search from '../components/Search'
import PaperCard from '../components/PaperCard'
import TableCard from '../components/TableCard'

export default function Dashboard () {

  // const [dataSearched, setDataSearched] = useState();
  const dataSearched = useSelector(state => state.dataSearched.data, [])

  console.log(dataSearched)

  // useEffect(()=>{
  //   const data = 
  //   setDataSearched(data);
  // })
  

  return (
    <>
      <Container>
        <Header/>
        <Search/>
          {dataSearched.papers ? (
            <Row>
              <Col md="8">
                <Card className="card">
                  <Card.Body>
                    <Card.Title>Scatterplot</Card.Title>
                    <Card.Text>
                      .....
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card className="card">
                  <Card.Body>
                    {/* <Card.Title>Card Title</Card.Title> */}
                    <ColumnChart dataSearched={dataSearched}/>
                  </Card.Body>
                </Card>
                <Card className="card">
                  <Card.Body>
                    <TableCard/>
                  </Card.Body>
                </Card>
              </Col>
              <Col md="4">
                {dataSearched.papers ? (
                  dataSearched.papers.map((paper, key) => (
                    <PaperCard key={key} paper={paper}/>
                  ))
                ) : (
                  <></>
                )}
              </Col>
            </Row>
          ) : (
            <></>
          )
        }
      </Container>
    </>
  )
}