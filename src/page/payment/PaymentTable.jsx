import React from 'react';
import { YgTable } from 'components';
import _ from 'lodash';

const PaymentTable = (props) => {

  const header = [
    { text: '분류' },
    { text: '상품' },
    { text: '금액' },
  ];

  const { data } = props;

  const body = _.map(data, item => {
    return {
      cell: _.map(item, v => {
        return { text: v }
      })
    }
  });

  return (
    <YgTable
      header={header}
      body={body}
    />
  )
}

export default PaymentTable;