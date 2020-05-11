import React,{useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import Box from '@material-ui/core/Box';

//import components
import Pagination from '../utils/Pagination';

//import api
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

  const [lastPage, setLastPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(1)

  const loadTopics = async (page) => {
    try {
      const response = await api.get(`/topics?page=${currentPage}`);
      setLastPage(response.data.last ? response.data.last.split('?page=')[1] : response.data.current)
      console.log(response.data)
      setTopic(response.data.data)
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(()=>{
    loadTopics(page);
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
        <Box mt={2}>
          <Pagination 
            lastPage={lastPage} 
            path={`/tools/topics`}
            setCurrentPage={setCurrentPage}
          />
        </Box>
      </Row>
    </>
  )
}