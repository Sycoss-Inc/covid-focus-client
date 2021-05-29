import React from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import style from "../styles/stats.module.css";

function Stats() {
  return (
    <Layout title="Statistics">
      <Head>
        <title>Covid Focus | Stats</title>
        <meta
          name="description"
          content="Designed and developed by GEC Thrissur"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={style.stats}>
        <h1>Main body</h1>
        <p>This is stats</p>
      </main>
    </Layout>
  );
}

export default Stats;
