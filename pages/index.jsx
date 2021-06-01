import Head from "next/head";
import styles from "../styles/Home.module.css";
import Layout from "../components/Layout";
import Rate from "../components/Rate";
import  Notice from "../components/Notice";

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
        </main>
      </div>
    </Layout>
  );
}
