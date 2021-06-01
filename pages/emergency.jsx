import Head from "next/head";
import styles from "../styles/contacts.module.css";
import Layout from "../components/Layout";
import { FaPhoneAlt } from "react-icons/fa";

// function

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

        {/* <Header title="Dashboard"/> */}

        <main className={styles.contactpage}>
          {/* <div className={styles.headlinks}>
            <a href="#section 1">വേലൂർ കോവിഡ് കണ്ട്രോൾ റൂം</a>

            <a href="#section 2">കോവിഡ് കണ്ട്രോൾ റൂം - തൃശ്ശൂർ</a>

            <a href="#section 3">ആശുപത്രികൾ </a>

            <a href="#section 4">ടാക്സി</a>
          </div> */}
          {/* <FaPhoneAlt />
          <span>PRESS TO CALL </span> */}
          <h3>EMERGENCY</h3>
          <h5 className={styles.ambulance}>
            ആംബുലൻസ് ലഭിക്കാനും ഈ നമ്പറുകളിലാണ് ബന്ധപ്പെടേണ്ടത്
          </h5>
          <div className={styles.controlroom}>
            <div id="section 1" className={styles.ctrlroom1}>
              <h6>വേലൂർ കോവിഡ് കണ്ട്രോൾ റൂം</h6>
              <div className={styles.contactdetails}>
                <div className={styles.contactcardA}>
                  <a href="tel:04885285431"></a>
                  <p>04885285431</p>
                </div>
                <div className={styles.contactcardB}>
                  <a href="tel:9446854633"></a>
                  <p>9446854633</p>
                </div>
                <div className={styles.contactcardA}>
                  <a href="tel:9656821702"></a>
                  <p>9656821702</p>
                </div>
                <div className={styles.contactcardB}>
                  <a href="tel:9567042118"></a>
                  <p>9567042118</p>
                </div>
              </div>
            </div>
            <div className={styles.vr}></div>
            <div id="section 2" className={styles.ctrlroom2}>
              <h6>കോവിഡ് കണ്ട്രോൾ റൂം - തൃശ്ശൂർ</h6>
              <div className={styles.contactdetails}>
                <div className={styles.contactcardA}>
                  <a href="tel:9400066921"></a>
                  <p>9400066921</p>
                </div>

                <div className={styles.contactcardB}>
                  <a href="tel:9400066922"></a>
                  <p>9400066922</p>
                </div>

                <div className={styles.contactcardA}>
                  <a href="tel:9400066923"></a>
                  <p>9400066923</p>
                </div>
              </div>
            </div>
          </div>

          <div id="section 3" className={styles.contactsection}>
            <h1>ആശുപത്രികൾ </h1>
            <br></br>
            <div className={styles.contactdetails}>
              <div className={styles.contactcardA}>
                <h5>മെഡിക്കൽ കോളേജ് തൃശ്ശൂർ</h5>
                <a href="tel:04872200310"></a>
                <p>04872200310</p>
              </div>

              <div className={styles.contactcardB}>
                <h5>ജില്ലാ ആശുപത്രി തൃശ്ശൂർ</h5>
                <a href="tel:04872427383"></a>
                <p>04872427383</p>
              </div>

              <div className={styles.contactcardA}>
                <h5>വെസ്റ്റ് ഫോർട്ട് ഹോസ്പിറ്റൽ</h5>
                <a href="tel:04872382130"></a>
                <p>04872382130</p>
              </div>

              <div className={styles.contactcardB}>
                <h5>വെസ്റ്റ് ഫോർട്ട് ഹൈ ടെക്</h5>
                <a href="tel:04872388999"></a>
                <p>04872388999</p>
              </div>

              <div className={styles.contactcardA}>
                <h5>ജൂബിലി മിഷൻ</h5>
                <a href="tel:048724332200"></a>
                <p>048724332200</p>
              </div>

              <div className={styles.contactcardB}>
                <h5>അശ്വിനി ഹോസ്പിറ്റൽ</h5>
                <a href="tel:04876612346"></a>
                <p>04876612346</p>
              </div>

              <div className={styles.contactcardA}>
                <h5>ദയ ഹോസ്പിറ്റൽ</h5>
                <a href="tel:04872475100"></a>
                <p>04872475100</p>
              </div>

              <div className={styles.contactcardB}>
                <h5>എലൈറ്റ് ഹോസ്പിറ്റൽ</h5>
                <a href="tel:04872436100"></a>
                <p>04872436100</p>
              </div>

              <div className={styles.contactcardA}>
                <h5>കോപ്പറേറ്റീവ് ഹോസ്പിറ്റൽ തൃശൂർ</h5>
                <a href="tel:04872335550"></a>
                <p>04872335550</p>
              </div>

              <div className={styles.contactcardB}>
                <h5>മെട്രോ പോളിറ്റൻ ഹോസ്പിറ്റൽ</h5>
                <a href="tel:04872425142"></a>
                <p>04872425142</p>
              </div>

              <div className={styles.contactcardA}>
                <h5>മദർ ഹോസ്പിറ്റൽ</h5>
                <a href="tel:04872434100"></a>
                <p>04872434100</p>
              </div>

              <div className={styles.contactcardB}>
                <h5>അമല മെഡിക്കൽ കോളേജ്</h5>
                <a href="tel:04872304000"></a>
                <p>04872304000</p>
              </div>

              <div className={styles.contactcardA}>
                <h5>റോയൽ കുന്നംകുളം</h5>
                <a href="tel:04885222633"></a>
                <p>04885222633</p>
              </div>

              <div className={styles.contactcardB}>
                <h5>യൂണിറ്റി കുന്നംകുളം</h5>
                <a href="tel:04885222811"></a>
                <p>04885222811</p>
              </div>

              <div className={styles.contactcardA}>
                <h5>സെന്റ് ജോസഫ് ചൂണ്ടൽ</h5>
                <a href="tel:04885236230"></a>
                <p>04885236230</p>
              </div>

              <div className={styles.contactcardB}>
                <h5>നൈൽ ഹോസ്പിറ്റൽ കൈപ്പറമ്പ്</h5>
                <a href="tel:04873014700"></a>
                <p>04873014700</p>
              </div>
            </div>
          </div>

          <div id="section 4" className={styles.contactsection}>
            <h1>ടാക്സി</h1>
            <br></br>
            <div className={styles.contactdetails}>
              <div className={styles.contactcardA}>
                <a href="tel:9946791100"></a>
                <p>ഡെയ്സൺ -9946791100</p>
                <p>24x7 Service</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
}
