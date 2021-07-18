import React from "react";

import styles from "../styles/herosection.module.css";
import { FiChevronDown } from "react-icons/fi";
export default function HeroSection() {
  return (
    <div className="container-fluid">
      <div className={`row  ${styles.hero}`}>
        <div className={`col-12 col-lg-8 ${styles.heroTitleSection}`}>
          <div>
            <h1>COVID FOCUS</h1>
            <h2>
              വേലൂർ ഗ്രാമപഞ്ചായത് <br />
              കോവിഡ് ഡാഷ്ബോർഡ്
            </h2>
          </div>
          <div className={styles.more}>
            <a href="#rates">
              <p>View Todays Cases</p>
              <FiChevronDown size={30} />
            </a>
          </div>
        </div>
        <div className={`col-4 d-none d-lg-block ${styles.image}`}>
          <div className="row">
            <img src="/Fighting against Coronavirus-amico.png" />
          </div>
        </div>
      </div>
    </div>
  );
}
