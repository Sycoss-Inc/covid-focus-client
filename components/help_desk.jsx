import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import style from "../styles/helpdesk.module.css";

export default function HelpDesk() {
  return (
    <div className="text-center" id="help_desk">
      <h4 className={`${style.heading}`}>
        വേലൂർ ഗ്രാമ പഞ്ചായത്ത് ഹെല്പ് ഡെസ്ക്
      </h4>
      <div
        className={`${style.main} row align-items-center justify-content-center`}
      >
        <img
          className={`col-11 col-sm-7 col-md-5 col-lg-5`}
          src="/helpdesk.jpg"
          alt="help desk"
        />
        <section className={`${style.sectn} col-8 col-sm-5 col-md-6 col-lg-5`}>
          <section>
            <a href="tel:04885285431">
              <FaPhoneAlt className="m-2" />
              04885285431
            </a>
          </section>

          <section>
            {" "}
            <a href="tel:9446854633">
              <FaPhoneAlt className="m-2" />
              9446854633
            </a>
          </section>

          <section>
            <a href="tel:9656821702">
              <FaPhoneAlt className="m-2" />
              9656821702
            </a>
          </section>
          <section>
            <a href="tel:9567042118">
              <FaPhoneAlt className="m-2" />
              9567042118
            </a>
          </section>
        </section>
      </div>
    </div>
  );
}
