import React,{useState, useEffect} from 'react';

import api from '../../service/api';

import {Row, Col, Card} from 'react-bootstrap';


export default function MainTopic(){

  const [mainTopic, setMainTopic] = useState({})
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [lastPage, setLastPage] = useState("")
  const [previousPage, setPreviousPage] = useState("")
  const [nextPage, setNextPage] = useState("")

  useEffect(()=>{
    const loadFeatured = async () => {
      setLoading(true);
      try {
        const response = await api.get('/featured');
        setMainTopic(response.data.data[0])
        setLoading(false);
      } catch (err) {
        setLoading(false);
        console.log(err);
      }
    }
    loadFeatured();
  },[])

  if (!mainTopic){
    return (<></>)
  }

  return (
    <>
      <Row bsPrefix="row suggested__section">
        <h6 className="suggested__topic">{mainTopic.topic}</h6>
        {
          mainTopic.questions && mainTopic.questions.map((item, key)=> (
            <Col key={key} md={6}>
              <Card bsPrefix="suggested__card card">
                <Card.Body>
                  <Card.Title bsPrefix="suggested__cardtitle">{item.question}</Card.Title>
                  {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
                  <Card.Text>
                    {item.summary}
                  </Card.Text>
                  <Card.Link href={`/tools/questions/${item.qid}/answers`}>[{item.total_results} results]</Card.Link>
                </Card.Body>
              </Card>
            </Col>
          ))
        }
      </Row>
    </>
  )
}