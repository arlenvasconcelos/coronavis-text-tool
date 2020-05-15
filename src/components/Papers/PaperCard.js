import React, {useState}  from 'react';

//import components
import PaperModal from './PaperModal';
import Highlight from '../utils/Highlight';
import CustomCard from '../utils/CustomCard';

//import service
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
      const response = await api.get(`/documents/${id}`);
      console.log(response.data)
      setPaperModal(response.data);
      setShowModal(true);
      setLoading(false);
    } catch (err) {
      setPaperModal(defaultValue);
      console.log(err);
      setLoading(false);
    }
  }

  return (
    <>
      <CustomCard 
        title={"["+index+"] "+paper.title}
        authors={paper.authors}
        body={<Highlight text={paper.abstract.slice(0,200)+'...'} terms={query}/>}
        secondarybody={`Publish Time: ${paper.publish_time}`}
        button="See more"
        buttonAction={() => loadPaperModal(paper.id)}
        loading={loading}
      />
      {
        showModal ? (
          <PaperModal
            key={index}
            index={index}
            paper={paperModal}
            showModal={showModal}
            setShowModal={setShowModal}
          />
        ) : (<></>)
          /* Modal */
      }
    </>
  )
}