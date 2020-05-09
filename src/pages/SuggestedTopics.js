import React, {useEffect, useState} from 'react'
import {Card, Row, Col, Table} from 'react-bootstrap'
import {Link} from 'react-router-dom'

import api from '../service/api'

export default function SuggestedTopics(){

  const [topic, setTopic] = useState({})
  const [loading, setLoading] = useState(false)
  const [mainTopic, setMainTopic] = useState({})
  const [currentPage, setCurrentPage] = useState(1)
  const [lastPage, setLastPage] = useState("")
  const [previousPage, setPreviousPage] = useState("")
  const [nextPage, setNextPage] = useState("")

  const loadFeatured = async () => {
    setLoading(true);
    try {
      const response = await api.get('/featured');
      console.log(response.data.data[0])
      setMainTopic(response.data.data[0])
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  }

  const loadTopics= async () => {
    try {
      const response = await api.get(`/topics?page=${currentPage}`);
      setPreviousPage(response.data.previous)
      setCurrentPage(response.data.current)
      setNextPage(response.data.next)
      setLastPage(response.data.last)
      console.log(response.data.data)
      setTopic(response.data.data)
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(()=>{
    loadFeatured();
    loadTopics();
  },[])

  return (
    <>
      {mainTopic ? (
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
                    <Card.Link href={`/tools/answers/${item.qid}`}>[{item.total_results} results]</Card.Link>
                  </Card.Body>
                </Card>
              </Col>
            ))
          }
        </Row>
      ) : (
        <></>
      )}
      {topic ? (
        <Row bsPrefix="row suggested__section ">
          <div className="questions__section">
            <a href="#"><h6>{topic.topic}</h6></a>
            <Table size="sm">
              <tbody>
                {
                  topic.questions && topic.questions.map((item, key)=> (
                    <tr key={key} className="answer__item">
                      <td>
                        <Link to={`/tools/answers/${item.qid}`} className="answer__link">{`${key+1}. ${item.text}`}</Link>
                      </td>
                      <td>
                        [{item.total_answers} results]
                      </td>
                    </tr>
                  ))
                }
              </tbody>
            </Table>
          </div>
        </Row>
      ):(
        <></>
      )}    
    </>
  )
}