import React, {useEffect, useState} from 'react';
import {Row} from 'react-bootstrap';

//import api
import api from '../service/api';

export default function Answers(props){

  const [result, setResult] = useState({});

  useEffect(()=>{
    const path = props.location.pathname.split('tools')
    console.log(path)
    api.get(path[1])
    .then((response)=>{
      console.log(response)
      setResult(response.data.results[0])
    })
    .catch((err)=> {
      console.log(err)
    })
  },[]);

  return (
    <>
        <Row bsPrefix="row suggested__section">
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
    </>
  );
}