import Head from "next/head";
import React from "react";
import AashaWorkers from "../components/aashaworkers";
import Layout from "../components/Layout";
import Medical from "../components/medical";
import RRTMembers from "../components/rrtmembers";
import WardMember from "../components/wardmember";
import Slide from "react-reveal/Slide";

export default function Contacts() {
  return (
    <Layout title="Medical">
      <Head>
        <title>Covid Focus | Contacts</title>
        <meta
          name="description"
          content="Designed and developed by GEC Thrissur"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Slide left duration={1200}>
          <WardMember />
        </Slide>
        <Slide right duration={1200}>
          <AashaWorkers />
        </Slide>
        <RRTMembers />
        <Medical />
      </div>
    </Layout>
  );
}
