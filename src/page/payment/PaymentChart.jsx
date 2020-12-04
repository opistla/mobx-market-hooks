import React, { useState, useEffect } from 'react';
import { YgChart } from 'components';
import _ from 'lodash';

const PaymentChart = (props) => {

  const [data, setData] = useState();
  const isChange = React.useRef(false);

  useEffect(() => {
    const interval = setInterval(() => {
      isChange.current = !isChange.current;
      setData(getData(isChange.current));
    }, 3000);
    return () => { clearInterval(interval); };
  }, []);

  const getData = (flag) => {
    const getList = _.filter(props.data, item => item.type === (flag ? 'pc' : 'food'));
    return _.map(getList, item => {
      return { x: item.code, y: item.payment, label: `${item.payment}` };
    });
  };

  const chart = {
    domainPadding: { x: 50 },
    animate: {duration: 500}
  };

  const bar = {
    data: data,
    style: {
      data: { fill: "tomato", width: 12 }
    },
    animate: {
      onExit: {
        duration: 500,
        before: () => ({
          _y: 0,
          fill: "orange",
          label: "BYE"
        })
      }
    }
  };

  return (
    <YgChart
      chart={chart}
      bar={bar}
    />
  );
};

export default PaymentChart;