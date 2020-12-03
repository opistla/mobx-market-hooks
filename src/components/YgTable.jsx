import React from 'react';
import { Table } from 'semantic-ui-react';
import _ from 'lodash';

const YgTable = (props) => {

  const { header, body } = props;

  return (
    <Table celled>
      <Table.Header>
        <Table.Row>
          {
            _.map(header, (item, i) => (
              <Table.HeaderCell key={i} style={item.style}>{item.text}</Table.HeaderCell>
            ))
          }
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {
          _.map(body, (item, i) => (
            <Table.Row key={i}>
              {
                _.map(item.cell, (cell, c) => (
                  <Table.Cell key={`${i}${c}`}>{cell.text}</Table.Cell>
                ))
              }
            </Table.Row>
          ))
        }
      </Table.Body>

    </Table>
  );
};

export default YgTable;