import React, {useEffect, useState} from 'react';
import { Container, Accordion, Row, Col, Card } from 'react-bootstrap';

//import components
import PaperAccordion from '../components/PaperAccordion';

//import api
import api from '../service/api';
import PaperCard from '../components/paper/PaperCard';

export default function Answers(props){

  const [result, setResult] = useState({});

  useEffect(()=>{
    api.get(props.location.pathname)
    .then((response)=>{
      console.log(response)
      setResult(response.data.results[0])
    })
    .catch((err)=> {
      console.log(err)
    })
  },[]);

  return (
    <Container fluid>
        <Row bsPrefix="row suggested__section mx-2">
          <h4 className="suggested__topic">Topic: {result.topic}</h4>
          <h6>Question: {result.question}</h6>
          <ul>

            {
              result.answers && result.answers.map(( (answer, key) => (    
                  <li>{answer.sentence_beginning + answer.answer + answer.sentence_ending}</li>
              )))
            }
          </ul>
        </Row>      
    </Container>
  );
}