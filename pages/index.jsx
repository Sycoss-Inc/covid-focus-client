import Head from "next/head";
import styles from "../styles/Home.module.css";
import Layout from "../components/Layout";
import Pass from "../components/Pass";
import Rate from "../components/Rate";
import Notice from "../components/Notice";

import Link from "next/link";
import Noticetrail from "../components/noticetrail";

export default function Home() {
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
          <Rate />

          <Notice />
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

          <Pass />
        </main>
      </div>
    </Layout>
  );
}
