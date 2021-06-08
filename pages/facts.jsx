import React from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import style from "../styles/fact.module.css";

import Collapsible from "../components/Collapsible";

function Fact() {
  const videoGrid = [
    {
      id: "xluzEPfiEJw",
      tag: "വാക്‌സിനെതിരെ പല പ്രചരണങ്ങളും കാണുന്നുണ്ടല്ലോ, അത്തരത്തിൽ ആശങ്കവേണോ ?",
    },
    {
      id: "caynPPb888o",
      tag: "കോവിഡ് ബാധിച്ച ചെറുപ്പക്കാർക്ക് ഹാപ്പി ഹൈപ്പോക്സിയ വലിയ ഭീഷണിയാകുമോ ?",
    },
    {
      id: "UZPLGAHsneo",
      tag: "കോവിഡ് രണ്ടാം തരംഗം എത്ര കാലം തുടരും?",
    },
    {
      id: "9amnyMI0KLk",
      tag: "ഏത് വാക്സിനാണ് കൂടുതൽ നല്ലത് ?",
    },
    {
      id: "d9SOLMxwG8M",
      tag: "അലർജി ഉള്ളവർക്ക് വാക്സിൻ എടുക്കാൻ പറ്റുമോ ?",
    },
    {
      id: "WQ-R5-6kCXo",
      tag: "കോവിഷീൽഡ് വാക്സിൻ രണ്ടാംഡോസ് എടുക്കാൻ വൈകിയാൽ പ്രശ്നമുണ്ടോ ?",
    },
    {
      id: "YL1LmeWT8cQ",
      tag: "കോവിഡ് വൈറസിന്റെ ജനിതക വ്യതിയാനം എത്രത്തോളം അപടകരമാണ് ?",
    },
    {
      id: "5vUv9tgyzLc",
      tag: "പ്രതിരോധശേഷികുറഞ്ഞവരിലും കാൻസർ രോഗികളിലും കോവിഡ് വാക്‌സിൻ എടുക്കുമ്പോൾ ശ്രദ്ധിക്കേണ്ട കാര്യങ്ങൾ ?-",
    },
    {
      id: "UXCIO1BollE",
      tag: "രണ്ടാമത്തെ ഡോസ് മറ്റൊരു വാക്‌സിൻ ആകാമോ ?",
    },
    {
      id: "BwqMV6Qd5WQ",
      tag: "കോവിഡ് വാക്‌സിനുകളിലെ രാസപദാർത്ഥങ്ങൾ ശരീരത്തിന് ദോഷമാണോ ?എന്താണ് വാക്‌സിനുകളിലെ ഘടകങ്ങൾ ?",
    },
    {
      id: "4SY4no-s8uI",
      tag: "കോവിഡ് രോഗം വന്ന് മാറിയ ഒരാൾ വാക്‌സിൻ എടുക്കേണ്ടതുണ്ടോ?",
    },
    {
      id: "Kv_v2Z-skIk",
      tag: "രണ്ടാംതരംഗം -വൈറസിന്റെ തീവ്രത കൂടുതലായോ ?, ചെറുപ്പക്കാരിൽ കൂടുതൽ തീവ്രമായ പ്രശ്‌നങ്ങൾ ഉണ്ടാക്കുമോ ?",
    },
    {
      id: "W7tuFDZlx-o",
      tag: "നമ്മൾ കോവിഡ് പോസിറ്റീവായാൽ കുഞ്ഞുങ്ങളെ മാറ്റിപ്പാർപ്പിക്കണോ ?",
    },
    {
      id: "xluzEPfiEJw",
      tag: "വാക്‌സിനെതിരെ പല പ്രചരണങ്ങളും കാണുന്നുണ്ടല്ലോ, അത്തരത്തിൽ ആശങ്കവേണോ ?",
    },
    {
      id: "Z0C0_GJEkKA",
      tag: "രണ്ടുഡോസ് കോവിഡ് വാക്‌സിൻ എടുത്തിട്ടും കോവിഡ് പോസിറ്റീവ് ആയി,അപ്പോൾ വാക്‌സിന്റെ പ്രാധാന്യം എന്താണ് ?",
    },
  ];

  return (
    <Layout title="FactCheck">
      <Head>
        <title>Covid Focus | Emergency</title>
        <meta
          name="description"
          content="Designed and developed by GEC Thrissur"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={style.heading}>
        <div>
          {/* <img src="24678.jpg" width="100%" height="1%" /> */}
          <Collapsible lable="ഒരു വ്യാജ വാർത്ത എങ്ങനെ തിരിച്ചറിയാം ?">
          <div className={style.facts}>
            <h4>വ്യാജ വാർത്തകൾ പലതരത്തിലുണ്ട്</h4>
            <ul>
              <li>എവിടേലും നടന്ന ഒരു സംഭവം എന്ന രീതിയിൽ പ്രചരിക്കുന്നവ</li>
              <li>
                കോവിഡ് കാലത്ത് ആണേൽ ചില പ്രതിരോധ മരുന്നുകൾ കണ്ടെത്തി എന്ന
                രീതിയിൽ പ്രചരിക്കുന്നവ
              </li>
              <li>
                പകുതി സത്യമോ തെറ്റിദ്ധാരണാജനകമായ ( Misleading ) ആയ ആധികാരികത
                ഇല്ലാത്ത വാർത്തകൾ
              </li>
              <li>വ്യാജ വാർത്തകൾക്ക് ചില ലക്ഷണം ഉണ്ടാവും</li>
              <li>
                മുൻപ് കേൾക്കാത്ത ഒരു വാർത്ത ആയിരിക്കും പെട്ടന്ന് പൊട്ടി
                പുറപ്പെട്ടത് പോലെ
              </li>
              <li>
                ആളുകളെ വിശ്വസിപ്പിക്കാൻ വലിയ യൂണിവേഴ്‌സിറ്റി / ISRO പോലുള്ള
                സ്ഥാപനത്തിന്റെ പേര് അതിൽ ഉൾപ്പെട്ടിട്ടുണ്ടാവും{" "}
              </li>
              <li>വ്യക്തിപരമായ അനുഭവം പറച്ചിൽ ആയിരിക്കാം</li>
              <li>
                ഇത്രയും ലക്ഷണം വച്ചു നമുക്ക് ലഭിക്കുന്ന ഒരു വാർത്തയെ വ്യാജമാണോ
                അല്ലയോ എന്ന് സംശയിക്കാം .
              </li>
            </ul>
            <h6> മീഡിയം </h6>
            <li>
              വ്യാജ വാർത്തകൾ ടെക്സ്റ്റ് രൂപത്തിലും ചിത്രം പോസ്റ്റർ , വീഡിയോ ,
              ഓഡിയോ രൂപത്തിൽ വെബ്സൈറ്റ് രൂപത്തിൽ എല്ലാം ഉണ്ടാവാം
            </li>
            <h5>Fact check </h5>
            <ul>
              <li>യാഥാർത്ഥ്യം കണ്ടുപിടിക്കാനുള്ള സാധ്യതകൾ</li>
              <li>
                അതിലെ വിവരങ്ങൾ പരിശോധിക്കുക , അതുമായി ബന്ധപ്പെടുന്ന വിവരങ്ങൾ
                ഗൂഗിൾ ചെയ്യുക ഉദാ : നാരങ്ങ കോവിഡിനെ പ്രതിരോധിക്കാൻ നല്ലത് ആണ്
                എന്നൊരു വാർത്ത ലഭിച്ചു, ( ഈ വാർത്ത വ്യജമാണ് ) വ്യാജമാണോ അല്ലയോ
                എന്നറിയാൻ{" "}
              </li>
              <li>
                Lemon and Covid എന്നോ lemon can prevent covid എന്നോ അതിലെ
                വാക്കുകൾ പല രീതിയിൽ ഗൂഗ്ൾ ചെയ്തു നോക്കുക{" "}
              </li>
              <li>അപ്പോൾ അവയെ കുറിച്ചുള്ള ലേഖനം ലഭിക്കും . </li>
              <li>
                {" "}
                ഒരു ഓഡിയോ സന്ദേശം ആണേൽ അതിൽ പറയുന്ന ഉള്ളടക്കം മുകളിൽ പറഞ്ഞ
                രീതിയിൽ സർച് ചെയ്തു നോക്കുക{" "}
              </li>
              <li>
                മറ്റൊന്ന് ചിത്രങ്ങളിലൂടെ പ്രചരിക്കുന്ന വാർത്ത വ്യാജമാണോ എന്നു
                പരിശോധിക്കാൻ , ചിത്രത്തിൽ എന്തേലും എഴുതിയിട്ടുണ്ടോ തിയ്യതി സ്ഥലം
                പോലുള്ള വിവരങ്ങൾ പരിശോധിക്കുക
              </li>
              <li>
                മറ്റൊന്ന് റിവേഴ്‌സ് ഇമേജ് സർച് രീതി ആണ് Google കയറിയാൽ image
                എന്ന ഭാഗത്ത് പോയാൽ സർച് ബാറിന് അടുത്തായി ഒരു ക്യാമറ icon കാണും
                അത് ക്ലിക് ചെയ്തു നമ്മുടെ ഫോണിൽ ഉള്ള ചിത്രം അപ്ലോഡ് ചെയ്ത്
                അതുമായി ബന്ധപ്പെട്ട വിവരങ്ങൾ സർച് ചെയ്യാവുന്നത് ആണ് ഇതിന് മികച്ച
                പെർഫോമൻസ് ലഭിക്കുക www.yandex.com എന്ന സർച് എഞ്ചിനിൽ ആണ് .
              </li>
            </ul>
            <h5>How to check fact-video</h5>
            <a href="https://youtu.be/Z42naG-_4eA" target="_blank">
              https://youtu.be/Z42naG-_4eA
            </a>
            <li>
              {" "}
              നിങ്ങൾക്ക് ലഭിച്ചത് ഒരു വീഡിയോ ആണെങ്കിൽ ആ വീഡിയോയുടെ പ്രധാന ഭാഗം
              സ്ക്രീൻ ഷോട്ട് എടുക്കുക എന്നിട്ട് അവ മുകളിൽ പറഞ്ഞ രീതിയിൽ സർച്
              ചെയ്താൽ അവയെക്കുറിച് നെറ്റിൽ ഉള്ള വിവരങ്ങൾ ലഭിക്കും{" "}
            </li>
            <li>
              ധാരാളം fact check വെബ്‌സൈറ്റുകൾ ഇന്നുണ്ട് .അവയിൽ നിങ്ങൾക്ക് ലഭിച്ച
              വാർത്തയുടെ വിവരം ഉണ്ടോ എന്ന് പരിശോധിക്കുക
            </li>
            <ol>
              <li>
                <a
                  href=" https://www.malayalam.factcrescendo.com/"
                  target="_blank"
                >
                  {" "}
                  https://www.malayalam.factcrescendo.com/
                </a>
              </li>
              <li>
                <a href=" https://www.factchecker.in/" target="_blank">
                  {" "}
                  https://www.factchecker.in/
                </a>
              </li>
              <li>
                <a
                  href="  https://twitter.com/PIBFactCheck?ref_src=twsrc%5Etfw"
                  target="_blank"
                >
                  {" "}
                  https://twitter.com/PIBFactCheck?ref_src=twsrc%5Etfw
                </a>
              </li>
              <li>
                <a href="  https://www.boomlive.in/" target="_blank">
                  {" "}
                  https://www.boomlive.in/
                </a>
              </li>
            </ol>
            <li>
              ജില്ലാതലത്തിൽ പ്രചരിക്കുന്ന വ്യാജ വാർത്തകളുടെ ആധികാരികത
              പരിശോധിക്കാൻ ജില്ലാ കളക്ടർ , ജില്ലാ പോലീസ് മേധാവി , സംസ്ഥാന പോലീസ്
              എന്നിവരുടെ ഫേസ്ബുക് പേജ് സന്ദർശിക്കുക .
            </li>
            <li>
              ഉറപ്പില്ലാത്ത ഒരു ഫോർവെർഡ് മെസേജ് അയച്ചു കൊടുക്കും മുൻപ് വിവരങ്ങൾ
              യാഥാർഥ്യം ആണോ എന്ന് ഉറപ്പ് വരുത്തുക . ഒരു വാർത്ത ലഭിച്ചാൽ കണ്ണും
              പൂട്ടി മറ്റുള്ളവരിലേക്ക് പെട്ടന്ന് എത്തിക്കണം എന്ന് തോന്നുന്നത്
              മനുഷ്യന്റെ മനശാസ്ത്രപരമായ സ്വഭാവം ആണ് . അത് തിരിച്ചറിഞ്ഞ്
              യുക്തിപൂർവം ഇടപെടുക .
            </li>
            <h6>
              *"തെറ്റിദ്ധാരണാജനകമായ ഒരു വാചകത്തിന് മനുഷ്യരെ കൊല്ലാൻ മാത്രം
              മൂർച്ചയുണ്ട് "*
            </h6>
            </div>
          </Collapsible>
        </div>
        
        <div></div>

        <div className={style.videoGrid}>
          {videoGrid.map((grid, i) => (
            <div className="d-flex flex-column align-items-center" key={` Video${i}`}>
              <iframe
                width="300"
                height="200"
                src={`https://www.youtube.com/embed/${grid.id}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <h7 className={style.tag}>{grid.tag}</h7>
            </div>
          ))}
        </div>
        <div className={style.link}>
          <a
            href="https://www.youtube.com/playlist?list=PLAJ55FxVlOrBLVBBA0NQSeMOn33vcQyJg"
            target="_blank"
          >
            കൂടുതൽ വീഡിയോകൾ{" "}
          </a>
        </div>
      </main>
    </Layout>
  );
}

export default Fact;
