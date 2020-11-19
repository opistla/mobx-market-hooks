import React from 'react';
import { useObserver } from 'mobx-react';
import useStore from 'useStore';
import { YgButton } from 'components';

const TotalPrice = () => {

  const { market } = useStore();

  const payment = () => {
    market.payment();
  }

  return useObserver(() => (
    <>
      <hr />
      <p>
        <b>총합: </b> {market.total}원
        {
          market.total !== 0 && (
            <YgButton fluid content="결제하기" onClick={payment} />
          )
        }
      </p>
    </>
  ));
}

export default TotalPrice;