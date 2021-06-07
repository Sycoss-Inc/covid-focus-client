import Head from "next/head";
import styles from "../styles/contacts.module.css";
import Layout from "../components/Layout";
import { FaPhoneAlt } from "react-icons/fa";
import Link from "next/link";
import HospitalList from "../components/hospitals";
import Slide from "react-reveal/Slide";

export default function Emergency() {
  return (
    <Layout title="Emergency">
      <div className={styles.container}>
        <Head>
          <title>Covid Focus | Emergency contacts</title>
          <meta
            name="description"
            content="Designed and developed by GEC Thrissur"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={styles.contactpage}>
          <Slide bottom>
            <h4 className={styles.ambulance}>
              ആംബുലൻസ് ലഭിക്കാനും ഈ നമ്പറുകളിലാണ് ബന്ധപ്പെടേണ്ടത്
            </h4>
            <div className={styles.controlroom}>
              <div id="section 1" className={styles.ctrlroom1}>
                <h6 className="text-warning fw-bold">
                  വേലൂർ കോവിഡ് കണ്ട്രോൾ റൂം
                </h6>
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
          </Slide>
          <Slide left>
            <HospitalList />
          </Slide>

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
        </main>
      </div>
    </Layout>
  );
}
