import Head from "next/head";
import styles from "../styles/contacts.module.css";
import Layout from "./Layout";
import { FaPhoneAlt } from "react-icons/fa";

const ashaWorkers = [];

export default function AashaWorkers() {
  return (
    // <Layout title="AashaWorkers">
    <div className={styles.container}>
      {/* <Head>
          <title>Covid Focus | Aasha Workers</title>
          <meta
            name="description"
            content="Designed and developed by GEC Thrissur"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head> */}

      {/* <Header title="Dashboard"/> */}

      <main className={styles.contactpage}>
        <h3 className={styles.heading}>ആശ വർക്കേഴ്സ്</h3>
        <div className={styles.controlroom}>
          <div className={styles.ctrlroom1}>
            <div className={styles.contactcardA}>
              <div className={styles.contactspec}>
                <h3>വാർഡ് 1</h3>
                <h3>പാത്രമംഗലം</h3>
              </div>
              <a href="tel:9605313635">
                <FaPhoneAlt /> <span>രുക്മണി - 9605313635</span>
              </a>{" "}
            </div>

            <div className={styles.contactcardB}>
              <div className={styles.contactspec}>
                <h3>വാർഡ് 2</h3>
                <h3>വെള്ളാറ്റഞ്ഞൂർ S</h3>
              </div>
              <a href="tel:9946765130">
                <FaPhoneAlt /> <span>ഷെൻസി - 9946765130</span>
              </a>{" "}
            </div>

            <div className={styles.contactcardA}>
              <div className={styles.contactspec}>
                <h3>വാർഡ് 3</h3>
                <h3>തയ്യൂർ </h3>
              </div>
              <a href="tel:9947636539">
                <FaPhoneAlt /> <span>ഗീത - 9947636539</span>
              </a>{" "}
            </div>

            <div className={styles.contactcardB}>
              <div className={styles.contactspec}>
                <h3>വാർഡ് 4</h3>
                <h3>പഴവൂർ</h3>
              </div>
              <a href="tel:9526993294">
                <FaPhoneAlt /> <span>വത്സല - 9526993294</span>
              </a>{" "}
            </div>

            <div className={styles.contactcardA}>
              <div className={styles.contactspec}>
                <h3>വാർഡ് 5</h3>
                <h3>കോടശ്ശേരി</h3>
              </div>
              <a href="tel:9961943194">
                <FaPhoneAlt /> <span>സുഷിത - 9961943194</span>
              </a>{" "}
            </div>

            <div className={styles.contactcardB}>
              <div className={styles.contactspec}>
                <h3>വാർഡ് 6</h3>
                <h3>വെങ്ങിലശ്ശേരി West</h3>
              </div>
              <a href="tel:8078211968">
                <FaPhoneAlt /> <span>അരൂജ- 8078211968</span>
              </a>{" "}
            </div>

            <div className={styles.contactcardA}>
              <div className={styles.contactspec}>
                <h3>വാർഡ് 7</h3>
                <h3>അർണോസ് നഗർ</h3>
              </div>
              <a href="tel:9495576615">
                <FaPhoneAlt /> <span>സലോമി - 9495576615</span>
              </a>{" "}
            </div>

            <div className={styles.contactcardB}>
              <div className={styles.contactspec}>
                <h3>വാർഡ് 8</h3>
                <h3>കുട്ടംകുളം</h3>
              </div>
              <a href="tel:9947692982">
                <FaPhoneAlt /> <span>ലാലി - 9947692982</span>
              </a>{" "}
            </div>
          </div>
          <div className={styles.ctrlroom2}>
            <div className={styles.contactcardA}>
              <div className={styles.contactspec}>
                <h3>വാർഡ് 9</h3>
                <h3>കിരാലൂർ</h3>
              </div>
              <div>
                <a href="tel:9656015772">
                  <FaPhoneAlt /> <span>റോസി - 9656015772</span>
                </a>{" "}
              </div>
              <div>
                <a href="tel:9947727902">
                  <FaPhoneAlt /> <span>വനജ -9947727902</span>
                </a>{" "}
              </div>
            </div>

            <div className={styles.contactcardB}>
              <div className={styles.contactspec}>
                <h3>വാർഡ് 10</h3>
                <h3>കുറുമാൽ West</h3>
              </div>
              <a href="tel:7293400197">
                <FaPhoneAlt /> <span>സുഗത -7293400197</span>
              </a>{" "}
            </div>

            <div className={styles.contactcardA}>
              <div className={styles.contactspec}>
                <h3>വാർഡ് 11</h3>
                <h3>കുറുമാൽ East</h3>
              </div>
              <a href="tel:8943835558">
                <FaPhoneAlt /> <span>വിജിനി - 8943835558</span>
              </a>{" "}
            </div>

            <div className={styles.contactcardB}>
              <div className={styles.contactspec}>
                <h3>വാർഡ് 12</h3>
                <h3>വെങ്ങിലശ്ശേരി East</h3>
              </div>
              <a href="tel:9747040495">
                <FaPhoneAlt /> <span>സിന്ധു -9747040495</span>
              </a>{" "}
            </div>

            <div className={styles.contactcardA}>
              <div className={styles.contactspec}>
                <h3>വാർഡ് 13</h3>
                <h3>വെള്ളാറ്റഞ്ഞൂർ South</h3>
              </div>
              <a href="tel:9947470568">
                <FaPhoneAlt /> <span>ബീന - 9947470568</span>
              </a>{" "}
            </div>

            <div className={styles.contactcardB}>
              <div className={styles.contactspec}>
                <h3>വാർഡ് 14</h3>
                <h3>വേലൂർ</h3>
              </div>
              <a href="tel:9048579091">
                <FaPhoneAlt /> <span>ഹേമലത -9048579091</span>
              </a>{" "}
            </div>

            <div className={styles.contactcardA}>
              <div className={styles.contactspec}>
                <h3>വാർഡ് 15</h3>
                <h3>തലക്കോട്ടുക്കര</h3>
              </div>
              <a href="tel:9645562148">
                <FaPhoneAlt /> <span>രമ -9645562148</span>
              </a>{" "}
            </div>

            <div className={styles.contactcardB}>
              <div className={styles.contactspec}>
                <h3>വാർഡ് 16</h3>
                <h3>തണ്ടിലം</h3>
              </div>
              <a href="tel:8943099879">
                <FaPhoneAlt /> <span>സുജാത -8943099879</span>
              </a>{" "}
            </div>

            <div className={styles.contactcardA}>
              <div className={styles.contactspec}>
                <h3>വാർഡ് 17</h3>
                <h3>പുലിയന്നൂർ</h3>
              </div>
              <a href="tel:9745457086">
                <FaPhoneAlt /> <span>ഷീല -9745457086</span>
              </a>{" "}
            </div>
          </div>
        </div>
      </main>
    </div>
    // </Layout>
  );
}
