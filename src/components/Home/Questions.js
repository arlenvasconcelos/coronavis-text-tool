import React,{useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import api from '../../service/api';

import {Row, Table} from 'react-bootstrap';

const QuestionLine = ({question, index}) => (
  <tr>
    <td>
      <Link 
        to={`/tools/questions/${question.qid}/answers`} 
        className="answer__link"
      >
        {`${index}. ${question.text}`}
      </Link>
    </td>
    <td>
      [{question.total_answers} results]
    </td>
  </tr>
)

export default function Topics(){

  const [topic, setTopic] = useState({
    questions: [],
    topic: ""
  })
  // const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  // const [lastPage, setLastPage] = useState("")
  // const [previousPage, setPreviousPage] = useState("")
  // const [nextPage, setNextPage] = useState("")

  

  useEffect(()=>{
    const loadTopics = async () => {
      try {
        const response = await api.get(`/topics?page=${currentPage}`);
        // setPreviousPage(response.data.previous)
        setCurrentPage(response.data.current)
        // setNextPage(response.data.next)
        // setLastPage(response.data.last)
        setTopic(response.data.data)
      } catch (err) {
        console.log(err);
      }
    }
    loadTopics();
  },[currentPage])

  if (!topic) {
    return (<></>)
  }

  return (
    <>
      <Row className="suggested__section ">
        <div className="questions__section">
          <h6 className="suggested__topic">{topic.topic}</h6>
          <Table size="sm">
            <tbody>
              {
                topic.questions.map((item, key)=> (
                  <QuestionLine key={key} question={item} index={key+1}/>
                ))
              }
            </tbody>
          </Table>
        </div>
      </Row>
    </>
  )
}