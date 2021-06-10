import React from "react";
import styles from "../styles/Notice.module.css";

function Slides(notices) {
  return Object.entries(notices).map((entry) =>
    Object.entries(entry[1]).map((entry, index) => (
      <div
        className={`carousel-item ${styles.item} ${
          index === 0 ? "active" : ""
        }`}
        key={entry[1].id}
      >
        <div className={`${styles.noticetext}`}>
          <h3>അറിയിപ്പ്</h3>
          <p>{entry[1].name}</p>
        </div>
      </div>
    ))
  );
}

export default function Notice({ notices }) {
  return (
    <div
      id="carouselExampleCaptions"
      className={`carousel slide d-flex justify-content-center`}
      data-bs-ride="carousel"
    >
      <div className={`carousel-indicators ${styles.indicators}`}>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active rounded-circle"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className={`carousel-inner ${styles.inner}`}>
        <button
          className={`carousel-control-prev ${styles.prevbutton}`}
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className={`carousel-control-next ${styles.nextbutton}`}
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
        {<Slides notices={notices} />}
      </div>
    </div>
  );
}
