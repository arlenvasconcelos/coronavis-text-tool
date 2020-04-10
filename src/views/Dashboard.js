import React from 'react'
import {Container, Row, Col, Form, Button, Card} from 'react-bootstrap'
import ColumnChart from '../components/ColumnChart'

export default function Dashboard () {
  return (
    <>
      <div>
        <Container>
          <Row className="py-2">
            <Col md={12} className="d-flex justify-content-center"> 
              <h1> Coronavis</h1>
            </Col>
            <Col md={12}>
              <Form>
                <Form.Row>
                  <Col md={11}>
                    <Form.Control placeholder="Type here" />
                  </Col >
                  <Col md={1}>
                    <Button style={{width: "100%"}}variant="dark" type="submit">
                      Submit
                    </Button>
                  </Col>
                </Form.Row>
              </Form>
            </Col>
            <Col md="12">
              Text Analitics tool for COVID-19 Researchs            
            </Col>
          </Row>
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
                  <Card.Text>
                    <ColumnChart/>
                  </Card.Text>
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