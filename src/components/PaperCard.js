import React, {useState}  from 'react';
import {Card, Button} from 'react-bootstrap';
import PaperModal from './PaperModal';

export default function PaperCard(props){

  const {paper, index, keyWord} = props;

  const [showModal, setShowModal] = useState(false);

  const getHighlightedText = (text, highlight) => {
    // Split on highlight term and include term into parts, ignore case
    const parts = text.split(new RegExp(`(${highlight}[ ,.])`, 'gi'));
    return (
      <span> 
        { parts.map((part, i) => 
          <span key={i} 
            style={part.toLowerCase() === highlight.toLowerCase() + (" " || "," || + ".") ? 
              { fontWeight: 'bold', 
                backgroundColor: "yellow", 
                padding: "0px 3px", 
                color:'black', 
                borderRadius: "3px",
                margin: "1px 2px", 
              } : {} 
            }
          >
              { part }
          </span>)
        } 
      </span>
    );
  }

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
          {getHighlightedText(paper.abstract.slice(0,200) + '...', keyWord)}
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