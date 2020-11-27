import React, {  useCallback } from 'react';
import { YgTable } from 'components';
import _ from 'lodash';
import { util } from 'utils/util';

const HEADER = [
  { text: '분류', style: { width: '300px' } },
  { text: '상품', style: { width: '300px' } },
  { text: '금액', style: {} },
];

const PaymentTable = (props) => {
  const { data } = props;

  const body = useCallback((items) => {
    return _.map(items, item => {
      return {
        cell: _.map(item, v => {
          return { text: util.numberCommas(v) }
        })
      }
    });
  }, []);

  return (
    _.map(_.groupBy(data, 'type'), (group, i) => (
      <>
        <div key={i} style={{ overflow: 'auto', height: '300px' }}>
          <YgTable
            key={i}
            header={HEADER}
            body={body(group)}
          />
        </div>
        { i !== data.length - 1 && <hr />}
      </>
    ))
  )
}

export default PaymentTable;