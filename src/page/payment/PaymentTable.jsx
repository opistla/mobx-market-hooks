import React, { useCallback } from 'react';
import { YgTable } from 'components';
import { Segment, Label, Icon, Divider, Header } from 'semantic-ui-react';
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

  const getGroupColor = (type) => {
    return type === 'pc' ? 'blue' : 'green';
  };

  const getGroupIcon = (type) => {
    return type === 'pc' ? 'computer' : 'food';
  };

  return (
    <div>
      {_.size(data) > 0 ? (
        _.map(_.groupBy(data, 'type'), (group, type) => (
          <Segment raised key={type} className="PaymentTable">
            <Label color={getGroupColor(type)} ribbon>
              <Icon name={getGroupIcon(type)} />
              {type === 'pc' ? 'PC 매출' : '음식 매출'}
            </Label>
            <Header as='h3' textAlign='center' style={{ margin: '15px 0' }}>
              <Icon name={getGroupIcon(type)} color={getGroupColor(type)} />
              <Header.Content>
                {type === 'pc' ? 'PC 사용 내역' : '음식 주문 내역'}
                <Header.Subheader>
                  총 {group.length}건의 매출 정보
                </Header.Subheader>
              </Header.Content>
            </Header>
            <Divider />
            <YgTable
              header={HEADER}
              body={body(group)}
              className={`table-${type}`}
            />
          </Segment>
        ))
      ) : (
        <Segment placeholder textAlign="center">
          <Header icon>
            <Icon name="search" />
            표시할 데이터가 없습니다.
          </Header>
        </Segment>
      )}
    </div>
  );
};

export default PaymentTable;