import React from 'react'
import {Row, Col, Form, Button} from 'react-bootstrap';

export default function Search(){
  return (
    <Row className="search">
      <Col md={12}>
        <Form>
          <Form.Row>
            <Col lg={11} md={10} className="my-2">
              <Form.Control placeholder="Type here" />
            </Col >
            <Col lg={1} md={2} className="d-flex justify-content-center my-2">
              <Button variant="warning" type="submit" className="button">
                Submit
              </Button>
            </Col>
          </Form.Row>
        </Form>
      </Col>
    </Row>
  )
}