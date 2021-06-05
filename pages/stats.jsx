import React from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import style from "../styles/stats.module.css";
import PieChart from "../components/Statistics";
import { Chart } from "react-google-charts";
import {
  dates,
  wardWiseCases,
  activeData,
  positivityRate,
  positiveData,
  negativeData,
} from "../components/Data";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import CarouselItem from "react-bootstrap/CarouselItem";
import { Line } from "react-chartjs-2";

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
      <PieChart />
        <div className="row justify-content-center">
          {[1, 2, 3, 4].map(() => {
            return (
              <div className={`col-11 col-md-5 ${style.chart}`}>
                <Line
                  data={{
                    labels: dates,
                    datasets: [
                      {
                        label: "ward.wardName",
                        fill: "start",
                        data: wardWiseCases[0].cases,
                        color: "#1b1b1b",
                        backgroundColor: "rgba(275, 275, 275, 0.6)",
                        borderColor: [
                          "rgba(255, 99, 132, 1)",
                          "rgba(54, 162, 235, 1)",
                          "rgba(255, 206, 86, 1)",
                          "rgba(75, 192, 192, 1)",
                          "rgba(153, 102, 255, 1)",
                          "rgba(255, 159, 64, 1)",
                        ],
                        borderWidth: 2,
                      },
                    ],
                  }}
                />
              </div>
            );
          })}
          {/* <div className={`col-12 col-md-6 ${style.chart}`}>
            <Card>
              <Card.Body>
                <Chart
                  // width={'800px'}
                  // height={'250px'}
                  className={`${style.card}`}
                  chartType="LineChart"
                  loader={<div>Loading Chart</div>}
                  data={activeData}
                  options={{
                    title: "Total Active Cases",
                    chartArea: { width: "50%", height: "70%" },
                  }}
                  rootProps={{ "data-testid": "1" }}
                />
              </Card.Body>
            </Card>
          </div>
          <div className={`col-12 col-md-6 ${style.chart}`}>
            <Card>
              <Card.Body>
                <Chart
                  // width={'800px'}
                  // height={'250px'}
                  className={`${style.card}`}
                  chartType="AreaChart"
                  loader={<div>Loading Chart</div>}
                  data={positiveData}
                  options={{
                    title: "Covid Positive",
                    hAxis: { title: "Date" },
                    vAxis: { minValue: 0 },
                    colors: ["red"],
                    // For the legend to fit, we make the chart area smaller
                    chartArea: { width: "50%", height: "70%" },
                    // lineWidth: 25
                  }}
                  rootProps={{ "data-testid": "1" }}
                />
              </Card.Body>
            </Card>
          </div>
          <div className={`col-12 col-md-6 ${style.chart}`}>
            <Card>
              <Card.Body>
                <Chart
                  // width={'800px'}
                  // height={'250px'}
                  className={`${style.card}`}
                  chartType="AreaChart"
                  loader={<div>Loading Chart</div>}
                  data={negativeData}
                  options={{
                    title: "Covid Negative",
                    hAxis: { title: "Date" },
                    vAxis: { minValue: 0 },
                    colors: ["green"],
                    chartArea: { width: "50%", height: "70%" },
                  }}
                  rootProps={{ "data-testid": "1" }}
                />
              </Card.Body>
            </Card>
          </div>
          <div className={`col-12 col-md-6 ${style.chart}`}>
            <Card>
              <Card.Body>
                <Chart
                  chartType="AreaChart"
                  loader={<div>Loading Chart</div>}
                  data={positivityRate}
                  options={{
                    title: "Test Positivity Rate - Velur",
                    hAxis: { title: "Date" },
                    vAxis: { minValue: 0 },
                    chartArea: { width: "50%", height: "70%" },
                  }}
                  rootProps={{ "data-testid": "1" }}
                />
              </Card.Body>
            </Card>
          </div> */}
        </div>
        <div
          className="container-fluid"
          style={{ backgroundColor: "#071127", padding: "1rem" }}
        >
          <h3 className="text-center m-1 text-light">
            വാർഡ് തിരിച്ചുള്ള കോവിഡ് പോസിറ്റിവിറ്റി ട്രെൻഡ്{" "}
          </h3>
          <div className={`container ${style.carousel}`}>
            <Carousel
              className={`${style.car}`}
              nextLabel={false}
              prevLabel={false}
            >
              {wardWiseCases.map((ward, index) => {
                return (
                  <CarouselItem>
                    <div
                      style={{
                        width: "80%",
                        margin: "1rem auto",
                        marginBottom: "3rem",
                      }}
                    >
                      <Line
                        data={{
                          labels: dates,
                          datasets: [
                            {
                              label: `വാർഡ് ${index + 1}- ${ward.wardName}`,
                              fill: "start",
                              data: ward.cases,
                              color: "#1b1b1b",
                              backgroundColor: [
                                "rgba(265, 99, 132, 0.5)",
                                "rgba(64, 162, 235, 0.5)",
                                "rgba(265, 206, 86, 0.5)",
                                "rgba(85, 192, 192, 0.5)",
                                "rgba(163, 102, 255, 0.5)",
                                "rgba(265, 159, 64, 0.5)",
                              ],
                              borderColor: [
                                "rgba(255, 99, 132, 1)",
                                "rgba(54, 162, 235, 1)",
                                "rgba(255, 206, 86, 1)",
                                "rgba(75, 192, 192, 1)",
                                "rgba(153, 102, 255, 1)",
                                "rgba(255, 159, 64, 1)",
                              ],
                              borderWidth: 2,
                            },
                          ],
                        }}
                      />
                    </div>
                  </CarouselItem>
                );
              })}
            </Carousel>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Stats;
