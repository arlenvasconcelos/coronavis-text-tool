import React, {useEffect, useState} from 'react';
import {Row, Card, Col, } from 'react-bootstrap';

//import api
import api from '../../service/api';

export default function Questions(props){

  const [question, setQuestion] = useState({
    topic: "",
    text: "",
    answers: []
  });

  useEffect(()=>{
    const loadQuestion = async () => {
      const path = props.location.pathname.split('tools')
      try{
        const response = await api.get(path[1])
        console.log(response.data)
        setQuestion(response.data.data)
      }
      catch(err){
        console.log(err)
      }
    }
    loadQuestion();
  },[props.location.pathname]);

  return (
    <>
      <Row bsPrefix="row suggested__section" >
        <h4 className="suggested__topic" >Topic: {question.topic}</h4>
        <h6>Question: {question.text}</h6>
        <Row>
          {
            question.answers.map(( (answer, key) => (
              <Col key={key} sm={6}>
                <Card className="home__card">
                  <Card.Body>
                    <Card.Title>{`[${key+1}] ${answer.title}`}</Card.Title>
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