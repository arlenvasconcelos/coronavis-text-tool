import React,{useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import api from '../../service/api';

import {Row, Table} from 'react-bootstrap';

export default function Topics(){

  const [topic, setTopic] = useState({})
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [lastPage, setLastPage] = useState("")
  const [previousPage, setPreviousPage] = useState("")
  const [nextPage, setNextPage] = useState("")

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
    loadTopics();
  },[])

  return (
    <>
      {topic.questions? (
        <>
          <Row bsPrefix="row suggested__section ">
            <div className="questions__section">
              <h6 className="suggested__topic">{topic.topic}</h6>
              <Table size="sm">
                <tbody>
                  {
                    topic.questions.map((item, key)=> (
                      // <tr key={key} className="answer__item">
                      <tr key={key}>
                        <td>
                          <Link to={`/tools/questions/${item.qid}/answers`} className="answer__link">{`${key+1}. ${item.text}`}</Link>
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
        </>
      ) : (
        <></>
      )}
    </>
  )
}