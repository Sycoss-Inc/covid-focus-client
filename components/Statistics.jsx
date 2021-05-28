 import React from "react";
 import {Chart} from "react-google-charts";

export default function Statistics(){

  const ourdata = [
    ['Ward', 'Active Cases'],
    ['Ward 1 - Pathramangalam', 11],
    ['Ward 2 - Vellattanjoor N', 2],
    ['Ward 3 - Thayyur', 2],
    ['Ward 4 - Pazhavur', 2],
    ['Ward 5 - Kodassery', 7],
    ['Ward 6 - Vengilassery', 1],
    ['Ward 7 - Arnos Nagar', 5],
    ['Ward 8 - Kuttamkulam', 7],
    ['Ward 9 - Kiralur', 7],
    ['Ward 10 - Kuruman W', 8],
    ['Ward 11 - Krurmal E', 3],
    ['Ward 12 - Vengilassery W', 7],
    ['Ward 13 - Vellattanjoor', 7],
    ['Ward 14 - Velur', 7],
    ['Ward 15 - Thalakkottukara', 1],
    ['Ward 16 - Thandilam', 7],
    ['Ward 17 - Puliyannur', 4],
  ];

    return (
      <>
      <Chart
      width={'500px'}
      height={'300px'}
      chartType="PieChart"
      loader={<div>Loading Chart</div>}
      data={ourdata}
      options={{
        title: 'Active Cases',
      }}
      rootProps={{ 'data-testid': '1' }}
    />
    <Chart
      width={'700px'}
      height={'300px'}
      chartType="LineChart"
      loader={<div>Loading Chart</div>}
      data={ourdata}
      options={{
        title: 'Active Cases',
      }}
      rootProps={{ 'data-testid': '1' }}
    />
    </>
    
  );
}
