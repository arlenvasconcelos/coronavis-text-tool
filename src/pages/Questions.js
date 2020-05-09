import React, {useEffect, useState} from 'react';
import {Row, Card, Col, } from 'react-bootstrap';

//import api
import api from '../service/api';

export default function Questions(props){

  const [question, setQuestion] = useState({});

  useEffect(()=>{
    const path = props.location.pathname.split('tools')
    console.log(path)
    api.get(path[1])
    .then((response)=>{
      console.log(response)
      setQuestion(response.data.data)
    })
    .catch((err)=> {
      console.log(err)
    })
  },[props.location.pathname]);

  return (
    <>
        <Row bsPrefix="row suggested__section" >
          <h4 className="suggested__topic" >Topic: {question.topic}</h4>
          <h6>Question: {question.text}</h6>
          <Row>
            {
              question.answers && question.answers.map(( (answer, key) => (
                <Col sm={6}>
                  <Card className="home__card">
                    <Card.Body>
                      <Card.Title>{"["+key+"] "+answer.title}</Card.Title>
                      {/* <Card.Title>{paper.title}</Card.Title> */}
                      <Card.Subtitle>Authors: {answer.authors}</Card.Subtitle>
                      <br/>
                      <Card.Text>
                        Answer: {answer.sentence_beginning}<span style={{backgroundColor: '#77f161'}}>{answer.answer}</span>{answer.sentence_ending}
                        <br/>
                        <br/>
                        <span style={{fontStyle:"italic"}}>Publish time: {answer.publish_time}</span>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              )))
            }
          </Row>
        </Row>      
    </>
  );
}