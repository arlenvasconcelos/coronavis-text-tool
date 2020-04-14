import React, {useState, useEffect}  from 'react';
import {Table} from 'react-bootstrap';

import PaperModal from './PaperModal';

export default function TableCard({dataSearched}){

  const [showModal, setShowModal] = useState(false);
  const [paper, setPaper] = useState({});

  const [entityTable, setEntityTable] = useState([]);
  


  useEffect(() => {
    let count = {}
    dataSearched.entities_table.map((entityPaper, index) => {
      const a = entityPaper.reduce((object, item) => {  
        // console.log( object , item ); 
        if ( !count[item.term] ) {
          count[item.term] = {entityType: item.entity_type, quantity: 1, mentions: ""+(index+1) };
        } else {
          count[item.term] = {entityType: item.entity_type, quantity: count[item.term].quantity + 1, mentions: count[item.term].mentions + ',' + (index+1)};
        }
        // console.log(count)
        return count; 
      },{})
      console.log(a)  
    })

    setEntityTable(count);
  }, [dataSearched])
  

  return (
    <>
    <Table striped responsive="sm" size="sm" className="table-card">
      <thead>
        <tr>
          <th>#</th>
          <th>Type</th>
          <th>Term</th>
          <th>Counts</th>
          <th>Mentions</th>
        </tr>
      </thead>
      <tbody> 
        {
          Object.keys(entityTable).map((item, index) => {
            return (
              <tr>
                <td>{index}</td>
                <td>{entityTable[item].entityType}</td>
                <td>{item}</td>
                <td>{entityTable[item].quantity}</td>
                {/* <td>{entityTable[item].mentions.split(",")
                  .reduce((a,b)=>(a!=b)?(a+b):a,"")}</td> */}
                  <td> {Array.from(new Set(entityTable[item].mentions.split(','))).toString()}</td>
              </tr>
            )
          })
        }
      </tbody>
    </Table>
    <PaperModal
      paper={paper}
      showModal={showModal}
      setShowModal={setShowModal}
    />
    </>
  )



}