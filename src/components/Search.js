import React, {useEffect, useState} from 'react'
import {Row, Col, Form, Button} from 'react-bootstrap';
import api from '../service/api'

export default function Search(){

  const [data, setData] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post(`/search?query=${inputValue}`);
      setData(response.data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(()=>{
    console.log(data);
  },[data])

  return (
    <Row className="search">
      <Col md={12}>
        <Form onSubmit={(e) => handleSubmit(e)}>
          <Form.Row>
            <Col lg={11} md={10} className="my-2">
              <Form.Control placeholder="Type here" onChange={(e) => setInputValue(e.target.value)}/>
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