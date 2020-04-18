import React, {useState}  from 'react';
import {Card, Button, Spinner} from 'react-bootstrap';
import PaperModal from './PaperModal';
import Highlight from '../Highlight';

import api from '../../service/api'

export default function PaperCard(props){

  const defaultValue = {
    title: "",
    author: [],
    abstract: "",
    entities: [],
    doi: "",
  }

  const {paper, index, query} = props;
  const [showModal, setShowModal] = useState(false);
  const [paperModal, setPaperModal] = useState(defaultValue);
  const [loading, setLoading] = useState(false);

  const loadPaperModal = async (id) => {
    try {
      setLoading(true);
      console.log(id);
      const response = await api.get(`/document/${id}`);
      console.log(response.data)
      setPaperModal(response.data);
      setShowModal(true)
      setLoading(false);
    } catch (err) {
      setPaperModal(defaultValue);
      console.log(err);
      setLoading(false);
    }
  }

  return (
    <>
    {/* Card */}
    <Card className="home__card">
      <Card.Body>
        <Card.Title>{"["+index+"] "+paper.title}</Card.Title>
        {/* <Card.Title>{paper.title}</Card.Title> */}
        <Card.Subtitle>{paper.authors}</Card.Subtitle>
        <hr/>
        <Card.Text>
          <Highlight text={paper.abstract.slice(0,200)+'...'} terms={[query]}/>
        </Card.Text>
      </Card.Body>
      <Card.Footer className="d-flex justify-content-end">
        { !loading ? (
          <Button variant="warning" onClick={() => loadPaperModal(paper.id)} className="button">
            See more
          </Button>
        ) : (
          <Button variant="warning" disabled>
            <Spinner
              as="span"
              animation="grow"
              size="sm"
              role="status"
              aria-hidden="true"
            />
            Loading
          </Button>
        )}
        
      </Card.Footer>
    </Card>
    {/* Modal */}
    <PaperModal
      key={index}
      index={index}
      paper={paperModal}
      showModal={showModal}
      setShowModal={setShowModal}
    />
    </>
  )
}