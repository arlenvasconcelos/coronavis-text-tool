import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'

export default function Footer () {
  return (
    <>
      <div className="app__footer">
        <Container fluid>
          <Row className="footer__content">
            <Col>
              <a className="footer__link" href="http://ufrgs.br/coronavis">
                <h3>
                  CORONAVIS
                </h3>
              </a>
                <p>
                  Quem somos:
                </p>
              
              <p>

              </p>
            </Col>
            <Col>
            </Col>
            <Col>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}