import React, { useState } from 'react';
import { Table, Icon } from 'semantic-ui-react';
import { util } from 'utils/util';
import _ from 'lodash';

const YgTable = (props) => {
  const { header, body } = props;

  const [sort, setSort] = useState({
    id: '', direction: 'up'
  });
  const [data, setData] = useState(body);

  const onSort = (id) => {
    let direction = 'up';

    if (sort.id === id) {
      direction = sort.direction === 'up' ? 'down' : 'up';
    }

    // up reverse

    setSort({ id, direction });
    const sortData = data.sort((a, b) => {
      if (typeof a[id].text === 'number') {
        return a[id].text - b[id].text;
      } else {
        return a[id].text < b[id].text ? -1 : a[id].text > b[id].text ? 1 : 0;
      }
    });

    if (direction === 'up') {
      sortData.reverse();
    }

    setData(sortData);
  };

  return (
    <Table celled>
      <Table.Header>
        <Table.Row>
          {
            _.map(header, (item, i) => (
              <Table.HeaderCell key={i} style={item.style} onClick={() => onSort(item.id)}>
                {item.text}
                {item.id === sort.id && (
                  <Icon name={`angle ${sort.direction}`} />
                )}
              </Table.HeaderCell>
            ))
          }
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {
          _.map(data, (item, i) => (
            <Table.Row key={i}>
              {
                _.map(item, (cell, j) => (
                  <Table.Cell key={`${i}${j}`}>{util.numberCommas(cell.text)}</Table.Cell>
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