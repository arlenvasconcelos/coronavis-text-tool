import React, {useState}  from 'react';
import {Card, Button} from 'react-bootstrap';
import PaperModal from './PaperModal';

export default function PaperCard(props){

  const {paper, index, keyWord} = props;

  const [showModal, setShowModal] = useState(false);

  // var r = new RegExp('(.{'+(textStart+lenMarks)+'})(.{'+(textStop-textStart)+'})(.*)');

  return (
    <>
    {/* Card */}
    <Card className="card">
      <Card.Body>
        <Card.Title>{"["+index+"] "+paper.title}</Card.Title>
        <Card.Subtitle>{paper.authors}</Card.Subtitle>
        <hr/>
        <Card.Text>
          {paper.abstract.slice(0,200) + '...'}
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
      paper={paper}
      showModal={showModal}
      setShowModal={setShowModal}
    />
    </>
  )
}