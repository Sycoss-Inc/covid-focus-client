import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import Header from "./header";
import Footer from "./footer";

function Layout(props) {
  return (
    <>
      <Head>
        <title>{props.title}</title>
        <meta name="description" content="A panchayat covid focus website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>{props.children}</main>

      <Footer />
    </>
  );
}

Layout.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Layout;
