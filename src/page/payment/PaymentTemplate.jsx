import React from 'react';
import useStore from 'useStore';
import { util } from 'utils/util';
import PaymentTable from './PaymentTable';
import PaymentChart from './PaymentChart';

const PaymentTemplate = () => {

  const { payment } = useStore();

  const style = {
    marginLeft: '10%',
    marginRight: '10%',
    marginTop: '5%',
  };

  const totalStyle = {
    textAlign: 'center',
    fontSize: '40px',
    marginTop: '5%'
  };

  return (
    <div style={style}>
      <PaymentTable data={payment.productObj} />
      <PaymentChart data={payment.productObj} />
      <div style={totalStyle}>
        총 금액: <b>{util.numberCommas(payment.totalMoney)}</b> 원
      </div>
    </div>
  );
};

export default PaymentTemplate;