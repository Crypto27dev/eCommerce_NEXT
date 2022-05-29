import React from "react";
import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Head>
        <title>Headphones, Earphones Online Store</title>
        <meta
          name="description"
          content="E-commerce App for Headphones, Earphones, Speakers. Build with NextJs, Sanity and Payment gateway: Stripe."
        />
      </Head>
      <header>
        <Navbar />
      </header>
      <main className="main-container">{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
