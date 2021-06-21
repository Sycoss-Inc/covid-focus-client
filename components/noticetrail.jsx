import React from "react";
import { Carousel, CarouselItem } from "react-bootstrap";
import styles from "../styles/Notice.module.css";

export default function Noticetrail({ notices }) {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 col-md-10 offset-md-1">
          <Carousel
            className={`${styles.carousel}`}
            extLabel=""
            prevLabel=""
            nextLabel=""
          >
            {notices.map((entry, index) => (
              <CarouselItem key={index}>
                <div
                  className={styles.item}
                  key={index}
                  style={{
                    width: "80%",
                    margin: "1rem auto",
                    marginBottom: "3rem",
                  }}
                >
                  <div className={`class`} key={index}>
                    <div>
                      <h3 className={styles.ariyipp}>അറിയിപ്പ്</h3>
                      <strong>{entry["title"]}</strong>
                      <p>{entry["description"]}</p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
}
