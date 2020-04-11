import React, {useEffect} from 'react'
import {Row, Col, Form, Button} from 'react-bootstrap';
import api from '../service/api'

export default function Search(){

  const handleSubmit = (word) => {
    try {
      const response = await api.post(`?query=${'human'}`);
      console(response.data);
    } catch (err) {
      console.log(err);
    }
    
  }

  useEffect(()=>{
    console.log('fazendo a requisição')
    handleSubmit();
  },[])


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