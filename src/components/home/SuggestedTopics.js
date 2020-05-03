import React, {useEffect, useState} from 'react'
import {Card, Row, Col, Container} from 'react-bootstrap'

import api from '../../service/api'

export default function SuggestedTopics(){

  const [topics, setTopics] = useState({})
  const [loading, setLoading] = useState(false)

  const loadTopics = async () => {
    setLoading(true);
    try {
      const response = await api.post('/featured');
      console.log(response.data)
      // setTopics(response.data);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  }

  useEffect(()=>{
    // loadTopics();
  },[])

  return (
    <>
    <Container fluid>
      <Row bsPrefix="row suggested">
        <h6 className="suggested__topic">Veniam laborum quis amet ad culpa eu eiusmod non consequat dolor deserunt veniam qui veniam?</h6>
        <Col sm={6}>
          <Card bsPrefix="suggested__card card">
            <Card.Body>  
              <Card.Title bsPrefix="suggested__cardtitle">Veniam est pariatur anim labore quis deserunt id minim dolor in aliquip mollit ex.</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Card.Link href="#">See results</Card.Link>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={6}>
          <Card bsPrefix="suggested__card card">
            <Card.Body>  
              <Card.Title bsPrefix="suggested__cardtitle">Veniam est pariatur anim labore quis deserunt id minim dolor in aliquip mollit ex.</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Card.Link href="#">See results</Card.Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    </>
  )
}