import React from 'react';
import { VictoryChart, VictoryBar } from "victory";

const YgChart = (props) => {

  const { chart, bar } = props;

  return (
    <VictoryChart
      {...chart}
    >
      <VictoryBar
        {...bar}
      />
    </VictoryChart>
  );
};

export default YgChart;