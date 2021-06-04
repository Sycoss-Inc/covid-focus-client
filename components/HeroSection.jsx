import React from "react";

import styles from "../styles/herosection.module.css";

export default function HeroSection() {
  return (
    <div className="container-fluid">
      <div className={`row  ${styles.hero}`}>
        <div className={`col-12 col-lg-8 ${styles.heroTitleSection}`}>
          <div>
            <h1>COVID FOCUS</h1>
            <h4>
              വേലൂർ ഗ്രാമപഞ്ചായത് <br />
              കോവിഡ് ഡാഷ്ബോർഡ്
            </h4>
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
