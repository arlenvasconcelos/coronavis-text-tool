import React, {useEffect, useState} from 'react'
import {Card, Row, Col, Container, Table} from 'react-bootstrap'

import api from '../../service/api'

export default function SuggestedTopics(){

  const [topics, setTopics] = useState({})
  const [loading, setLoading] = useState(false)

  const loadTopics = async () => {
    setLoading(true);
    try {
      const response = await api.get('/featured');
      console.log(response.data)
      // setTopics(response.data);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  }

  useEffect(()=>{
    loadTopics();
  },[])

  return (
    <>
    <Container fluid>
      <Row bsPrefix="row suggested">
        <h6 className="suggested__topic">Veniam laborum quis amet ad culpa eu eiusmod non consequat dolor deserunt veniam qui veniam?</h6>
        <Col md={6}>
          <Card bsPrefix="suggested__card card">
            <Card.Body>  
              <Card.Title bsPrefix="suggested__cardtitle">Veniam est pariatur anim labore quis deserunt id minim dolor in aliquip mollit ex.</Card.Title>
              {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Card.Link href="#">See results</Card.Link>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card bsPrefix="suggested__card card">
            <Card.Body>  
              <Card.Title bsPrefix="suggested__cardtitle">Veniam est pariatur anim labore quis deserunt id minim dolor in aliquip mollit ex.</Card.Title>
              {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Card.Link href="#">See results</Card.Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="suggested__questions">
        <div className="questions__section">
          <a href="#"><h6>Amet aliquip non laboris culpa id eaAmet aliquip non laboris culpa id eaDolor aliquip excepteur tempor elit elit aliquip adipisicing officia dolor fugiat tempor amet.?</h6></a>
          <Table borderless size="sm">
            <tbody>
              <tr className="answer__item">
                <td>
                  <a href="#" className="answer__link">1. Commodo labore sit aliqua laboris sintCommodo labore sit aliqua laboris sintCommodo labore sit aliqua laboris sint.</a>
                </td>
                <td>
                  [200 results]
                </td>
              </tr>
              <tr className="answer__item">
                <td>
                  <a href="#" className="answer__link">2. Commodo labore sit aliqua laboris sintCommodo labore sit aliqua laboris sintCommodo labore sit aliqua laboris sint.</a>
                </td>
                <td>
                  [200 results]
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </Row>
      <Row className="suggested__questions">
        <div className="questions__section">
          <a href="#"><h6>Amet aliquip non laboris culpa id eaAmet aliquip non laboris culpa id eaDolor aliquip excepteur tempor elit elit aliquip adipisicing officia dolor fugiat tempor amet.?</h6></a>
          <Table borderless size="sm">
            <tbody>
              <tr className="answer__item">
                <td>
                  <a href="#" className="answer__link">1. Commodo labore sit aliqua laboris sintCommodo labore sit aliqua laboris sintCommodo labore sit aliqua laboris sint.</a>
                </td>
                <td>
                  [200 results]
                </td>
              </tr>
              <tr className="answer__item">
                <td>
                  <a href="#" className="answer__link">2. Commodo labore sit aliqua laboris sintCommodo labore sit aliqua laboris sintCommodo labore sit aliqua laboris sint.</a>
                </td>
                <td>
                  [200 results]
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </Row>
    </Container>
    </>
  )
}