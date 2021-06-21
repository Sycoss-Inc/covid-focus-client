import Head from "next/head";
import styles from "../styles/Home.module.css";
import Layout from "../components/Layout";
import Pass from "../components/Pass";
import Rate from "../components/Rate";
import HelpDesk from "../components/help_desk";

import Link from "next/link";
import Noticetrail from "../components/noticetrail";

export default function Home({ rates, notices }) {
  return (
    <Layout title="Dashboard">
      <div className="container-fluid">
        <Head>
          <title>Covid Focus</title>
          <meta
            name="description"
            content="Designed and developed by GEC Thrissur"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <Rate rates={rates} />

          <Noticetrail notices={notices} />
          <div className={`row ${styles.stats}`}>
            {" "}
            <div className={`col-12 col-md-7 ${styles.statQues}`}>
              <div>
                {" "}
                <p>എന്റെ പഞ്ചായത്തിൽ എത്ര കൊറോണ രോഗികളുണ്ട് ?</p>
                <p className="d-none d-md-block">
                  എന്റെ പഞ്ചായത്തിൽ ഇന്ന് എത്ര പുതിയ കൊറോണ രോഗികളുണ്ട് ?
                </p>
                <p className="d-none d-md-block">
                  എന്റെ പഞ്ചായത്തിൽ എത്രപേർക്ക് രോഗം ഭേദമായി ?
                </p>
                <p>എന്റെ പഞ്ചായത്തിലെ പോസിറ്റീവ് നിരക്ക് എത്രയാണ്?</p>
                <Link href="/stats">
                  <button className="btn ">VIEW FULL STATISTICS</button>
                </Link>
              </div>
            </div>
            <div className={` col-12 col-md-5 ${styles.statsImg}`}></div>
          </div>
          <HelpDesk />
          <Pass />
        </main>
      </div>
    </Layout>
  );
}
export async function getStaticProps() {
  const res = await fetch(
    "https://covid-focus-sycoss.herokuapp.com/client/panchayat?panchayat=veloor_panchayat&records=1"
  );
  const rates = await res.json();

  const response = await fetch(
    "https://covid-focus-sycoss.herokuapp.com/client/notices?panchayat=veloor_panchayat&record=3"
  );
  const notices = await response.json();

  return {
    props: {
      rates: rates.message[0],
      notices: notices.message,
    },
  };
}
