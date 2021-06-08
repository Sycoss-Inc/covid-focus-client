import React from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import style from "../styles/home_delivery.module.css";

function Deliv() {
  return (
    <Layout title="HomeDelivery">
      <Head>
        <title>Covid Focus | Home Delivery</title>
      </Head>

      <main className={style.stats}>
        
        <p className={style.para}>ട്രിപ്പിൾ ലോക്ഡൗൺ കാലത്തെ ക്രമീകരണങ്ങൾ അനുസരിച്ച് RRT അംഗങ്ങൾക്കല്ലാതെ ഹോം ഡെലിവറി ചെയ്യാൻ കഴിയാത്ത സാഹചര്യമാണ്. 
          ആയതിനാൽ അവശ്യ സാധനങ്ങൾക്ക് വേണ്ടി താങ്കളുടെ വാർഡിലെ RRT അംഗത്തെ ബന്ധപ്പെടുക</p>
          <br />
          <p>താങ്കളുടെ വാർഡിലെ RRT അംഗങ്ങളുടെ  വിവരങ്ങൾ അറിയാൻ<a href="" className={style.link}>ഇവിടെ ക്ലിക്ക് ചെയ്യുക</a></p>
      </main>
    </Layout>
  );
}
 

export default Deliv;

