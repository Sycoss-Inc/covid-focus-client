import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import HeroSection from "./HeroSection";
import NavBar from "./Navbar";

export default function Layout({ children, title }) {
  return (
    <div>
      <NavBar title={title} />
     {(title==="Dashboard")?<HeroSection/>: <Header title={title} />}

      {children}

      <Footer />
    </div>
  );
}
