import Head from "next/head";
import styles from "../styles/contacts.module.css";
import Layout from "../components/Layout";
import { FaPhoneAlt } from "react-icons/fa";
import Link from "next/link";

// function
const hospitalContacts = [
  { name: "മെഡിക്കൽ കോളേജ് തൃശ്ശൂർ", phone: "04872427383" },
  { name: "ജില്ലാ ആശുപത്രി തൃശ്ശൂർ", phone: "04872382130" },
  { name: "വെസ്റ്റ് ഫോർട്ട് ഹോസ്പിറ്റൽ", phone: "04872200310" },
  { name: "വെസ്റ്റ് ഫോർട്ട് ഹൈ ടെക്", phone: "04872388999" },
  { name: "ജൂബിലി മിഷൻ", phone: "048724332200" },
  { name: "അശ്വിനി ഹോസ്പിറ്റൽ", phone: "04876612346" },
  { name: "ദയ ഹോസ്പിറ്റൽ", phone: "04872475100" },
  { name: "എലൈറ്റ് ഹോസ്പിറ്റൽ", phone: "04872436100" },
];

const hos = [
  { name: "കോപ്പറേറ്റീവ് ഹോസ്പിറ്റൽ തൃശൂർ", phone: "04872335550" },
  { name: "മെട്രോ പോളിറ്റൻ ഹോസ്പിറ്റൽ", phone: "04872425142" },
  { name: "മദർ ഹോസ്പിറ്റൽ", phone: "04872434100" },
  { name: "അമല മെഡിക്കൽ കോളേജ്", phone: "04872304000" },
  { name: "റോയൽ കുന്നംകുളം", phone: "04885222633" },
  { name: "യൂണിറ്റി കുന്നംകുളം", phone: "04885222811" },
  { name: "സെന്റ് ജോസഫ് ചൂണ്ടൽ", phone: "04885236230" },
  { name: "നൈൽ ഹോസ്പിറ്റൽ കൈപ്പറമ്പ്", phone: "04873014700" },
];

function Hospitals(props) {
  return props.hospitals.map((hospital, index) => {
    return (
      <div className={styles.contactcardA} key={index}>
        <h6 className={styles.textcolor}>{hospital.name}</h6>
        <a
          href={`tel:${hospital.phone}`}
          className="text-decoration-none text-light fs-4"
        >
          <div className="m-3 fs-5">
            <FaPhoneAlt className="m-1" />
            {hospital.phone}
          </div>
        </a>
      </div>
    );
  });
}

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

          <h3 className={styles.heading}>ആശുപത്രികൾ </h3>
          <div id="section 3" className={styles.controlroom}>
            <div id="section 1" className={styles.ctrlroom1}>
              <div className={styles.contactdetails}>
                <Hospitals hospitals={hospitalContacts} />
              </div>
            </div>
            <div id="section 1" className={styles.ctrlroom2}>
              <div className={styles.contactdetails}>
                <Hospitals hospitals={hos} />
              </div>
            </div>
          </div>

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
