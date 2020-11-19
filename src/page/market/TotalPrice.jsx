import React from 'react';
import { useObserver } from 'mobx-react';
import useStore from 'useStore';

const TotalPrice = () => {

  const { market } = useStore();

  return useObserver(() => (
    <>
      <hr />
      <p>
        <b>총합: </b> {market.total}원
      </p>
    </>
  ));
}

export default TotalPrice;