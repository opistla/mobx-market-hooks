import React, {  useCallback } from 'react';
import { YgTable } from 'components';
import _ from 'lodash';
import './PaymentTable.css';

const HEADER = [
  { id: 0, text: '분류', style: { width: '150px' } },
  { id: 1, text: '상품', style: { width: '300px' } },
  { id: 2, text: '갯수', style: { width: '150px' } },
  { id: 3, text: '금액', style: { width: '200px' } },
  { id: 4, text: '기본금액', style: {} },
];

const PaymentTable = (props) => {
  const { data } = props;

  const body = useCallback((items) => {
    return _.map(items, item => {
      return _.map(item, v => {
        return { text: v };
      });
    });
  }, []);

  return (
    _.map(_.groupBy(data, 'type'), (group, i) => (
      <div key={i} className="PaymentTable">
        <YgTable
          header={HEADER}
          body={body(group)}
        />
      </div>
    ))
  );
};

export default PaymentTable;