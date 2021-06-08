import React from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import style from "../styles/stats.module.css";

function About() {
  return (
    <Layout title="Statistics">
      <Head>
        <title>Covid Focus | About</title>
      </Head>

      <main className={style.stats}>
        <div>
        <strong>Designed By</strong>
             Navneeth Variar
    <br />   Abil Savio    
    <br />   Gokul P Dinesh
    <br />   Rishika Raveendran
    <br />   Annie T George
    <br />   Niranjan Neelakantan 
    <br />   Athul N Nair
    <br />   Maria Viji George 
    <br />   Mariya Thomas 
    <br />   Linette Joseph 
    <br />   Shone Stallin
    <br />   Analraj V        </div>
      </main>
    </Layout>
  );
}

export default About;
