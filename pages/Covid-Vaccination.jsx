import React from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import Deliv from "./home_delivery";
import style from "../styles/covid-vaccin.module.css";

function Vaccination() {
  return (
    <Layout title="Vaccination">
      <Head>
        <title>Covid-Vaccination</title>
        <meta
          name="description"
          content="Designed and developed by GEC Thrissur"
        />ട്രിപ്പിൾ ലോക്ഡൗൺ കാലത്തെ ക്രമീകരണങ്ങൾ അനുസരിച്ച് RRT അംഗങ്ങൾക്കല്ലാതെ ഹോം ഡെലിവറി ചെയ്യാൻ കഴിയാത്ത സാഹചര്യമാണ്. ആയതിനാൽ അവശ്യ സാധനങ്ങൾക്ക് വേണ്ടി താങ്കളുടെ വാർഡിലെ RRT അംഗത്തെ ബന്ധപ്പെടുക
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={style.stats}>
        <h1 className={style.headin}> <strong>റജിസ്റ്റർ ചെയ്യേണ്ടത് ഇങ്ങനെ </strong> </h1>
        <ul>
          <h6>
            <li> <a href="https://selfregistration.cowin.gov.in/">https://selfregistration.cowin.gov.in/</a> സന്ദർശിക്കുക </li>
            <br /> <li>മൊബൈൽ ഫോൺ നമ്പര്‍ രേഖപ്പെടുത്തി ഒടിപി ലഭിക്കാന്‍ ക്ലിക്ക് ചെയ്യുക</li>
            <br /> <li>മൊബൈലില്‍ ലഭിക്കുന്ന ഒടിപി നമ്പര്‍ വെബ്‌റ്റൈില്‍ രേഖപ്പെടുത്തി ‘വെരിഫൈ’ എന്നതില്‍ ക്ലിക്ക് ചെയ്യുക</li>
            <br /> <li>തുടര്‍ന്ന് ‘രജിസ്‌ട്രേഷന്‍ വാക്‌സിനേഷന്‍’ പേജില്‍ പേര്, ലിംഗം, ജനന തിയതി, ഫൊട്ടൊ പതിച്ച തിരിച്ചറിയല്‍ കാര്‍ഡിലെ മറ്റു വിവരങ്ങള്‍ എന്നിവ രേഖപ്പെടുത്തി ‘രജിസ്റ്റര്‍’ എന്നതില്‍ ക്ലിക്ക് ചെയ്യുക</li>
            <br /> <li>രജിസ്റ്റര്‍ ചെയ്തുകഴിഞ്ഞാല്‍, അപ്പോയിന്റ്‌മെന്റ് ഷെഡ്യൂളിനുള്ള ഓപ്ഷന്‍ ലഭിക്കും. രജിസ്റ്റര്‍ ചെയ്ത വ്യക്തിയുടെ പേരിന് അടുത്തുള്ള ‘ഷെഡ്യൂള്‍’ എന്നതില്‍ ക്ലിക്ക് ചെയ്യുക</li>
            <br /> <li>നിങ്ങളുടെ പിന്‍ കോഡ് നല്‍കി തിരയുക. പിന്‍ കോഡിലെ കേന്ദ്രങ്ങള്‍ ലഭ്യമാവുന്നതോടെ തിയതിയും സമയവും തിരഞ്ഞെടുത്ത് ‘കണ്‍ഫേം’ എന്നതില്‍ ക്ലിക്ക് ചെയ്യുക</li>
          </h6>
        </ul>
        <hr />
        <table>
          <tr>
            <td><img src="https://prod-cdn.preprod.co-vin.in/assets/images/covid19logo.jpg" alt="COWIN_LOGO" /></td>
            <td>COWIN പോർട്ടലിൽ രജിസ്റ്റർ ചെയ്യൂ    <br />
        <a href="https://selfregistration.cowin.gov.in/">   റജിസ്റ്റർ </a></td>
          </tr>
        </table>
        <div className={style.vel}>
         <strong>
        <a href="https://www.vaccinateme.in/covid/list?districtId=305&districtName=Kozhikode&pincode=680601&stateId=17&type=pincode"><h4 className={style.net}>വേലൂരിലെ  കോവിഡ് വാക്സിൻ ലഭ്യത പരിശോധിക്കുക</h4></a> </strong>
        <br />
        <h4> <strong className={style.default}> ഏതെങ്കിലും രോഗാവസ്ഥയിലുള്ള  18- 44 വയസ്സുള്ളവർ കോവിഡ് വാക്സിനേഷനായി എന്തു ചെയ്യണം ?</strong></h4>
        <br /> <h6>
        18 നും 45 നും ഇടയിൽ പ്രായമുള്ള ഹൃദ്രോഗികള്‍, ഹൃദയ വാൽവ് ശസ്ത്രക്രിയ കഴിഞ്ഞവര്‍, പ്രമേഹം, വ‍ൃക്ക, കരള്‍ രോഗികള്‍, രോഗപ്രതിരോധ ശേഷിയെ ബാധിക്കുന്ന മരുന്നുകള്‍ കഴിക്കുന്നവര്‍, ക്യാൻസര്‍ രോഗികള്‍, അരിവാള്‍ രോഗികള്‍, അംഗപരിമിതര്‍ തുടങ്ങിയവര്‍ക്ക്  ആദ്യഘട്ടത്തിൽ വാക്സിൻ നൽകാൻ തീരുമാനിച്ചിരിക്കുന്നു. ഓൺലൈൻ അപേക്ഷകൾക്കായി താഴെ നൽകിയിരിക്കുന്ന നിർദ്ദേശങ്ങൾ പിന്തുടരുക .
        <br /> <br />
        <ol>
          <br /> <li> <a href="https://www.cowin.gov.in/">www.cowin.gov.in/</a> എന്ന വെബ്സൈറ്റ് സന്ദർശിക്കുക. തിരിച്ചറിയൽ രേഖയും വ്യക്തിഗത വിവരങ്ങളും നൽകി രജിസ്റ്റർ ചെയ്യുക.</li>
          <br /> <li>Add more എന്ന ഓപ്ഷൻ നൽകി ഒരു മൊബൈൽ നമ്പറിൽ നിന്നും നാലു പേർക്ക് വരെ രജിസ്റ്റർ ചെയ്യാം.</li>
          <br /> <li><a href="https://covid19.kerala.gov.in/vaccine/">https://covid19.kerala.gov.in/vaccine/</a> എന്ന  വെബ്സൈറ്റിൽ നിങ്ങളുടെ വിവരങ്ങൾ നൽകുക.</li>
          <br /> <li>രോഗാവസ്ഥ വ്യക്തമാക്കുന്ന സർട്ടിഫിക്കറ്റ് അറ്റാച്ച് ചെയ്യുക.</li>
          <br /> <li>നൽകിയ വിവരങ്ങൾ ജില്ലാ തലത്തിൽ പരിശോധിച്ചതിനു ശേഷം രോഗാവസ്ഥയുടെ മുൻഗണനയും വാക്സിന്റെ ലഭ്യതയും അനുസരിച്ച് വാക്സിനേഷൻ ലഭ്യമാകുന്ന സ്ഥലവും തീയതിയും എസ്.എം.എസ് വഴി അറിയിക്കുന്നതാണ്.</li>
        </ol>
        </h6>
        <br /><br />
        <h4 className={style.net}>കോവിഡ് വാക്സിൻ ലഭിക്കാനുള്ള സ്ലോട്ട് ലഭ്യമായാൽ തൽക്ഷണം നിങ്ങളുടെ ടെലിഗ്രാം ആപ്പിൽ  അറിയിപ്പ് ലഭിക്കാനായി ഈ ചാനലുകളിൽ  ജോയിൻ ചെയ്യുക</h4>
        <br /><br />
        <table className={style.tele}>
             <tr>
              <td
                style={{
                  padding: 20,
                }}
              >
                <img
                  className={style.tele}
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/768px-Telegram_logo.svg.png"
                  alt="Telegram_Group_45+"
                />
              </td>
              <td
                style={{
                  padding: 20,
                }}
              >
                <a href="https://www.google.com/url?q=https%3A%2F%2Ftelegram.me%2Fjoinchat%2FF3n38kfnGeoyZjVl&sa=D&sntz=1&usg=AFQjCNHZHbmE2A1epIfkgFRVVIUWAz2LhA">
                  45 വയസ്സിന് മുകളിൽ ഉള്ളവർ{" "}
                </a>
              </td>
              <td
                style={{
                  padding: 20,
                }}
              >
                <img
                  className={style.tele}
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/768px-Telegram_logo.svg.png"
                  alt="Telegram_Group_18+45"
                />
              </td>
              <td
                style={{
                  padding: 20,
                }}
              >
                <a href="https://www.google.com/url?q=https%3A%2F%2Ftelegram.me%2Fjoinchat%2FNzAwKJZP0-I3OGY1&sa=D&sntz=1&usg=AFQjCNEt_mb-WhjNqAXbzTeVDVD3vs4EUg">
                  45 വയസ്സിന് താഴെ ഉള്ളവർ{" "}
                </a>
              </td>
            </tr>
        </table>
        </div>
      </main>
    </Layout>
  );
}

export default Vaccination;
