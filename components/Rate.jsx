import React, { useEffect, useState } from "react";
import styles from "../styles/rates.module.css";
import AnimatedNumber from "react-animated-numbers";

export default function Rate({rates}) {
  const [todayCases, setTodayCases] = useState(0);
  const [curedCases, setCuredCases] = useState(0);
  const [deathCases, setDeathCases] = useState(0);
  const [liveCases, setLiveCases] = useState(0);

  function handleIntersection(entries) {
    const pointIsVisible = entries[0].isIntersecting;
    if (pointIsVisible) {
      setLiveCases(rates["total_cases"]);
      setTodayCases(rates["positive_rate"]);
      setCuredCases(rates["recovered"]);
      setDeathCases(rates["deaths"]);
    } else {
      setLiveCases(0);
      setTodayCases(0);
      setCuredCases(0);
      setDeathCases(0);
    }
  }

  useEffect(() => {
    const spotCount = document.querySelector("#spotCount");
    const options = {
      root: null,
      rootMargin: "80%",
      threshhold: 0,
    };
    const observer = new IntersectionObserver(handleIntersection, options);
    observer.observe(spotCount);
  }, []);

  return (
    <>
      <div className="container-fluid">
        <div className={`row  ${styles.rates}`}>
          <div className={`col-12 col-md-6  ${styles.vector}`}></div>
          <div className="col-12 col-md-6 ">
            <div className="row ">
              <div className={`col-12 col-md-4 offset-md-1 ${styles.rateCardA}`}>
                <div className="row">
                  <div className="col-12 d-flex justify-content-center  ">
                    <AnimatedNumber
                      fontStyle={{ fontFamily: "Nunito", fontSize: "4rem",color:"rgb(223, 134, 19)" }}
                      animateToNumber={liveCases}
                      config={{ tension: 89, friction: 40 }}
                      animationType={"calm"}
                    />
                  </div>

                  <div className="d-flex justify-content-center text-align-center"> ആകെ കോവിഡ് ബാധിതർ</div>
                </div>
              </div>
              <div className={`col-12 col-md-4 offset-md-1 ${styles.rateCardB}`}>
                <div className="row">
                  <div className="col-12 d-flex justify-content-center ">
                    <AnimatedNumber
                      fontStyle={{ fontFamily: "Nunito", fontSize: "4.5rem",color:"rgb(36, 75, 134)" }}
                      animateToNumber={todayCases}
                      config={{ tension: 89, friction: 40 }}
                      animationType={"calm"}
                    />
                  </div>
                  <div className="d-flex justify-content-center"> ഇന്ന് രോഗബാധിതർ </div>
                </div>
              </div>
            </div>
            <div className="row mt-3">
              <div className={`col-12 col-md-4 offset-md-1 ${styles.rateCardC}`}>
                <div className="row">
                  <div className="col-12 d-flex justify-content-center ">
                    <AnimatedNumber
                      fontStyle={{ fontFamily: "Nunito", fontSize: "4.5rem",color:"green" }}
                      animateToNumber={curedCases}
                      config={{ tension: 89, friction: 40 }}
                      animationType={"calm"}
                    />
                  </div>
                  <div className="d-flex justify-content-center"> ഇന്ന് രോഗമുക്തി</div>
                </div>
              </div>
              <div className={`col-12 col-md-4 offset-md-1  ${styles.rateCardD}`}>
                <div className="row">
                  <div className="col-12 d-flex justify-content-center ">
                    <AnimatedNumber
                      fontStyle={{ fontFamily: "Nunito", fontSize: "4.5rem",color:"red" }}
                      animateToNumber={deathCases}
                      config={{ tension: 89, friction: 40 }}
                      animationType={"calm"}
                    />
                  </div>
                  <div className="d-flex justify-content-center">മരണം</div>
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
      </div>
      <div id="spotCount"></div>
    </>
  );
}
