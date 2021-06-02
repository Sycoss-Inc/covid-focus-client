import React,{useState} from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import style from "../styles/stats.module.css";
import Statistics from "../components/Statistics";
import {Chart} from "react-google-charts";
import {activeData , positivityRate , positiveData , negativeData , wardData} from "../components/Data";
import Card from "react-bootstrap/Card";
import  Carousel   from "react-bootstrap/Carousel";
import CarouselItem from "react-bootstrap/CarouselItem";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


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
        <div className={`row ${style.first}`}>
        <div className={`col-12 col-md-6 ${style.chart}`}>
        <Card >
        <Card.Body>
        <Chart
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
        chartType="AreaChart"
        loader={<div>Loading Chart</div>}
        data={positiveData}  
        options={{
          title: 'Covid Positive',
          hAxis: { title: 'Date' },
          vAxis: { minValue: 0 },
          colors: ['red'],
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


      <div className={`row d-none d-lg-block ${style.chart}`}>
      <div className={`${style.carousel}`}>
        <Carousel className={`${style.car} ${style.car}`} nextLabel={false} prevLabel={false} >
        {wardData.map( (ward) =>
        {return (
         <CarouselItem >
         <div className={`container-fluid mx-auto col-12 ${style.graph}`}>
          <Chart
        chartType="AreaChart"
        loader={<div>Loading Chart</div>}
        data={ward}
        options={{
          width:'800',
          height:'300',
          
          title: {ward},
          hAxis: { title: 'Date' },
          vAxis: { minValue: 0 },
          colors:['purple'],
          chartArea: { width: '40%', height: '60%'},
        }}
        rootProps={{ 'data-testid': 1 }}
        />
        </div>
        </CarouselItem>
      );}
      )}
      </Carousel>
      </div>
      </div>

        <div className={`d-lg-none container-fluid ${style.modalContainer}`}>
        {wardData.map( (ward) =>
        {
          const [show, setShow] = useState(false);
          const handleClose = () => setShow(false);
          const handleShow = () => setShow(true);
          return(
            <>
            <Button className={`${style.modalButton}`} onClick={handleShow}>{ward[0][1]}</Button>
            <Modal className={`${style.modal}`}  show={show} onHide={handleClose}>
            <Modal.Header >
            <Modal.Title>{ward[0][1]}</Modal.Title>
            <button type="button" className={`btn-danger close ${style.close}`} onClick={handleClose}>
            <span aria-hidden="true">x</span>
            </button>
            </Modal.Header>
            <Modal.Body>
            <Chart
        chartType="AreaChart"
        loader={<div>Loading Chart</div>}
        data={ward}
        options={{
          width:'100%',
          height:'100%', 
          title: {ward},
          hAxis: { title: 'Date' },
          vAxis: { minValue: 0 },
          colors:['purple'],
          chartArea: { width: '40%', height: '60%'},
        }}
        rootProps={{ 'data-testid': 1 }}
        />
        </Modal.Body>
        <Modal.Footer />
        
      </Modal>
    </>
          );
        }
        )}

        </div>

      </div>
    </Layout>
  );
}

export default Stats;
