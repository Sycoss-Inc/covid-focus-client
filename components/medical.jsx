import Head from "next/head";
import styles from "../styles/contacts.module.css";
import Layout from "./Layout";
import { FaPhoneAlt } from "react-icons/fa";
import HospitalList from "./hospitals";

export default function Medical() {
  return (
    // <Layout title="Medical">
    <div className={styles.container}>
      {/* <Head>
          <title>Covid Focus | Other Medical contacts</title>
          <meta
            name="description"
            content="Designed and developed by GEC Thrissur"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head> */}

      {/* <Header title="Dashboard"/> */}

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
        <div className={styles.controlroom}>
          <div className="row">
            <div className={`col-6 ${styles.contactsection} `}>
              <h4 className="text-light">ടാക്സി</h4>
              <div className={styles.contactdetails}>
                <div className={styles.contactcardA}>
                  <a href="tel:9946791100"></a>
                  <p>ഡെയ്സൺ -9946791100</p>
                  <p>24x7 Service</p>
                </div>
              </div>
            </div>

            <div
              className={`col-6 ${styles.contactsection} ${styles.medicals}`}
            >
              <h4 className="text-light">മെഡിക്കൽ ഷോപ്പുകൾ </h4>

              <div className={styles.contactdetails}>
                <div className={styles.contactcardA}>
                  <h6>അനുഗ്രഹ മെഡിക്കൽസ് - വേലൂർ പോസ്റ്റ് ഓഫിസ്</h6>
                  <a href="tel:9447403903"></a>
                  <p>9447403903</p>
                </div>
                <div className={styles.contactcardB}>
                  <h6>തോംസൺ മെഡിക്കൽസ് - വേലൂർ പോസ്റ്റ് ഓഫിസ്</h6>
                  <a href="tel:9847546703"></a>
                  <p>9847546703</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h3>ലബോറട്ടറികൾ</h3>
        <div className={styles.contactsection}>
          <div className={`${styles.contactdetails}`}>
            <div className={styles.contactcardA}>
              <div className={styles.contactspec}>
                <h5>നിസ്ബ (NISBA)</h5>
                <h6>പന്നിത്തടം</h6>
              </div>
              <a href="tel:8943632097"></a>
              <p>8943632097</p>
              <p>RTPCR, ആന്റിജൻ ടെസ്റ്റ് - ഹോം കളക്ഷൻ</p>
            </div>

            <div className={styles.contactcardB}>
              <div className={styles.contactspec}>
                <h5>MAC Covid Collection Centre</h5>
                <h6>കുന്നംകുളം</h6>
              </div>
              <a href="tel:9633937557"></a>
              <p>9633937557</p>
              <p>ആന്റിജൻ ടെസ്റ്റ് - ഹോം കളക്ഷൻ</p>
            </div>

            <div className={styles.contactcardA}>
              <div className={styles.contactspec}>
                <h5>സുധർമ്മ ലാബ്</h5>
                <h6>എരുമപ്പെട്ടി</h6>
              </div>
              <a href="tel:9061631111"></a>
              <p>9061631111</p>
            </div>

            <div className={styles.contactcardB}>
              <div className={styles.contactspec}>
                <h5>സേവന ലാബ്</h5>
                <h6>മറ്റം, പേരാമംഗലം</h6>
              </div>
              <a href="tel:9847042905"></a>
              <p>9847042905</p>
              <p>RTPCR, ആന്റിജൻ ടെസ്റ്റ് - ഹോം കളക്ഷൻ </p>
            </div>
          </div>

          <div className={styles.contactsection}>
            <h1>വേലൂർ കുടുംബാരോഗ്യകേന്ദ്രം</h1>

            <div className={styles.contactdetails}>
              <h4>ജൂനിയർ പബ്ലിക്ക് ഹെൽത്ത് നഴ്സ്</h4>
              <div className={styles.contactcardA}>
                <h5>FWC കിരാലൂർ</h5>
                <a href="tel:9495067778"></a>
                <p>സഫിയ കെ - 9495067778</p>
              </div>
              <div className={styles.contactcardB}>
                <h5>FWC കുറുമാൽ</h5>
                <a href="tel:9744199898"></a>
                <p>വീണ ഇ ആർ - 9744199898</p>
              </div>
              <div className={styles.contactcardA}>
                <h5>FWC വേലൂർ</h5>
                <a href="tel:9947865398"></a>
                <p>ഗീത - 9947865398</p>
              </div>
            </div>

            <div className={styles.contactdetails}>
              <p> </p>
              <h4>ജൂനിയർ ഹെൽത്ത് ഇൻസ്‌പെക്ടർ</h4>
              <div className={styles.contactcardA}>
                <h5>വാർഡ് 1 - 6 </h5>
                <a href="tel:9995613735"></a>
                <p>രാജേഷ് - 9995613735</p>
              </div>
              <div className={styles.contactcardB}>
                <h5>വാർഡ് 7 - 13</h5>
                <a href="tel:9567518155"></a>
                <p>ദീപകുമാർ - 9567518155</p>
              </div>
              <div className={styles.contactcardA}>
                <h5>വാർഡ് 14 - 17</h5>
                <a href="tel:7592016885"></a>
                <p>സ്മിത ശങ്കർ മഠത്തിൽ - 7592016885</p>
              </div>
            </div>
          </div>

          <div className={styles.contactsection}>
            <h1>ടെലി കൗൺസിലിംഗ്</h1>

            <div className={styles.contactdetails}>
              <h4>ദിശ</h4>
              <p>
                ആരോഗ്യവകുപ്പിന്റെ 24 മണിക്കൂറും പ്രവർത്തിക്കുന്ന സംശയനിവാരണ
                സഹായക പദ്ധതി{" "}
              </p>
              <div className={styles.contactcardA}>
                <h5>104</h5>
                <h5>1056</h5>
                <a href="tel:04712552056"></a>
                <p>04712552056</p>
              </div>
            </div>

            <div className={styles.contactdetails}>
              <h4>മനഃശാസ്ത്രജ്ഞർ</h4>
              <div className={styles.contactcardA}>
                <h5>Huda N</h5>
                <h6>Consultant Psychologist</h6>
                <a href="tel:8086932304"> </a>
                <p>8086932304 തിങ്കൾ , ബുധൻ രാവിലെ 10 മുതൽ വൈകീട്ട് 4 വരെ</p>
              </div>
              <div className={styles.contactdetails}>
                <h4>ഗ്രാസ്‌വേ - ടെലി കൗൺസിലിംഗ്</h4>
                <div className={styles.contactcardA}>
                  <h5>Asya K R</h5>
                  <a href="tel:8078312836"></a>
                  <p>8078312836</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
    // </Layout>
  );
}
