import React, {useEffect, useState} from 'react';
import {Row} from 'react-bootstrap';

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
          <ul>
            {
              question.answers && question.answers.map(( (answer, key) => (    
                  <li>{answer.sentence_beginning + answer.answer + answer.sentence_ending}</li>
              )))
            }
          </ul>
        </Row>      
    </>
  );
}