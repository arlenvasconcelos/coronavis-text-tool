import React, {useState} from 'react'
import {Row, Col, Form, Button, Spinner, Container} from 'react-bootstrap';
import { useDispatch } from 'react-redux';

import api from '../../service/api'

import { dataSearched } from '../../store/ducks/dataSearched';

export default function NavSearch(){

  const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await api.post(`/search?query=${inputValue}`);
      dispatch(dataSearched(response.data));
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  }


  return (
    <div className="search">
      <Container fluid>
        <Row >
          <Col md={12}>
            <Form onSubmit={(e) => handleSubmit(e)}>
              <Form.Row>
                <Col lg={11} md={10} className="my-2">
                  <Form.Control placeholder="Type here" onChange={(e) => setInputValue(e.target.value)}/>
                </Col >
                <Col lg={1} md={2} className="d-flex justify-content-center my-2">
                  { !loading ? (
                    <Button type="submit" className="search__button">
                      Submit
                    </Button>
                  ) : (
                    <Button disabled className="search__button-loading">
                      <Spinner
                        as="span"
                        animation="grow"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                      />
                      Loading
                    </Button>
                  )}
                </Col>
              </Form.Row>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  )
}