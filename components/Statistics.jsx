 import { nodeName } from "jquery";
import React from "react";
//  import {Chart} from "react-google-charts";
import styles from "../styles/Stats.module.css" ;
import  { wards } from "./Data";
import  { cases } from "./Data";
 import { Pie } from "react-chartjs-2";
import Stats from "../pages/stats";

 const data = {
    labels : wards,
    datasets: [
    {
      // label: '# of Votes',
      data: cases,
      type: 'pie',
      radius:'50%',
      backgroundColor: [
        '#94d0cc',
        '#eec4c4',
        '#f29191',
        '#907fa4',
        '#e9896a',
        '#654062',
        '#f5b461',
        '#f39233',
        '#ff4b5c',
        '#12947f',
        '#84142d',
        '#f7be16',
        '#60204b',
        '#7ecfc0',
        '#6ebfb5',
        '#e8505b',
        '#84a9ac',
      ],
      borderColor: [
        '#94d0cc',
        '#eec4c4',
        '#f29191',
        '#907fa4',
        '#e9896a',
        '#654062',
        '#f5b461',
        '#f39233',
        '#ff4b5c',
        '#12947f',
        '#84142d',
        '#f7be16',
        '#60204b',
        '#7ecfc0',
        '#6ebfb5',
        '#e8505b',
        '#84a9ac',
    ],
      borderWidth: 1,
    },
  ],
};

const PieChart = () => (
  <>
    <div className={`container-fluid ${styles.pie}`}>
    <h3>Active Cases</h3>
    <Pie data={data} />
    </div>
  </>
);


// function Statistics(){

//     return (
//       <>
//        <Pie
//        data={{
//        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//        datasets: ourdata,
//        type: 'pie',
//       //  data: ourdata,
//        options: {
//          responsive: true,
//          plugins: {
//          legend: {
//            position: 'top',
//           },
//          title: {
//            display: true,
//            text: 'Active Cases'
//           }
//          }
//        },
//       }}
      

//       // width={'100%'}
//       // height={'400px'}
//       // chartType="PieChart"
//       // loader={<div>Loading Chart</div>}
//       // data={ourdata}
//       // options={{
//       //   title: 'Active Cases',
//       //   chartArea: { width: '50%', height: '70%' },
//       // }}
//       // rootProps={{ 'data-testid': '1' }}
//      /> 

//     </> 
    
//   );
// }

export default PieChart;
