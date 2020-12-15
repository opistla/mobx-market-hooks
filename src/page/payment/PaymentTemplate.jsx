import React, { useState } from 'react';
import useStore from 'useStore';
import { util } from 'utils/util';
import { Button } from 'semantic-ui-react';
import PaymentTable from './PaymentTable';
import PaymentChart from './PaymentChart';

const PaymentTemplate = () => {

  const { payment } = useStore();
  const [page, setPage] = useState(true);

  const style = {
    marginLeft: '10%',
    marginRight: '10%',
    marginTop: '5%',
    minHeight: '817px'
  };

  const totalStyle = {
    textAlign: 'center',
    fontSize: '40px',
    marginTop: '5%'
  };

  const generateComponent = () => {
    const ComponentName = page ? PaymentTable : PaymentChart;
    return <ComponentName data={payment.productObj} />;
  };

  return (
    <div style={style}>
      <Button.Group style={{ marginLeft: '42%', paddingBottom: '1%' }}>
        <Button onClick={() => setPage(true)}>테이블</Button>
        <Button.Or />
        <Button positive onClick={() => setPage(false)}>그래프</Button>
      </Button.Group>

      {
        payment.productObj.length !== 0 && (
          generateComponent()
        )
      }

      <div style={totalStyle}>
        총 금액: <b>{util.numberCommas(payment.totalMoney)}</b> 원
      </div>
    </div>
  );
};

export default PaymentTemplate;