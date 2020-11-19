import React from 'react';
import useStore from 'useStore';
import { util } from 'utils/util';

const MoneyTemplate = () => {

  const { market } = useStore();

  const style = {
    marginLeft: '50%',
    marginTop: '30%',
    fontSize: '50px'
  }

  return (
    <div style={style}>
      <b>{util.numberCommas(market.totalMoney)}</b> 원
    </div>
  )
}

export default MoneyTemplate;