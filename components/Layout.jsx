import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import NavBar from "./Navbar";

export default function Layout({ children, title }) {
  return (
    <div>
      <NavBar title={title} />
      <Header title={title} />

      {children}

      <Footer />
    </div>
  );
}
