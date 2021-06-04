  import React from "react";
 import {Chart} from "react-google-charts";
 import ourdata from "./Data";

function PieChart({graph_title}){

    return (
      <>
      <Chart
      height={'400px'}
      width={'100%'}
      chartType="PieChart"
      loader={<div>Loading Chart</div>}
      data={ourdata}
      options={{
        title: {graph_title},
        chartArea: { width: '50%', height: '70%' },
      }}
      rootProps={{ 'data-testid': '1' }}
    />

    </>
    
  );
}

export default PieChart;