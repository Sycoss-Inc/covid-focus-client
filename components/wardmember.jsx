import Head from "next/head";
import styles from "../styles/contacts.module.css";
import Layout from "./Layout";

export default function WardMember() {
  return (
    <Layout title="WardMember">
      <div className={styles.container}>
        <Head>
          <title>Covid Focus | Ward Member</title>
          <meta
            name="description"
            content="Designed and developed by GEC Thrissur"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        {/* <Header title="Dashboard"/> */}

        <main className={styles.contactpage}>
          <p>PRESS TO CALL</p>

          <h1>വാർഡ് മെമ്പേഴ്സ്</h1>
          <div className={styles.contactsection}>
            <div className={styles.contactdetails}>
              <div className={styles.contactcardA}>
                <div className={styles.contactspec}>
                  <h2>വാർഡ് 1</h2>
                  <h3>പാത്രമംഗലം</h3>
                </div>
                <a href="tel:9745979858"></a>
                <p>കർമ്മല ജോൺസൺ -9745979858</p>
              </div>

              <div className={styles.contactcardB}>
                <div className={styles.contactspec}>
                  <h2>വാർഡ് 2</h2>
                  <h3>വെള്ളാറ്റഞ്ഞൂർ S</h3>
                </div>
                <a href="tel:9447466792"></a>
                <p>അനിൽ മാസ്റ്റർ- 9447466792</p>
              </div>

              <div className={styles.contactcardA}>
                <div className={styles.contactspec}>
                  <h2>വാർഡ് 3</h2>
                  <h3>തയ്യൂർ </h3>
                </div>
                <a href="tel:9526056136"></a>
                <p>വിമല നാരായണൻ - 9526056136</p>
              </div>

              <div className={styles.contactcardB}>
                <div className={styles.contactspec}>
                  <h2>വാർഡ് 4</h2>
                  <h3>പഴവൂർ</h3>
                </div>
                <a href="tel:8111953438"></a>
                <p>ആരിഫ സാബിർ 8111953438</p>
              </div>

              <div className={styles.contactcardA}>
                <div className={styles.contactspec}>
                  <h2>വാർഡ് 5</h2>
                  <h3>കോടശ്ശേരി</h3>
                </div>
                <a href="tel:9846242535"></a>
                <p>നിധീഷ് ചന്ദ്രൻ - 9846242535</p>
              </div>

              <div className={styles.contactcardB}>
                <div className={styles.contactspec}>
                  <h2>വാർഡ് 6</h2>
                  <h3>വെങ്ങിലശ്ശേരി West</h3>
                </div>
                <a href="tel:9946832988"></a>
                <p>ബാലകൃഷ്ണൻ വെങ്ങിലശ്ശേരി - 9946832988</p>
              </div>

              <div className={styles.contactcardA}>
                <div className={styles.contactspec}>
                  <h2>വാർഡ് 7</h2>
                  <h3>അർണോസ് നഗർ</h3>
                </div>
                <a href="tel:8943835558"></a>
                <p>വിജിനി ഗോപി - 8943835558</p>
              </div>

              <div className={styles.contactcardB}>
                <div className={styles.contactspec}>
                  <h2>വാർഡ് 8</h2>
                  <h3>കുട്ടംകുളം</h3>
                </div>
                <a href="tel:9846525377"></a>
                <p>ഷോബി ടി ആർ - 9846525377</p>
              </div>

              <div className={styles.contactcardA}>
                <div className={styles.contactspec}>
                  <h2>വാർഡ് 9</h2>
                  <h3>കിരാലൂർ</h3>
                </div>
                <a href="tel:9645796807"></a>
                <p>രേഷ്മ സുധീഷ് - 9645796807</p>
              </div>

              <div className={styles.contactcardB}>
                <div className={styles.contactspec}>
                  <h2>വാർഡ് 10</h2>
                  <h3>കുറുമാൽ West</h3>
                </div>
                <a href="tel:8606814978"></a>
                <p>അജി ജോഷി - 8606814978</p>
              </div>

              <div className={styles.contactcardA}>
                <div className={styles.contactspec}>
                  <h2>വാർഡ് 11</h2>
                  <h3>കുറുമാൽ East</h3>
                </div>
                <a href="tel:8086130866"></a>
                <p>ശുഭ അനിൽകുമാർ - 8086130866</p>
              </div>

              <div className={styles.contactcardB}>
                <div className={styles.contactspec}>
                  <h2>വാർഡ് 12</h2>
                  <h3>വെങ്ങിലശ്ശേരി East</h3>
                </div>
                <a href="tel:9846334033"></a>
                <p>സൈമൺ C D - 9846334033</p>
              </div>

              <div className={styles.contactcardA}>
                <div className={styles.contactspec}>
                  <h2>വാർഡ് 13</h2>
                  <h3>വെള്ളാറ്റഞ്ഞൂർ South</h3>
                </div>
                <a href="tel:9447944178"></a>
                <p>ജോയ് C F - 9447944178</p>
              </div>

              <div className={styles.contactcardB}>
                <div className={styles.contactspec}>
                  <h2>വാർഡ് 14</h2>
                  <h3>വേലൂർ</h3>
                </div>
                <a href="tel:9495503775"></a>
                <p>സ്വപ്ന രാമചന്ദ്രൻ - 9495503775</p>
              </div>

              <div className={styles.contactcardA}>
                <div className={styles.contactspec}>
                  <h2>വാർഡ് 15</h2>
                  <h3>തലക്കോട്ടുക്കര</h3>
                </div>
                <a href="tel:9495587601"></a>
                <p>ബിന്ദു ശർമ്മ - 9495587601</p>
              </div>

              <div className={styles.contactcardB}>
                <div className={styles.contactspec}>
                  <h2>വാർഡ് 16</h2>
                  <h3>തണ്ടിലം</h3>
                </div>
                <a href="tel:9846173446"></a>
                <p>സുബ്രഹ്മണ്യൻ P S - 9846173446</p>
              </div>

              <div className={styles.contactcardA}>
                <div className={styles.contactspec}>
                  <h2>വാർഡ് 17</h2>
                  <h3>പുലിയന്നൂർ</h3>
                </div>
                <a href="tel:8589898997"></a>
                <p>ഷേർലി ദിലീപ് - 8589898997</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
}
