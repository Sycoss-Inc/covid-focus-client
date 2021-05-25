import Head from "next/head";
import Header from "./components/header.component";
import Footer from "./components/footer.component";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Covid Focus</title>
        <meta name="description" content="A panchayat covid focus website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>{/* Main */}</main>

      <Footer />
    </div>
  );
}
