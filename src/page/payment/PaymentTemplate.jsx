import React from 'react';
import useStore from 'useStore';
import { util } from 'utils/util';
import PaymentTable from './PaymentTable';

const PaymentTemplate = () => {

  const { payment } = useStore();

  const style = {
    marginLeft: '10%',
    marginRight: '10%',
    marginTop: '5%',
  }

  const totalStyle = {
    textAlign: 'center',
    fontSize: '40px',
    marginTop: '5%'
  }

  console.log('payment template', payment.productObj);

  return (
    <div style={style}>
      <PaymentTable data={payment.productObj} />
      <div style={totalStyle}>
        총 금액: <b>{util.numberCommas(payment.totalMoney)}</b> 원
      </div>
    </div>
  )
}

export default PaymentTemplate;