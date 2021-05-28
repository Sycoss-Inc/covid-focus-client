import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Layout from "../components/Layout";
import Header from "../components/Header";
import Statistics from "../components/Statistics";

export default function Home() {
  return (
    <Layout title="Dashboard">
      <div className={styles.container}>
        <Head>
          <title>Covid Focus</title>
          <meta
            name="description"
            content="Designed and developed by GEC Thrissur"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        {/* <Header title="Dashboard"/> */}

        <main className={styles.main}>
          <h1>Main body</h1>
        </main>
      </div>
    </Layout>
  );
}
