import React from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import style from "../styles/stats.module.css";
import Statistics from "../components/Statistics";
import {Chart} from "react-google-charts";
import {activeData , positivityRate , positiveData , negativeData , wardData} from "../components/Data";
import Card from "react-bootstrap/Card";
import  Carousel   from "react-bootstrap/Carousel";
import CarouselItem from "react-bootstrap/CarouselItem"
function Stats() {
  return (
    <Layout title="Statistics">
      <Head>
        <title>Covid Focus | Stats</title>
        <meta
          name="description"
          content="Designed and developed by GEC Thrissur"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={`container-fluid ${style.stats}`}>
        <Statistics />
        <div className="row ">
        <div className={`col-12 col-md-6 ${style.chart}`}>
        <Card >
        <Card.Body>
        <Chart
        // width={'800px'}
        // height={'250px'}
        className={`${style.card}`}
        chartType="LineChart"
        loader={<div>Loading Chart</div>}
        data={activeData}
        options={{
          title: 'Total Active Cases',
          chartArea: { width: '50%', height: '70%' },
        }}
        rootProps={{ 'data-testid': '1' }}
        />
        </Card.Body>
        </Card>
        </div>
        <div className={`col-12 col-md-6 ${style.chart}`}>
        <Card >
        <Card.Body>
        <Chart
        // width={'800px'}
        // height={'250px'}
        className={`${style.card}`} 
        chartType="AreaChart"
        loader={<div>Loading Chart</div>}
        data={positiveData}  
        options={{
    title: 'Covid Positive',
    hAxis: { title: 'Date' },
    vAxis: { minValue: 0 },
    colors: ['red'],
    // For the legend to fit, we make the chart area smaller
    chartArea: { width: '50%', height: '70%' },
    // lineWidth: 25
  }}
        rootProps={{ 'data-testid': '1' }}
        />
        </Card.Body>
        </Card>
        </div>
        <div className={`col-12 col-md-6 ${style.chart}`}>
        <Card > 
        <Card.Body>
        <Chart
        // width={'800px'}
        // height={'250px'}
        className={`${style.card}`}
        chartType="AreaChart"
        loader={<div>Loading Chart</div>}
        data={negativeData}
        options={{
          title: 'Covid Negative',
          hAxis: { title: 'Date' },
          vAxis: { minValue: 0 },
          colors: ['green'],
          chartArea: { width: '50%', height: '70%' },
        }}
        rootProps={{ 'data-testid': '1' }}
        />
        </Card.Body>
        </Card>
        </div>
        <div className={`col-12 col-md-6 ${style.chart}`}>
        <Card >
        <Card.Body>
        <Chart
        // width={'800px'}
        // height={'250px'}
        chartType="AreaChart"
        loader={<div>Loading Chart</div>}
        data={positivityRate}
        options={{
          title: 'Test Positivity Rate - Velur',
          hAxis: { title: 'Date' },
    vAxis: { minValue: 0 },
    chartArea: { width: '50%', height: '70%' },
        }}
        rootProps={{ 'data-testid': '1' }}
        />
        </Card.Body>
        </Card> 
        </div>       
      </div>
      <div className={`container-fluid ${style.carousel}`}>
      <Carousel className={`${style.car}`} nextLabel={false} prevLabel={false} >
      {wardData.map( (ward) =>
      {return (
        <CarouselItem >
        <Chart
        className={`${style.carousel}`}
        chartType="AreaChart"
        loader={<div>Loading Chart</div>}
        data={ward}
        options={{
          height:'350',
          width:'900',
          title: {ward},
          hAxis: { title: 'Date' },
          vAxis: { minValue: 0 },
          colors:['purple'],
          chartArea: { width: '50%', height: '70%' },
        }}
        rootProps={{ 'data-testid': 1 }}
        />
        </CarouselItem>
      );}
      )}
      </Carousel>
      </div>
      </div>
    </Layout>
  );
}

export default Stats;
