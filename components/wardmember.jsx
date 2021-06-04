import Head from "next/head";
import { FaPhoneAlt } from "react-icons/fa";
import styles from "../styles/contacts.module.css";
import Layout from "./Layout";

export default function WardMember() {
  return (
    // <Layout title="WardMember">
    <div className={styles.container}>
      {/* <Head>
          <title>Covid Focus | Ward Member</title>
          <meta
            name="description"
            content="Designed and developed by GEC Thrissur"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head> */}

      {/* <Header title="Dashboard"/> */}

      <main className={styles.contactpage}>
        <h3 className={styles.heading}>വാർഡ് മെമ്പേഴ്സ്</h3>
        <div className={styles.controlroom}>
          <div className={styles.ctrlroom1}>
            <div className={styles.contactcardA}>
              <div className={styles.contactspec}>
                <h3>വാർഡ് 1</h3>
                <h3>പാത്രമംഗലം</h3>
              </div>
              <a href="tel:9745979858">
                <FaPhoneAlt /> <span>കർമ്മല ജോൺസൺ -9745979858</span>
              </a>
            </div>

            <div className={styles.contactcardB}>
              <div className={styles.contactspec}>
                <h3>വാർഡ് 2</h3>
                <h3>വെള്ളാറ്റഞ്ഞൂർ S</h3>
              </div>
              <a href="tel:9447466792">
                <FaPhoneAlt /> <span>അനിൽ മാസ്റ്റർ- 9447466792</span>
              </a>
            </div>

            <div className={styles.contactcardA}>
              <div className={styles.contactspec}>
                <h3>വാർഡ് 3</h3>
                <h3>തയ്യൂർ </h3>
              </div>
              <a href="tel:9526056136">
                <FaPhoneAlt /> <span>വിമല നാരായണൻ - 9526056136</span>
              </a>
            </div>

            <div className={styles.contactcardB}>
              <div className={styles.contactspec}>
                <h3>വാർഡ് 4</h3>
                <h3>പഴവൂർ</h3>
              </div>
              <a href="tel:8111953438">
                <FaPhoneAlt /> <span>ആരിഫ സാബിർ 8111953438</span>
              </a>
            </div>

            <div className={styles.contactcardA}>
              <div className={styles.contactspec}>
                <h3>വാർഡ് 5</h3>
                <h3>കോടശ്ശേരി</h3>
              </div>
              <a href="tel:9846242535">
                <FaPhoneAlt /> <span>നിധീഷ് ചന്ദ്രൻ - 9846242535</span>
              </a>
            </div>

            <div className={styles.contactcardB}>
              <div className={styles.contactspec}>
                <h3>വാർഡ് 6</h3>
                <h3>വെങ്ങിലശ്ശേരി West</h3>
              </div>
              <a href="tel:9946832988">
                <FaPhoneAlt /> <span>ബാലകൃഷ്ണൻ വെങ്ങിലശ്ശേരി - 9946832988</span>
              </a>
            </div>

            <div className={styles.contactcardA}>
              <div className={styles.contactspec}>
                <h3>വാർഡ് 7</h3>
                <h3>അർണോസ് നഗർ</h3>
              </div>
              <a href="tel:8943835558">
                <FaPhoneAlt /> <span>വിജിനി ഗോപി - 8943835558</span>
              </a>
            </div>

            <div className={styles.contactcardB}>
              <div className={styles.contactspec}>
                <h3>വാർഡ് 8</h3>
                <h3>കുട്ടംകുളം</h3>
              </div>
              <a href="tel:9846525377">
                <FaPhoneAlt /> <span>ഷോബി ടി ആർ - 9846525377</span>
              </a>
            </div>
          </div>
          <div className={styles.ctrlroom2}>
            <div className={styles.contactcardA}>
              <div className={styles.contactspec}>
                <h3>വാർഡ് 9</h3>
                <h3>കിരാലൂർ</h3>
              </div>
              <a href="tel:9645796807">
                <FaPhoneAlt /> <span>രേഷ്മ സുധീഷ് - 9645796807</span>
              </a>
            </div>

            <div className={styles.contactcardB}>
              <div className={styles.contactspec}>
                <h3>വാർഡ് 10</h3>
                <h3>കുറുമാൽ West</h3>
              </div>
              <a href="tel:8606814978">
                <FaPhoneAlt /> <span>അജി ജോഷി - 8606814978</span>
              </a>
            </div>

            <div className={styles.contactcardA}>
              <div className={styles.contactspec}>
                <h3>വാർഡ് 11</h3>
                <h3>കുറുമാൽ East</h3>
              </div>
              <a href="tel:8086130866">
                <FaPhoneAlt /> <span>ശുഭ അനിൽകുമാർ - 8086130866</span>
              </a>
            </div>

            <div className={styles.contactcardB}>
              <div className={styles.contactspec}>
                <h3>വാർഡ് 12</h3>
                <h3>വെങ്ങിലശ്ശേരി East</h3>
              </div>
              <a href="tel:9846334033">
                <FaPhoneAlt /> <span>സൈമൺ C D - 9846334033</span>
              </a>
            </div>

            <div className={styles.contactcardA}>
              <div className={styles.contactspec}>
                <h3>വാർഡ് 13</h3>
                <h3>വെള്ളാറ്റഞ്ഞൂർ South</h3>
              </div>
              <a href="tel:9447944178">
                <FaPhoneAlt /> <span>ജോയ് C F - 9447944178</span>
              </a>
            </div>

            <div className={styles.contactcardB}>
              <div className={styles.contactspec}>
                <h3>വാർഡ് 14</h3>
                <h3>വേലൂർ</h3>
              </div>
              <a href="tel:9495503775">
                <FaPhoneAlt /> <span>സ്വപ്ന രാമചന്ദ്രൻ - 9495503775</span>
              </a>
            </div>

            <div className={styles.contactcardA}>
              <div className={styles.contactspec}>
                <h3>വാർഡ് 15</h3>
                <h3>തലക്കോട്ടുക്കര</h3>
              </div>
              <a href="tel:9495587601">
                <FaPhoneAlt /> <span>ബിന്ദു ശർമ്മ - 9495587601</span>
              </a>
            </div>

            <div className={styles.contactcardB}>
              <div className={styles.contactspec}>
                <h3>വാർഡ് 16</h3>
                <h3>തണ്ടിലം</h3>
              </div>
              <a href="tel:9846173446">
                <FaPhoneAlt /> <span>സുബ്രഹ്മണ്യൻ P S - 9846173446</span>
              </a>
            </div>

            <div className={styles.contactcardA}>
              <div className={styles.contactspec}>
                <h3>വാർഡ് 17</h3>
                <h3>പുലിയന്നൂർ</h3>
              </div>
              <a href="tel:8589898997">
                <FaPhoneAlt /> <span>ഷേർലി ദിലീപ് - 8589898997</span>
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
    // </Layout>
  );
}
