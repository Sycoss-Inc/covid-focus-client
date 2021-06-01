 import React from "react";
 import {Chart} from "react-google-charts";
 import ourdata from "./Data";

function Statistics(){

    return (
      <>
      <Chart
      // width={'100%'}
      height={'400px'}
      chartType="PieChart"
      loader={<div>Loading Chart</div>}
      data={ourdata}
      options={{
        title: 'Active Cases',
        chartArea: { width: '50%', height: '70%' },
      }}
      rootProps={{ 'data-testid': '1' }}
    />

    </>
    
  );
}

export default Statistics;
