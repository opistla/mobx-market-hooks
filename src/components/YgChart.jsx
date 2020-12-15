import React from 'react';
import { VictoryChart, VictoryBar, VictoryTheme } from "victory";

const YgChart = (props) => {

  const { chart, bar } = props;

  return (
    <VictoryChart
      {...chart}
      theme={VictoryTheme[props.chart.theme] || VictoryTheme.grayscale}
    >
      <VictoryBar
        {...bar}
      />
    </VictoryChart>
  );
};

export default YgChart;