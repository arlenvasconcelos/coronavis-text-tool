import React from 'react'
import {Row, Col, Form, Button} from 'react-bootstrap';

export default function Search(){
  return (
    <Row className="search">
      <Col md={12}>
        <Form>
          <Form.Row>
            <Col md={11}>
              <Form.Control placeholder="Type here" />
            </Col >
            <Col md={1}>
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