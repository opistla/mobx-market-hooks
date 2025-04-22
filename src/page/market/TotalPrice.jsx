import React from 'react';
import { useObserver } from 'mobx-react';
import useStore from 'useStore';
import { Button, Icon, Statistic, Divider } from 'semantic-ui-react';
import { util } from 'utils/util';

const TotalPrice = (props) => {
  const { market } = useStore();

  const payment = () => {
    props.modal.current.show({
      content: `총 ${util.numberCommas(market.total)}원 결제 하시겠습니까?`,
      isConfirm: true,
      onOk: () => market.payment()
    });
  };

  return useObserver(() => (
    <>
      <Divider horizontal>
        <Icon name="calculator" />
        결제 정보
      </Divider>
      
      <Statistic color="red" size="large">
        <Statistic.Value>
          {util.numberCommas(market.total)}원
        </Statistic.Value>
        <Statistic.Label>주문 총액</Statistic.Label>
      </Statistic>
      
      {market.total !== 0 && (
        <>
          <Divider hidden />
          <Button 
            fluid 
            size="large"
            color="red" 
            animated="vertical"
            onClick={payment}
          >
            <Button.Content visible>결제하기</Button.Content>
            <Button.Content hidden>
              <Icon name="credit card" />
            </Button.Content>
          </Button>
        </>
      )}
    </>
  ));
};

export default TotalPrice;