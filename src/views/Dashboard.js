import React from 'react'
import {Container, Row, Col, Form, Button, Card} from 'react-bootstrap'
import ColumnChart from '../components/ColumnChart'
import Header from '../components/Header'
import Search from '../components/Search'

export default function Dashboard () {
  return (
    <>
      <div>
        <Container>
          <Header/>
          <Search/>
          <Row>
            <Col md="8">
              <Card style={{margin: '10px 0'}}>
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card style={{margin: '10px 0'}}>
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                    <ColumnChart/>
                </Card.Body>
              </Card>
              <Card style={{margin: '10px 0'}}>
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    
                  </Card.Text>
                </Card.Body>
              </Card>
              
            </Col>
            <Col md="4">
              <Card style={{margin: '10px 0'}}>
                <Card.Body>
                  <Card.Title>Paper 1</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card style={{margin: '10px 0'}}>
                <Card.Body>
                  <Card.Title>Paper 2</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card style={{margin: '10px 0'}}>
                <Card.Body>
                  <Card.Title>Paper 3</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            
          </Row>
        </Container>
      </div>
    </>
  )
}