import React, {useState, useEffect}  from 'react'; 
import {Table, Card} from 'react-bootstrap';

export default function TableCard({dataSearched}){

  return (
    <>
    <Card className="home__card home__tablecard">
      <Card.Body>
        <Table striped responsive="sm" size="sm" className="card__table">
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
      </Card.Body>
    </Card>
    </>
  )



}