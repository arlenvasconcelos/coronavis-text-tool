import React from 'react'
import {Container, Row, Col, Form, Button, Card} from 'react-bootstrap'
import ColumnChart from '../components/ColumnChart'
import Header from '../components/Header'
import Search from '../components/Search'
import PaperCard from '../components/PaperCard'
import TableCard from '../components/TableCard'

export default function Dashboard () {
  return (
    <>
      <Container>
        <Header/>
        <Search/>
        <Row>
          <Col md="8">
            <Card className="card">
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="card">
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                  <ColumnChart/>
              </Card.Body>
            </Card>
            <Card className="card">
              <Card.Body>
                <TableCard/>
              </Card.Body>
            </Card>
          </Col>
          <Col md="4">
            <PaperCard title="Paper 1"/>
            <PaperCard title="Paper 2"/>
            <PaperCard title="Paper 3"/>
          </Col>
        </Row>
      </Container>
    </>
  )
}