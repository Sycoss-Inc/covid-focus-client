import React from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import style from "../styles/emergency.module.css";

function Emergency() {
  return (
    <Layout title="Emergency">
      <Head>
        <title>Covid Focus | Emergency</title>
        <meta
          name="description"
          content="Designed and developed by GEC Thrissur"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={style.stats}>
        <h1>Main body</h1>
        <p>This is emergency</p>
      </main>
    </Layout>
  );
}

export default Emergency;
