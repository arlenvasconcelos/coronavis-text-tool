import React  from 'react';
import {Card, Table} from 'react-bootstrap';

export default function TableCard(props){

  const {title} = props;

  return (
    <Table responsive="sm" className="table-card">
      <thead>
        <tr>
          <th>#</th>
          <th>Type</th>
          <th>Paragraph</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>bla1</td>
          <td>gene</td>
          <td>[2]</td>
        </tr>
        <tr>
          <td>bla2</td>
          <td>gene</td>
          <td>[4]</td>
        </tr>
      </tbody>
    </Table>
  )



}