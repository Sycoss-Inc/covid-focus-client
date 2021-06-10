import React from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import style from "../styles/stats.module.css";
import PieChart from "../components/Statistics";
import {
  dates,
  wards,
  wardWiseCases,
  activeData,
  positivityRate,
  positiveData,
  negativeData,
} from "../components/Data";
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
        <div className={`col-11 col-sm-10 col-md-8 col-lg-7 ${style.pie}`}>
          <PieChart />
        </div>
        <div className="row justify-content-evenly mx-1 align-items-center">
          {[
            { label: "Total Active Cases", data: activeData },
            { label: "Positivity Rate", data: positivityRate },
            { label: "Total Positive Cases", data: positiveData },
            { label: "Total Negetive Cases", data: negativeData },
          ].map((data, index) => {
            return (
              <div className={`col-12 col-md-6 text-center`} key={index}>
                <h3>{data.label}</h3>
                <div className={`${style.chart}`}>
                  <Line
                    options={{
                      scales: {
                        y: {
                          ticks: {
                            color: "#d2d2d2",
                          },
                          title: {
                            color: "#9d9d9d",
                            display: true,
                            text: data.label,
                          },
                          grid: {
                            color: "#404040",
                            borderColor: "grey",
                          },
                        },
                        x: {
                          ticks: {
                            color: "#d2d2d2",
                          },
                          title: {
                            color: "#9d9d9d",
                            display: true,
                            text: "Date",
                          },
                          grid: {
                            color: "#404040",
                            borderColor: "grey",
                          },
                        },
                      },
                    }}
                    data={{
                      labels: dates,
                      datasets: [
                        {
                          lineTension: 0.35,
                          label: data.label,
                          fill: "start",
                          data: data.data,
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
              </div>
            );
          })}
        </div>
        <div
          className="container-fluid"
          style={{ backgroundColor: "#071127", padding: "1rem" }}
        >
          <h3 className="text-center m-1 text-light">
            വാർഡ് തിരിച്ചുള്ള കോവിഡ് പോസിറ്റിവിറ്റി ട്രെൻഡ്{" "}
          </h3>
          <div className={`container col-12 col-xs-12 ${style.carousel}`}>
            <Carousel
              className={`${style.carousel}`}
              nextLabel="false"
              prevLabel="false"
            >
              {wardWiseCases.map((ward, index) => {
                return (
                  <CarouselItem key={index}>
                    <div
                      key={index}
                      style={{
                        width: "90%",
                        margin: "0.6rem auto",
                        marginBottom: "2rem",
                      }}
                    >
                      <Line
                        options={{
                          scales: {
                            y: {
                              ticks: { color: "black" },
                            },
                            x: {
                              ticks: {
                                color: "black",
                              },
                            },
                          },
                          plugins: {
                            legend: {
                              labels: {
                                font: {
                                  weight: "bold",
                                  size: 14,
                                },
                                color: "#000000",
                              },
                            },
                          },
                        }}
                        data={{
                          labels: dates,
                          datasets: [
                            {
                              label: `വാർഡ് ${index + 1}- ${ward.wardName}`,
                              fill: "start",
                              data: ward.cases,
                              color: "#1b1b1b",
                              lineTension: 0.35,
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
