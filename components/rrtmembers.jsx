import Head from "next/head";
import styles from "../styles/contacts.module.css";
import Layout from "./Layout";
import { FaPhoneAlt } from "react-icons/fa";
export default function RRTMembers() {
  return (
    // <Layout title="RRTMembers">
    <div className={styles.container}>
      {/* <Head>
          <title>Covid Focus | RRT Members</title>
          <meta
            name="description"
            content="Designed and developed by GEC Thrissur"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head> */}

      {/* <Header title="Dashboard"/> */}

      <main className={styles.contactpage}>
        <h3 className={styles.heading}>റാപിഡ് റെസ്പോൺസ് ടീം (RRT)</h3>
        <div className={styles.controlroom}>
          <div className={styles.ctrlroom1}>
            <div className={styles.contactcardA}>
              <div className={styles.contactspec}>
                <h3>വാർഡ് 1</h3>
                <h3>പാത്രമംഗലം</h3>
              </div>
              <div className={styles.contact}>
                <a href="tel:9495980399">
                  <FaPhoneAlt /> <span>ബിനിൽ.T.B - 9495980399</span>
                </a>
              </div>
              <div className={styles.contact}>
                <a href="tel:9539950831">
                  <FaPhoneAlt /> <span>രാഗേഷ് - 9539950831</span>
                </a>
              </div>
              <h4>നോഡൽ ഓഫീസർ</h4>
              <div className={styles.contact}>
                <a href="tel:9446765872">
                  <FaPhoneAlt /> <span>ജയൻ പത്രമംഗലം -9446765872</span>
                </a>
              </div>
            </div>

            <div className={styles.contactcardB}>
              <div className={styles.contactspec}>
                <h3>വാർഡ് 2</h3>
                <h3>വെള്ളാറ്റഞ്ഞൂർ S</h3>
              </div>
              <div className={styles.contact}>
                <a href="tel:9567044856">
                  <FaPhoneAlt /> <span>ജിത്തു - 9567044856</span>
                </a>
              </div>
              <div className={styles.contact}>
                <a href="tel:9142140794">
                  <FaPhoneAlt /> <span>ഷാനിൽ - 9142140794</span>
                </a>
              </div>
              <h4>നോഡൽ ഓഫീസർ</h4>
              <div className={styles.contact}>
                <a href="tel:8281410533">
                  <FaPhoneAlt /> <span>ഡോമിനിക് - 8281410533</span>
                </a>
              </div>
            </div>

            <div className={styles.contactcardA}>
              <div className={styles.contactspec}>
                <h3>വാർഡ് 3</h3>
                <h3>തയ്യൂർ </h3>
              </div>
              <div className={styles.contact}>
                <a href="tel:9995529530">
                  <FaPhoneAlt /> <span>രാഹുൽ.E.R - 9995529530</span>
                </a>
              </div>
              <div className={styles.contact}>
                <a href="tel:9747891222">
                  <FaPhoneAlt /> <span>രഞ്ജിത്ത് A.R - 9747891222</span>
                </a>
              </div>
              <div className={styles.contact}>
                <a href="tel:7907796660">
                  <FaPhoneAlt /> <span>ശരത്ത് - 7907796660</span>
                </a>
              </div>
              <div className={styles.contact}>
                <a href="tel:9605687296">
                  <FaPhoneAlt /> <span>അഭിലാഷ് - 9605687296</span>
                </a>
              </div>
              <h4>നോഡൽ ഓഫീസർ</h4>
              <div className={styles.contact}>
                <a href="tel:9495226230">
                  <FaPhoneAlt /> <span>T.K.മുരളി മാസ്റ്റർ - 9495226230</span>
                </a>
              </div>
            </div>

            <div className={styles.contactcardB}>
              <div className={styles.contactspec}>
                <h3>വാർഡ് 4</h3>
                <h3>പഴവൂർ</h3>
              </div>
              <div className={styles.contact}>
                <a href="tel:9961006575">
                  <FaPhoneAlt /> <span>നിജിൽ - 9961006575</span>
                </a>
              </div>
              <div className={styles.contact}>
                <a href="tel:9447824079">
                  <FaPhoneAlt /> <span>ഫൈസൽ - 9447824079</span>
                </a>
              </div>
              <div className={styles.contact}>
                <a href="tel:9048363225">
                  <FaPhoneAlt /> <span>മുഹമ്മദ് ഷാഫി - 9048363225</span>
                </a>
              </div>
              <h4>നോഡൽ ഓഫീസർ</h4>
              <div className={styles.contact}>
                <a href="tel:9656821702">
                  <FaPhoneAlt /> <span>പ്രേം ചന്ദ് - 9656821702</span>
                </a>
              </div>
            </div>

            <div className={styles.contactcardA}>
              <div className={styles.contactspec}>
                <h3>വാർഡ് 5</h3>
                <h3>കോടശ്ശേരി</h3>
              </div>
              <div className={styles.contact}>
                <a href="tel:9645537255">
                  <FaPhoneAlt /> <span>സന്തോഷ്‌ - 9645537255</span>
                </a>
              </div>
              <div className={styles.contact}>
                <a href="tel:7034197881">
                  <FaPhoneAlt /> <span>സ്റ്റീഫൻ - 7034197881</span>
                </a>
              </div>
              <h4>നോഡൽ ഓഫീസർ</h4>
              <div className={styles.contact}>
                <a href="tel:9947035686">
                  <FaPhoneAlt /> <span>ഹിന - 9947035686</span>
                </a>
              </div>
            </div>

            <div className={styles.contactcardB}>
              <div className={styles.contactspec}>
                <h3>വാർഡ് 6</h3>
                <h3>വെങ്ങിലശ്ശേരി West</h3>
              </div>
              <div className={styles.contact}>
                <a href="tel:9646854730">
                  <FaPhoneAlt /> <span>ജയൻ - 9646854730</span>
                </a>
              </div>
              <div className={styles.contact}>
                <a href="tel:8921835766">
                  <FaPhoneAlt /> <span>സണ്ണി പുള്ളിക്കോട്ടിൽ - 8921835766</span>
                </a>
              </div>
              <div className={styles.contact}>
                <a href="tel:9567015699">
                  <FaPhoneAlt /> <span>സതീശൻ മണികണ്ഠൻ - 9567015699</span>
                </a>
              </div>
              <div className={styles.contact}>
                <a href="tel:9744937258">
                  <FaPhoneAlt /> <span>അഭിലാഷ് - 9744937258</span>
                </a>
              </div>
              <h4>നോഡൽ ഓഫീസർ</h4>
              <div className={styles.contact}>
                <a href="tel:9497457820">
                  <FaPhoneAlt /> <span>ഗ്ലോറി ടീച്ചർ - 9497457820</span>
                </a>
              </div>
            </div>

            <div className={styles.contactcardA}>
              <div className={styles.contactspec}>
                <h3>വാർഡ് 7</h3>
                <h3>അർണോസ് നഗർ</h3>
              </div>
              <div className={styles.contact}>
                <a href="tel:8075855966">
                  <FaPhoneAlt /> <span>ജോർജ് പുളിക്കൻ - 8075855966</span>
                </a>
              </div>
              <div className={styles.contact}>
                <a href="tel:7510540482">
                  <FaPhoneAlt /> <span>ദേവി - 7510540482</span>
                </a>
              </div>
              <h4>നോഡൽ ഓഫീസർ</h4>
              <div className={styles.contact}>
                <a href="tel:9142767128">
                  <FaPhoneAlt /> <span>ജസ്റ്റിൻ - 9142767128</span>
                </a>
              </div>
            </div>

            <div className={styles.contactcardB}>
              <div className={styles.contactspec}>
                <h3>വാർഡ് 8</h3>
                <h3>കുട്ടംകുളം</h3>
              </div>
              <div className={styles.contact}>
                <a href="tel:9048406144">
                  <FaPhoneAlt /> <span>ബിപിൻ - 9048406144</span>
                </a>
              </div>
              <div className={styles.contact}>
                <a href="tel:9656918484">
                  <FaPhoneAlt /> <span>രാധാകൃഷ്ണൻ P S - 9656918484</span>
                </a>
              </div>
              <h4>നോഡൽ ഓഫീസർ</h4>
              <div className={styles.contact}>
                <a href="tel:9846531177">
                  <FaPhoneAlt /> <span>ലിസി - 9846531177</span>
                </a>
              </div>
            </div>
          </div>
          <div className={styles.ctrlroom2}>
            <div className={styles.contactcardA}>
              <div className={styles.contactspec}>
                <h3>വാർഡ് 9</h3>
                <h3>കിരാലൂർ</h3>
              </div>
              <div className={styles.contact}>
                <a href="tel:9947501009">
                  <FaPhoneAlt /> <span>സുമേഷ് - 9947501009</span>
                </a>
              </div>
              <div className={styles.contact}>
                <a href="tel:9847620681">
                  <FaPhoneAlt /> <span>ഹരീഷ് P M - 9847620681</span>
                </a>
              </div>
              <h4>നോഡൽ ഓഫീസർ</h4>
              <div className={styles.contact}>
                <a href="tel:9744681113">
                  <FaPhoneAlt /> <span>ഷാനിതാ P R - 9744681113</span>
                </a>
              </div>
            </div>

            <div className={styles.contactcardB}>
              <div className={styles.contactspec}>
                <h3>വാർഡ് 10</h3>
                <h3>കുറുമാൽ West</h3>
              </div>
              <div className={styles.contact}>
                <a href="tel:9946725451">
                  <FaPhoneAlt /> <span>ബിജോഷ് തലകോടൻ - 9946725451</span>
                </a>
              </div>
              <div className={styles.contact}>
                <a href="tel:9744380092">
                  <FaPhoneAlt /> <span>സുനിൽ A K- 9744380092</span>
                </a>
              </div>
              <h4>നോഡൽ ഓഫീസർ</h4>
              <div className={styles.contact}>
                <a href="tel:9447069221">
                  <FaPhoneAlt /> <span>രേണു മറിയം തങ്കച്ചൻ - 9447069221</span>
                </a>
              </div>
            </div>

            <div className={styles.contactcardA}>
              <div className={styles.contactspec}>
                <h3>വാർഡ് 11</h3>
                <h3>കുറുമാൽ East</h3>
              </div>
              <div className={styles.contact}>
                <a href="tel:8848854829">
                  <FaPhoneAlt /> <span>സുബി .V.B - 8848854829</span>
                </a>
              </div>
              <div className={styles.contact}>
                <a href="tel:9061765446">
                  <FaPhoneAlt /> <span>ഷാനിൽ A R - 9061765446</span>
                </a>
              </div>
              <h4>നോഡൽ ഓഫീസർ</h4>
              <div className={styles.contact}>
                <a href="tel:9495169219">
                  <FaPhoneAlt /> <span>തിലകൻ - 9495169219</span>
                </a>
              </div>
            </div>

            <div className={styles.contactcardB}>
              <div className={styles.contactspec}>
                <h3>വാർഡ് 12</h3>
                <h3>വെങ്ങിലശ്ശേരി East</h3>
              </div>
              <div className={styles.contact}>
                <a href="tel:7736390169">
                  <FaPhoneAlt /> <span>ഗിരീഷ് - 7736390169</span>
                </a>
              </div>
              <div className={styles.contact}>
                <a href="tel:9495509416">
                  <FaPhoneAlt /> <span>ഷിന്റോ - 9495509416</span>
                </a>
              </div>
              <h4>നോഡൽ ഓഫീസർ</h4>
              <div className={styles.contact}>
                <a href="tel:9947588825">
                  <FaPhoneAlt /> <span>രജിത - 9947588825</span>
                </a>
              </div>
            </div>

            <div className={styles.contactcardA}>
              <div className={styles.contactspec}>
                <h3>വാർഡ് 13</h3>
                <h3>വെള്ളാറ്റഞ്ഞൂർ South</h3>
              </div>
              <div className={styles.contact}>
                <a href="tel:9961051413">
                  <FaPhoneAlt /> <span>പ്രദീപ് - 9961051413</span>
                </a>
              </div>
              <div className={styles.contact}>
                <a href="tel:9495059439">
                  <FaPhoneAlt /> <span>സനൽ ജോയ് - 9495059439</span>
                </a>
              </div>
              <h4>നോഡൽ ഓഫീസർ</h4>
              <div className={styles.contact}>
                <a href="tel:9495078784">
                  <FaPhoneAlt /> <span>സുരേഷ് കുമാർ - 9495078784</span>
                </a>
              </div>
            </div>

            <div className={styles.contactcardB}>
              <div className={styles.contactspec}>
                <h3>വാർഡ് 14</h3>
                <h3>വേലൂർ</h3>
              </div>
              <div className={styles.contact}>
                <a href="tel:9745979858">
                  <FaPhoneAlt /> <span>ശകേഷ്.എൻ.എം -9745680222</span>
                </a>
              </div>
              <div className={styles.contact}>
                <a href="tel:9745979858">
                  <FaPhoneAlt /> <span>ജസ്റ്റിൻ ക്രിസ്റ്റഫർ - 7510555968</span>
                </a>
              </div>
              <div className={styles.contact}>
                <a href="tel:9745979858">
                  <FaPhoneAlt /> <span>ഹരി നാരായണൻ -9645121080</span>
                </a>
              </div>
              <div className={styles.contact}>
                <a href="tel:9745979858">
                  <FaPhoneAlt /> <span>സന്തോഷ് കുമാർ -8907680679</span>
                </a>
              </div>
              <h4>നോഡൽ ഓഫീസർ</h4>
              <div className={styles.contact}>
                <a href="tel:9745979858">
                  <FaPhoneAlt /> <span>പ്രേമദാസൻ - 9497316590</span>
                </a>
              </div>
            </div>

            <div className={styles.contactcardA}>
              <div className={styles.contactspec}>
                <h3>വാർഡ് 15</h3>
                <h3>തലക്കോട്ടുക്കര</h3>
              </div>
              <div className={styles.contact}>
                <a href="tel:9946791100">
                  <FaPhoneAlt /> <span>ഡൈസൻ.P.D - 9946791100</span>
                </a>
              </div>
              <div className={styles.contact}>
                <a href="tel:9846477555">
                  <FaPhoneAlt /> <span>അബ്ദുൾ റഷീദ് - 9846477555</span>
                </a>
              </div>
              <div className={styles.contact}>
                <a href="tel:9061608284">
                  <FaPhoneAlt /> <span>കെ .സി ബാബു - 9061608284</span>
                </a>
              </div>
              <div className={styles.contact}>
                <a href="tel:8111841313">
                  <FaPhoneAlt /> <span>സിബി ടി ജെ - 8111841313</span>
                </a>
              </div>
              <h4>നോഡൽ ഓഫീസർ</h4>
              <div className={styles.contact}>
                <a href="tel:8281410533">
                  <FaPhoneAlt /> <span>ഡോമിനിക് - 8281410533</span>
                </a>
              </div>
            </div>

            <div className={styles.contactcardB}>
              <div className={styles.contactspec}>
                <h3>വാർഡ് 16</h3>
                <h3>തണ്ടിലം</h3>
              </div>
              <div className={styles.contact}>
                <a href="tel:9745979858">
                  <FaPhoneAlt /> <span>സുരേഷ് - 7034984525</span>
                </a>
              </div>
              <div className={styles.contact}>
                <a href="tel:9745979858">
                  <FaPhoneAlt /> <span>ബിനിത - 9947987030</span>
                </a>
              </div>
              <h4>നോഡൽ ഓഫീസർ</h4>
              <div className={styles.contact}>
                <a href="tel:9745979858">
                  <FaPhoneAlt /> <span>ജിസൻ - 9645167340</span>
                </a>
              </div>
            </div>

            <div className={styles.contactcardA}>
              <div className={styles.contactspec}>
                <h3>വാർഡ് 17</h3>
                <h3>പുലിയന്നൂർ</h3>
              </div>
              <div className={styles.contact}>
                <a href="tel:8606560923">
                  <FaPhoneAlt /> <span>നികേഷ് - 8606560923</span>
                </a>
              </div>
              <div className={styles.contact}>
                <a href="tel:9526803071">
                  <FaPhoneAlt /> <span>റിൻഷാദ് - 9526803071</span>
                </a>
              </div>
              <h4>നോഡൽ ഓഫീസർ</h4>
              <div className={styles.contact}>
                <a href="tel:9447807611">
                  <FaPhoneAlt /> <span>ശ്യാമള - 9447807611 </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
    // </Layout>
  );
}
