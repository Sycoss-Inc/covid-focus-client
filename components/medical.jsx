import Head from "next/head";
import styles from "../styles/contacts.module.css";
import Layout from "./Layout";
import { FaPhoneAlt } from "react-icons/fa";
import HospitalList from "./hospitals";

export default function Medical() {
  return (
    <div className={styles.container} id="medical">
      <main className={styles.contactpage}>
        <h4 className={styles.ambulance}>
          ആംബുലൻസ് ലഭിക്കാനും ഈ നമ്പറുകളിലാണ് ബന്ധപ്പെടേണ്ടത്
        </h4>
        <div className={styles.controlroom}>
          <div id="section 1" className={styles.ctrlroom1}>
            <h6 className="text-warning fw-bold">വേലൂർ കോവിഡ് കണ്ട്രോൾ റൂം</h6>
            <div className={styles.contactdetails}>
              <div className={styles.contactcardB}>
                <a
                  href={`tel:04885285431`}
                  className="text-decoration-none text-light"
                >
                  <div className="m-3">
                    <FaPhoneAlt className="m-1" />
                    9946791100
                  </div>
                </a>
              </div>
              <div className={styles.contactcardB}>
                <a
                  href={`tel:9446854633`}
                  className="text-decoration-none text-light"
                >
                  <div className="m-3">
                    <FaPhoneAlt className="m-1" />
                    9446854633
                  </div>
                </a>
              </div>
              <div className={styles.contactcardB}>
                <a
                  href={`tel:9656821702`}
                  className="text-decoration-none text-light"
                >
                  <div className="m-3">
                    <FaPhoneAlt className="m-1" />
                    9656821702
                  </div>
                </a>
              </div>
              <div className={styles.contactcardB}>
                <a
                  href={`tel:9567042118`}
                  className="text-decoration-none text-light"
                >
                  <div className="m-3">
                    <FaPhoneAlt className="m-1" />
                    9567042118
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div id="section 2" className={styles.ctrlroom2}>
            <h6 className="text-warning fw-bold">
              കോവിഡ് കണ്ട്രോൾ റൂം - തൃശ്ശൂർ
            </h6>
            <div className={styles.contactdetails}>
              <div className={styles.contactcardB}>
                <a
                  href={`tel:9400066921`}
                  className="text-decoration-none text-light"
                >
                  <div className="m-3">
                    <FaPhoneAlt className="m-1" />
                    9400066921
                  </div>
                </a>
              </div>

              <div className={styles.contactcardB}>
                <a
                  href={`tel:9400066922`}
                  className="text-decoration-none text-light"
                >
                  <div className="m-3">
                    <FaPhoneAlt className="m-1" />
                    9400066922
                  </div>
                </a>
              </div>

              <div className={styles.contactcardB}>
                <a
                  href={`tel:9400066923`}
                  className="text-decoration-none text-light"
                >
                  <div className="m-3">
                    <FaPhoneAlt className="m-1" />
                    9400066923
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        <HospitalList />
        <h3 className={styles.heading}>ടാക്സി</h3>
        <div id="section 4" className={styles.controlroom}>
          <div className={styles.contactdetails}>
            <div className={styles.contactcardA}>
              <a href="tel:9946791100"></a>
              <h5>ഡെയ്സൺ</h5>
              <a
                href={`tel:9946791100`}
                className="text-decoration-none text-light"
              >
                <div className="m-3 fs-5">
                  <FaPhoneAlt className="m-1" />
                  9946791100
                </div>
              </a>
              <h5 className="text-danger">24x7 Service</h5>
            </div>
          </div>
        </div>

        <h3 className={styles.heading}>മെഡിക്കൽ ഷോപ്പുകൾ</h3>
        <div className={styles.controlroom}>
          <div className={styles.contactdetails}>
            <div className={styles.contactcardA}>
              <h6>അനുഗ്രഹ മെഡിക്കൽസ് - വേലൂർ പോസ്റ്റ് ഓഫിസ്</h6>
              <a
                href={`tel:9447403903`}
                className="text-decoration-none text-light"
              >
                <div className="m-3">
                  <FaPhoneAlt className="m-1" />
                  9447403903
                </div>
              </a>
            </div>
            <div className={styles.contactcardB}>
              <h6>തോംസൺ മെഡിക്കൽസ് - വേലൂർ പോസ്റ്റ് ഓഫിസ്</h6>
              <a
                href={`tel:9847546703`}
                className="text-decoration-none text-light"
              >
                <div className="m-3">
                  <FaPhoneAlt className="m-1" />
                  9847546703
                </div>
              </a>
            </div>
          </div>
        </div>

        <h3 className={styles.heading}>ലബോറട്ടറികൾ</h3>
        <div className={styles.controlroom}>
          <div className={`row  ${styles.labs}`}>
            <div className={`col-6 ${styles.ctrlroom1}`}>
              <div className={` ${styles.contactcardA}`}>
                <div className={styles.contactspec}>
                  <h5>നിസ്ബ (NISBA)</h5>
                  <h6>പന്നിത്തടം</h6>
                </div>
                <a
                  href={`tel:8943632097`}
                  className="text-decoration-none text-light"
                >
                  <div className="m-3">
                    <FaPhoneAlt className="m-1" />
                    8943632097
                  </div>
                </a>
                {/* <a href="tel:8943632097"></a> */}
                {/* <p>8943632097</p> */}
                <p>RTPCR, ആന്റിജൻ ടെസ്റ്റ് - ഹോം കളക്ഷൻ</p>
              </div>

              <div className={` ${styles.contactcardB}`}>
                <div className={styles.contactspec}>
                  <h5>MAC Covid Collection Centre</h5>
                  <h6>കുന്നംകുളം</h6>
                </div>
                <a
                  href={`tel:9633937557`}
                  className="text-decoration-none text-light"
                >
                  <div className="m-3">
                    <FaPhoneAlt className="m-1" />
                    9633937557
                  </div>
                </a>
                {/* <a href="tel:9633937557"></a> */}
                {/* <p>9633937557</p> */}
                <p>ആന്റിജൻ ടെസ്റ്റ് - ഹോം കളക്ഷൻ</p>
              </div>
            </div>
            <div className={`col-6 ${styles.ctrlroom2}`}>
              <div className={` ${styles.contactcardA}`}>
                <div className={styles.contactspec}>
                  <h5>സുധർമ്മ ലാബ്</h5>
                  <h6>എരുമപ്പെട്ടി</h6>
                </div>
                <a
                  href={`tel:9061631111`}
                  className="text-decoration-none text-light"
                >
                  <div className="m-3">
                    <FaPhoneAlt className="m-1" />
                    9061631111
                  </div>
                </a>
                {/* <a href="tel:9061631111"></a> */}
                {/* <p>9061631111</p> */}
              </div>

              <div className={` ${styles.contactcardA}`}>
                <div className={styles.contactspec}>
                  <h5>സേവന ലാബ്</h5>
                  <h6>മറ്റം, പേരാമംഗലം</h6>
                </div>
                <a
                  href={`tel:9847042905`}
                  className="text-decoration-none text-light"
                >
                  <div className="m-3">
                    <FaPhoneAlt className="m-1" />
                    9847042905
                  </div>
                </a>
                {/* <a href="tel:9847042905"></a> */}
                {/* <p>9847042905</p> */}
                <p>RTPCR, ആന്റിജൻ ടെസ്റ്റ് - ഹോം കളക്ഷൻ </p>
              </div>
            </div>
          </div>
        </div>

        <h3 className={styles.heading}>വേലൂർ കുടുംബാരോഗ്യകേന്ദ്രം</h3>
        <div className={styles.controlroom}>
          <div className={`${styles.ctrlroom1} ${styles.health}`}>
            <h6 className="text-warning">ജൂനിയർ പബ്ലിക്ക് ഹെൽത്ത് നഴ്സ്</h6>
            <div className={styles.contactcardA}>
              <h5>FWC കിരാലൂർ</h5>
              <p>
                സഫിയ കെ{" "}
                <a href="tel:9495067778">
                  <FaPhoneAlt className="m-1" /> 9495067778
                </a>{" "}
              </p>
            </div>
            <div className={styles.contactcardB}>
              <h5>FWC കുറുമാൽ</h5>
              <p>
                വീണ ഇ ആർ{" "}
                <a href="tel:9744199898">
                  {" "}
                  <FaPhoneAlt className="m-1" />
                  9744199898{" "}
                </a>
              </p>
            </div>
            <div className={styles.contactcardA}>
              <h5>FWC വേലൂർ</h5>
              <p>
                ഗീത{" "}
                <a href="tel:9947865398">
                  <FaPhoneAlt className="m-1" />
                  9947865398
                </a>{" "}
              </p>
            </div>
          </div>

          <div className={`${styles.ctrlroom2} ${styles.health}`}>
            <h6 className="text-warning">ജൂനിയർ ഹെൽത്ത് ഇൻസ്‌പെക്ടർ</h6>
            <div className={styles.contactcardA}>
              <h5>വാർഡ് 1 - 6 </h5>
              <p>
                രാജേഷ്{" "}
                <a href="tel:9995613735">
                  <FaPhoneAlt className="m-1" />
                  9995613735
                </a>{" "}
              </p>
            </div>
            <div className={styles.contactcardB}>
              <h5>വാർഡ് 7 - 13</h5>
              <p>
                ദീപകുമാർ{" "}
                <a href="tel:9567518155">
                  <FaPhoneAlt className="m-1" /> 9567518155
                </a>
              </p>
            </div>
            <div className={styles.contactcardA}>
              <h5>വാർഡ് 14 - 17</h5>
              <a href="tel:7592016885"></a>
              <p>
                സ്മിത ശങ്കർ മഠത്തിൽ{" "}
                <a href="tel:7592016885">
                  <FaPhoneAlt className="m-1" />
                  7592016885
                </a>{" "}
              </p>
            </div>
          </div>
        </div>

        <h3 className={styles.heading}>ടെലി കൗൺസിലിംഗ്</h3>
        <div
          className={`d-flex flex-column ${styles.controlroom} ${styles.tele}`}
        >
          <div className={styles.ctrlroom2}>
            <h4 className={`${styles.heading} text-center text-warning`}>
              ദിശ
            </h4>
            <p className="text-center text-light">
              ആരോഗ്യവകുപ്പിന്റെ 24 മണിക്കൂറും പ്രവർത്തിക്കുന്ന സംശയനിവാരണ സഹായക
              പദ്ധതി{" "}
            </p>
            <div className={styles.contactcardA}>
              <h5>104</h5>
              <h5>1056</h5>
              <a
                href={`tel:904712552056`}
                className="text-decoration-none text-light"
              >
                <div className="m-3">
                  <FaPhoneAlt className="m-1" />
                  04712552056
                </div>
              </a>
              {/* <a href="tel:04712552056"></a>
              <p>04712552056</p> */}
            </div>
          </div>

          <div className={styles.ctrlroom2}>
            <h4 className={`text-center text-warning fs-5`}>മനഃശാസ്ത്രജ്ഞർ</h4>
            <div className={styles.contactcardA}>
              <h5>Huda N</h5>
              <h6>Consultant Psychologist</h6>
              <a
                href={`tel:8086932304`}
                className="text-decoration-none text-light"
              >
                <div className="m-3">
                  <FaPhoneAlt className="m-1" />
                  8086932304
                </div>
              </a>
              {/* <a href="tel:8086932304"> </a> */}
              {/* <p>8086932304 തിങ്കൾ , ബുധൻ രാവിലെ 10 മുതൽ വൈകീട്ട് 4 വരെ</p> */}
              <p>തിങ്കൾ , ബുധൻ രാവിലെ 10 മുതൽ വൈകീട്ട് 4 വരെ</p>
            </div>
          </div>
        </div>
      </main>
    </div>
    // </Layout>
  );
}
