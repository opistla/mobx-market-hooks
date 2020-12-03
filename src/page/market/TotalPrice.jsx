import React from 'react';
import { useObserver } from 'mobx-react';
import useStore from 'useStore';
import { YgButton } from 'components';
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
      <hr />
      <p>
        <b>총합: </b> {util.numberCommas(market.total)}원
        {
          market.total !== 0 && (
            <YgButton fluid content="결제하기" onClick={payment} />
          )
        }
      </p>
    </>
  ));
};

export default TotalPrice;