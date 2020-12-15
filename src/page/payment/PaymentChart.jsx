import React, { useState, useEffect, useRef } from 'react';
import { YgChart } from 'components';
import { Header } from 'semantic-ui-react';
import _ from 'lodash';
import { util } from 'utils/util';

const PaymentChart = (props) => {

  const [data, setData] = useState();
  const isChange = useRef(false);

  useEffect(() => {
    setData(getData(isChange.current));
    const interval = setInterval(() => {
      isChange.current = !isChange.current;
      setData(getData(isChange.current));
    }, 5000);
    return () => { clearInterval(interval); };
  }, []);

  const getData = (flag) => {
    const getList = _.filter(props.data, item => item.type === (flag ? 'pc' : 'food'));
    return _.map(getList, item => {
      const x = item.code.length > 3 ? `${item.code.substring(0, 3)}...` : item.code;
      return { x, y: item.payment, label: `${util.numberCommas(item.payment)}` };
    });
  };

  const chart = {
    domainPadding: { x: 50 },
    animate: { duration: 500, onLoad: { duration: 500 } },
    width: 1500,
    style: {
      parent: {
        border: "1px solid #ccc"
      },
      background: {
        fill: "pink"
      }
    }
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
    <div>
      <Header
        as='h2'
        icon={isChange.current ? 'gamepad' : 'food'}
        content={isChange.current ? 'PC' : 'FOOD'}
      />
      <YgChart
        chart={chart}
        bar={bar}
      />
    </div>

  );
};

export default PaymentChart;