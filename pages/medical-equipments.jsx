import React from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import style from "../styles/emergency.module.css";
import howto from "../styles/howto.module.css";
import { Accordion } from "react-bootstrap";
import { nodeName } from "jquery";
import MedicalEquipments from "../components/medicalEquipments";

function HowTo() {
  // const [setActive, setActiveState] = useState("");
  // // const [setHeight, setHeightState] = useState("0px");

  // function toggleAccordion() {
  //     setActiveState(setActive === "" ? "show" : "");
  // }

  return (
    <Layout title="MedicalEquipments">
      <Head>
        <title>Covid Focus | Medical Equipments</title>
        <meta
          name="description"
          content="Designed and developed by GEC Thrissur"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={` ${howto.body}`}>
        <MedicalEquipments />

        <div className={`${howto.heading} `}>
          <div className={`${howto.titlepara} `}>
            <p> ചോദ്യങ്ങളും ഉത്തരങ്ങളും </p>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className={`accordion-button ${howto.buttonTitle} `}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <strong>1. എന്താണ് പൾസ് ഓക്സിമീറ്റർ ?</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <ul>
                <li className={` ${howto.listItem}`}>
                  കോവിഡ് രോഗവ്യാപനം രൂക്ഷമാവുന്നതിനിടെ ‘പൾസ് ഓക്സിമീറ്റർ’ എന്ന
                  മെഡിക്കൽ ഉപകരണത്തിന് ആവശ്യക്കാർ വർധിക്കുകയാണ്. രക്തത്തിലെ
                  ഓക്സിജന്റെ അളവ് അളക്കാൻ ഉപയോഗിക്കുന്ന ഉപകരണമാണിത്.
                </li>

                <li className={` ${howto.listItem}`}>
                  പൾസ് ഓക്സിമെട്രി എന്ന പ്രക്രിയയിലൂടെയാണ് ഈ ഉപകരണത്തിലൂടെ
                  ശരീരത്തിലെ ഓക്സിജൻ അളവ് മനസ്സിലാക്കാനാവുന്നത്.
                </li>
                <li className={` ${howto.listItem}`}>
                  “രക്തത്തിലെ ഓക്സിജന്റെ അളവ് (ഓക്സിജൻ സാച്ചുറേഷൻ) അളക്കാൻ
                  ഉപയോഗിക്കുന്ന ഒരു പരിശോധനയാണ് പൾസ് ഓക്സിമെട്രി. നിങ്ങളുടെ
                  ശരീരത്തിന്റെ ചില ഭാഗങ്ങളിലേക്ക് ഓക്സിജൻ എത്രത്തോളം നന്നായി
                  എത്തുന്നുവെന്ന് എളുപ്പത്തിലും വേദനരഹിതമായും അറിയാനുള്ള അളവാണ്
                  ഇത്,”എന്ന് ജോൺ ഹോപ്കിൻസ് മെഡിസിൻ പറയുന്നു.
                </li>
                <li className={` ${howto.listItem}`}>
                  കോവിഡ് -19 ബാധിച്ച് ശരീരത്തിൽ ഓക്സിജന്റെ അളവ് കുറയുന്നത്
                  ആളുകളിൽ ആരോഗ്യനില സങ്കീർണമാക്കും. ഇത് പലപ്പോഴും ജീവന്
                  ഭീഷണിയാവുന്ന അവസ്ഥയിലേക്ക് എത്തിക്കും. പൾസ് ഓക്സിമീറ്റർ വഴി
                  ഓക്സിജൻ അളവ് സ്ഥിരമായി പരിശോധിക്കുന്നത് ശരീരത്തിൽ ഓക്സിജൻ അളവ്
                  കുറയുന്നുണ്ടോഎന്ന് അറിയാൻ സഹായിക്കും.
                </li>
                <li className={` ${howto.listItem}`}>
                  ചെറുതും താങ്ങാനാവുന്ന വിലയിലുള്ളതുമായ ഉപകരണമാണ് പൾസ്
                  ഓക്സിമീറ്റർ. ഇത് കൈവിരലുമായി ബന്ധിപ്പിച്ചാണ് ഓക്സിജന്റെ അളവ്
                  അറിയുന്നത്. വ്യത്യസ്ത തരം പ്രകാശ തരംഗങ്ങൾ കടത്തിവിട്ട്
                  രക്തത്തിലെ ഓക്സിജൻ അളവ് മനസ്സിലാക്കുന്ന തരത്തിലാണ് ഈ
                  ഉപകരണത്തിന്റെ പ്രവർത്തനം.
                </li>
              </ul>
            </div>
          </div>

          <h2 className="accordion-header" id="headingTwo">
            <button
              className={`accordion-button ${howto.buttonTitle} `}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="true"
              aria-controls="collapseTwo"
            >
              <strong>2.പൾസ് ഓക്സിമീറ്റർ എങ്ങനെ ശരിയായി ഉപയോഗിക്കാം?</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse show"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <ol>
                <li className={` ${howto.listItem}`}>
                  നിങ്ങളുടെ വിരൽ നഖങ്ങളിൽ നെയിൽ പോളിഷോ സമാന പദാർത്ഥങ്ങളോ
                  ഉണ്ടെങ്കിൽ അവ നീക്കംചെയ്യുക
                </li>
                <li className={` ${howto.listItem}`}>
                  നിങ്ങളുടെ വിരൽ ശുദ്ധമാണെന്ന് ഉറപ്പാക്കുക
                </li>
                <li className={` ${howto.listItem}`}>
                  നിങ്ങളുടെ വിരൽ നനഞ്ഞതോ തണുത്തതോ അല്ലെന്ന് ഉറപ്പാക്കുക
                </li>
                <li className={` ${howto.listItem}`}>
                  പൾസ് ഓക്സിമീറ്റർ ഉപയോഗിക്കുന്നതിന് മുമ്പ് കുറഞ്ഞത് 5
                  മിനിറ്റെങ്കിലും വിശ്രമിക്കുക
                </li>
                <li className={` ${howto.listItem}`}>
                  കൈ നിങ്ങളുടെ നെഞ്ചിൽ വയ്ക്കുക, നിങ്ങളുടെ ഹൃദയത്തിന്റെ അതേ
                  തലത്തിൽ.
                </li>
                <li className={` ${howto.listItem}`}>
                  കൈ നിങ്ങളുടെ നെഞ്ചിൽ വയ്ക്കുക, നിങ്ങളുടെ ഹൃദയത്തിന്റെ അതേ
                  തലത്തിൽ.
                </li>
                <li className={` ${howto.listItem}`}>
                  ഓക്സിമീറ്റർ ഓൺ ചെയ്ത സ്വിച്ചുചെയ്യുക. നിങ്ങളുടെ നടുവിരലിലോ
                  ചൂണ്ടുവിരലിലോ പൾസ് ഓക്സിമീറ്റർ വയ്ക്കുക.
                </li>
                <li className={` ${howto.listItem}`}>
                  ഒരു മിനിറ്റ് അല്ലെങ്കിൽ റീഡിങ് കഴിയുന്നത് വരെ കാത്തുനിൽക്കുക.
                </li>
                <li className={` ${howto.listItem}`}>
                  റീഡിങ് സ്ഥിരീകരിച്ച ശേഷം ഏറ്റവും ഉയർന്ന റീഡിങ് എത്രയെന്ന്
                  നോക്കുക
                </li>

                <li className={` ${howto.listItem}`}>
                  ദിവസവും മൂന്ന് നേരം വച്ച് ഇത്തരത്തിൽ റീഡിങ് എടുക്കുക. ഇതിന്
                  പുറമെ നിങ്ങൾക്ക് അസ്വസ്ഥതകൾ തോന്നുമ്പോഴും റീഡിങ് എടുക്കാം.
                </li>
              </ol>
            </div>
          </div>
        </div>

        <div className={`${howto.heading} `}>
          <div className={`${howto.titlepara} `}>
            <p> ഡൗൺലോഡ്സ് </p>
          </div>
        </div>
        <ul className={howto.list}>
          <li>
            <p className={`${howto.buttonTitle} `}>
              <a href="https://luca.co.in/wp-content/uploads/2020/10/CovidPedia-LUCA-KSSP.pdf">
                കോവിഡ് 19 വിജ്ഞാന ശേഖരം
              </a>
            </p>
          </li>
          <li>
            <p className={`${howto.buttonTitle} `}>
              <a href="https://luca.co.in/wp-content/uploads/2021/04/LUCA-VACCINEPEDIA.pdf">
                കോവിഡ് 19 വാക്സിൻ വിജ്ഞാന ശേഖരം{" "}
              </a>
            </p>
          </li>
        </ul>
      </main>
    </Layout>
  );
}

export default HowTo;
