import React, {useState, useEffect}  from 'react'; 
import {Table} from 'react-bootstrap';

//components
// import PaperModal from './PaperModal';

export default function TableCard({dataSearched}){

  // const [showModal, setShowModal] = useState(false);
  // const [paper, setPaper] = useState({});
  // const [index, setIndex] = useState(null);

  return (
    <>
    <Table striped responsive="sm" size="sm" className="table-card">
      <thead>
        <tr>
          <th>#</th>
          <th>Type</th>
          <th>Term</th>
          <th>Counts</th>
          {/* <th>Mentions</th> */}
        </tr>
      </thead>
      <tbody> 
        {
          dataSearched.entities_table.map((item, index) => {
            return (
              <tr key={index}>
                <td>{index}</td>
                <td>{item.entity_type}</td>
                <td>{item.term}</td>
                <td>{item.count}</td>
              </tr>
            )
          })
        }
      </tbody>
    </Table>
    {/* <PaperModal
      index={index}
      paper={paper}
      showModal={showModal}
      setShowModal={setShowModal}
    /> */}
    </>
  )



}