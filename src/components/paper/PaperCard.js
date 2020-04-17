import React, {useState}  from 'react';
import {Card, Button} from 'react-bootstrap';
import PaperModal from './PaperModal';
import Highlight from '../Highlight';

export default function PaperCard(props){

  const {paper, index, query} = props;
  const [showModal, setShowModal] = useState(false);

  return (
    <>
    {/* Card */}
    <Card className="home__card">
      <Card.Body>
        <Card.Title>{"["+index+"] "+paper.title}</Card.Title>
        <Card.Subtitle>{paper.authors}</Card.Subtitle>
        <hr/>
        <Card.Text>
          <Highlight text={paper.abstract.slice(0,200)} terms={[query]}/>
        </Card.Text>
      </Card.Body>
      <Card.Footer className="d-flex justify-content-end">
        <Button variant="warning" onClick={() => setShowModal(true)} className="button">
          See more
        </Button>
      </Card.Footer>
    </Card>
    {/* Modal */}
    <PaperModal
      index={index}
      paperId={paper.id}
      showModal={showModal}
      setShowModal={setShowModal}
    />
    </>
  )
}